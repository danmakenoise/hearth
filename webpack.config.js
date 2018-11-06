const path = require("path");

module.exports = {
  entry: "./client/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "server/public"),
    filename: "bundle.js"
  }
};
