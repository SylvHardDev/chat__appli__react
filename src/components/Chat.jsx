import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import menuIcon from "../img/menu.png"

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <img src={data.user.photoURL} alt="" />
        <span>{data.user?.displayName}</span>
        
        <button className="menuIcon">
          <img src={menuIcon} alt="" />
        </button>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
