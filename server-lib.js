const path = require('path')
const fs = require('fs')

const statusCodes = require('http').STATUS_CODES
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.svg': 'application/image/svg+xml'
}

function readFromDisk(pathname) {
  return new Promise(function(resolve, reject) {
    fs.readFile(pathname, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function writeToDisk(pathname, data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(pathname, data, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

function readReqBody(request) {
  return new Promise((resolve, reject) => {

    var body = []

    request
      .on('data', (chunk) => {
        // console.log('chunk')
        body.push(chunk)
      })
      .on('end', () => {
        body = Buffer.concat(body).toString()
        // console.log('body', body)
        resolve(body)
      })
  })
}

function getFiles(request, response, pre) {
  const fileext = path.extname(request.url).toLowerCase()
  const filepath = (pre) ? path.join(__dirname, pre, request.url) : path.join(__dirname, request.url)

  readFromDisk(filepath)
    .then((data) => {
      // response.setHeader('Content-Type', )
      response.writeHead(200, statusCodes[200], {'Content-Type': mimeTypes[fileext]})
      response.end(data)
    })
    .catch((err) => {
      console.log(err.message)
      response.writeHead(404, statusCodes[404], {'Content-Type': 'text/plain'})
      response.end('awh, shit!')
      // return
    })
}

module.exports = {
  readFromDisk: readFromDisk,
  writeToDisk: writeToDisk,
  readReqBody: readReqBody,
  getFiles: getFiles
}
