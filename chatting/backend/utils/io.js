module.exports = function (io) {
  io.of("/chat").on("connection", (socket) => {
    console.log("a user connected to /chat  " + socket.id);

    // 이 부분에 소켓 이벤트 처리 코드 추가 가능

    socket.on("disconnect", () => {
      console.log("user disconnected from /chat");
    });
  });
};
