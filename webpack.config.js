const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
        {
            test:/\.(js|jsx)$/,
            // include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ]
};