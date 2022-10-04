const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "./src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
    clean: true,
    publicPath: "/"
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.(css|scss)$/,
          use: [{
            loader: "style-loader"
        },
        {
            loader: "css-loader"
        },
        {
            loader: "sass-loader"
        }]
       },
        {
          test: /\.(png|svg|jpg|gif|jpeg|webp)$/, use: {
            loader: "file-loader",
            options: { name: "[name].[ext]" }
          }
        },
        { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ["file-loader"] }
    ]
  },
  resolve: {
    extensions: ["*", ".js", "jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "Star Wars Blog",
        favicon: "lightsaver.png",
        template: "template.html"
    }),
    new Dotenv({ safe: true, systemvars: true })
  ]
};