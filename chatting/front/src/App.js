import { useEffect, useState } from "react";
import "./App.css";
import socket from "./server";
import InputField from "./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer";

const App = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  console.log(messageList);

  const askName = () => {
    const userName = prompt("이름을 입력");
    console.log("username", userName);
    socket.emit("login", userName, (res) => {
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", message, (res) => {
      console.log("sendMessage res", res);
      setMessage("");
    });
  };
  useEffect(() => {
    socket.on("message", (message) => {
      console.log("res", message);
      setMessageList((prev) => prev.concat(message));
    });
    askName();
  }, []);

  return (
    <div>
      <div className="App">
        <MessageContainer messageList={messageList} user={user} />
        <InputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default App;
