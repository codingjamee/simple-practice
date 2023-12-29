const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./index.tsx"), //진입점
  output: {
    filename: "bundle.js", //번들 파일 이름
    path: path.resolve(__dirname, "..", "dist"), //번들파일 저장 경로
  },
  mode: "development",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    //번들링할 확장자 설정. 순서대로 확인
  },
  module: {
    //번들링 할 때 플러그인 설정 가능
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: "file-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },

      //style-loader: style태그를 삽입해 dom에 css추가
      //css-loader: css 확장자의 css 파일을 읽기 위한 로더
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
    ],
  },
  devServer: {
    liveReload: false,
    static: path.resolve(__dirname, "../"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./index.html"),
    }),
  ],
};
