const path = require('path');

module.exports = {
  entry: './src/scriptsCompiled/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js'
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
  }
};
