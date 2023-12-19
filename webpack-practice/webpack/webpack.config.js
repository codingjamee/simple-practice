// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./index.tsx"), // 진입점(entry) 파일 경로
  output: {
    //웹팩 번들링 결과에 대한 옵션 기본경로는 dist
    filename: "bundle.js", // 번들 파일 이름
    path: path.resolve(__dirname, "dist"), // 번들 파일 저장 경로
  },
  resolve: {
    //번들링할 확장자 설정 //순서대로 확인함
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    //번들링 할 때 플러그인 설정 가능
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: "file-loader", // 이미지 파일을 모듈로 처리하는 로더
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        // style-loader : style태그를 삽입해 dom에 css추가
        // css-loader: css확장자의 css파일을 읽기 위한 로더
      },
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
    ],
  },
  externals: {
    //번들링 결과에서 제외할 라이브러리들
    react: "React",
    "react-dom": "ReactDOM",
  },
  mode: "development",
  devServer: {
    liveReload: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ], //index.html파일에 bundle.js파일을 inject하는 플러그인
  //이렇게하면 html파일에 script태그를 넣지 않아도 됨!
};
