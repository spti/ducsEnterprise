const path = require('path');

module.exports = {
  entry: {
    index: './demo/src/demo-index.js',
    // test: './src/test.js'
  },
  output: {
    path: path.resolve(__dirname, 'demo/dist/'),
    filename: 'demo-[name].js'// 'index.js'
  },
  mode: "development",
  devtool: 'inline-source-map',
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      "node_modules"
      // path.resolve(__dirname, "src")
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'react-app/prod' // babel-preset-react-app
          }
        }
      }
    ]
  }
};
