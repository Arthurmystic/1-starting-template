const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/to-do-list.html",
    }),
  ],

  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/to-do-list.html"],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // for css and loading images in js (css-loader does this)
      },

      {
        test: /\.html$/i, //for images referenced in html
        loader: "html-loader",
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // for images loading images
        type: "asset/resource",
      },
    ],
  },
};
