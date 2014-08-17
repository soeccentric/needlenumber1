module.exports = {
  cache: true,

  entry: ["webpack-dev-server/client?http://localhost:8080", "./scripts/index.js"],

  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  module: {
    loaders: [
    ]
  }
}
