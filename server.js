// const http = require('http')
// const querystr = require('querystring')
const { URL } = require('url')
const path = require('path')
const fs = require('fs')

const spti = require('./server-lib.js')
// const log = require('./server-clientLog.js')

const http = require('http')
const serverHttp = http.createServer()
const staticPath = ''

serverHttp.on('request', (request, response) => {
  var urlParsed = new URL(request.url, 'http://localhost:3000/')
  // console.log(request.url, urlParsed.pathname, request.method)
  // console.log(urlParsed)
  console.log('request coming in,', Date.now())

  if (request.method === "POST") {

    console.log('request coming in,', Date.now())
    console.log("POST, request headers: ", request.headers)

    response.setHeader("Access-Control-Allow-Origin", request.headers.origin)

    spti.readReqBody(request)
      .then((body) => {
        request.body = body
        // console.log(request.body)
        if (request.url === "/log") {
          // log.enqueue(request, response)
          // log.logToConsole(request, response)
        }
      })
  } else if (request.method === "GET") {

    request.urlParsed = new URL(request.url, 'http://localhost:3000/')

    if (request.urlParsed.pathname === "/getNewLogs") {
      // log.getNew(request, response)
    } else {
      if (request.url == '/' || request.url == '/home') {
        request.url = '/index.html'
        // spti.getFiles(request, response, staticPath)
      }
      spti.getFiles(request, response, staticPath)
    }

  } else if (request.method === "OPTIONS") {
    console.log("OPTIONS request, headers: ", request.headers)

    response.setHeader("Access-Control-Allow-Origin", request.headers.origin)
    response.setHeader("Access-Control-Allow-Headers", "Content-Type")
    response.setHeader("Access-Control-Max-Age", 120)

    response.statusCode = 200
    // response.writeHead(200, http.STATUS_CODES[200], {
    //   "Access-Control-Allow-Origin": request.headers.origin, // http://foo.example
    //   "Access-Control-Max-Age": 120000,
    //   // if im not mistaken, by the spec, we should only add this header if there're
    //   // non-simple methods (POST is simple)
    //   // "Access-Control-Allow-Methods": request.headers["access-control-request-method"],

    //   "Access-Control-Allow-Headers": "Content-Type"// request.headers["access-control-request-headers"],
    //   // "Content-Type": 'text/plain'
    // })

    console.log("OPTIONS, response headers: ", response.getHeaders())

    response.end()
  }
})

serverHttp.listen('3000')
