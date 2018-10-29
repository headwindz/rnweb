const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: "./index.js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-native": "react-native-web"
    }
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./web/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};