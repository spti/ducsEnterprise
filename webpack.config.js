const path = require('path');

module.exports = {
  entry: './src/index-app.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index-app.js'
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
