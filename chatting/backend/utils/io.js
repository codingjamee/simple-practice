const userController = require("../Controllers/user.controller");
const chatController = require("../Controllers/chat.controller");

module.exports = function (io) {
  io.of("/chat").on("connection", (socket) => {
    console.log("a user connected to /chat  " + socket.id);

    // 이 부분에 소켓 이벤트 처리 코드 추가 가능

    socket.on("login", async (userName, cb) => {
      console.log("back", userName);
      //유저정보 저장
      try {
        const user = await userController.saveUser(userName, socket.id);
        const welcomeMessage = {
          chat: `${user.name}님이 들어왔습니다`,
          user: { id: null, name: "system" },
        };
        io.of("/chat").emit("message", welcomeMessage);
        cb({ ok: true, data: user });
      } catch (err) {
        cb({ ok: false, error: err.message });
      }
    });

    socket.on("sendMessage", async (message, cb) => {
      try {
        //유저찾기 socket id
        const user = await userController.checkUser(socket.id);
        //메세지 저장 (유저)
        const newMessage = await chatController.saveChat(message, user);
        //
        io.of("/chat").emit("message", newMessage);
        // socket.broadcast.emit("message", newMessage);
        cb({ ok: true });
      } catch (err) {
        cb({ ok: false, error: err.message });
      }
    });

    socket.on("disconnect", () => {
      console.log("user disconnected from /chat");
    });
  });
};
