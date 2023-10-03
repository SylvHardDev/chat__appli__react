import React from "react";
import photos from "../img/avatar/femme.png";

const Message = ({ message }) => {
  console.log(message);
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={photos} alt="sary" />
        <span>vo zao</span>
      </div>
      <div className="messageContent">
        <p>Holla !!</p>
        <img src={photos} alt="sary" />
      </div>
    </div>
  );
};

export default Message;
