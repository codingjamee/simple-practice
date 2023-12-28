import { useEffect, useState } from "react";
import "./App.css";
import socket from "./server";
import InputField from "./components/InputField/InputField";

const App = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const askName = () => {
    const userName = prompt("이름을 입력");
    console.log("username", userName);
    socket.emit("login", userName, (res) => {
      console.log("Res", res);
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
    });
    askName();
  }, []);

  return (
    <div>
      <div className="App">
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
