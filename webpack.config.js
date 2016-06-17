module.exports = {
  entry: "./client/app.js",
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader" }
    ]
  },
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
}
