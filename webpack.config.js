const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssExtract = require("mini-css-extract-plugin");
const Copy = require("webpack-copy-plugin");
const path = require("path");

const registerEntry = (name) => {
  return new HtmlWebPackPlugin({
    name,
    filename: `${name}.bundle.html`,
    chunks: [name],
    template: "./ui/index.html",
  });
};

module.exports = {
  mode: `development`,
  entry: {
    Main: "./ui/index.jsx",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new CssExtract({
      filename: "[name].style.css",
    }),
    registerEntry("Main"),
    new CleanWebpackPlugin(),
  ],
};
