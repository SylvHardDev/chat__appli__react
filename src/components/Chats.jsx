import React from "react";
import homme from "../img/avatar/homme.png";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={homme} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello !!</p>
        </div>
      </div>
      <div className="userChat">
        <img src={homme} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello !!</p>
        </div>
      </div>
      <div className="userChat">
        <img src={homme} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello !!</p>
        </div>
      </div>
      <div className="userChat">
        <img src={homme} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello !!</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
