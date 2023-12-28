import { io } from "socket.io-client";
// const socket = io("http://localhost:5001");
const socket = io("/chat");

export default socket;
