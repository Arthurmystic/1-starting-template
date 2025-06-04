const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // UPDATE THIS
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/to-do-list.html", // UPDATE THIS
    }),
  ],

  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/to-do-list.html"], // UPDATE THIS
  },

  module: {
    rules: [
      {
        test: /\.css$/i, // for css and loading images in js (css-loader does this)
        use: ["style-loader", "css-loader"],
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
