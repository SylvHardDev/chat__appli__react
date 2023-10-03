import React, { useContext } from "react";
// import photos from "../img/avatar/femme.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  console.log(message);
  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img src={photos} alt="sary" />
        <span>vo zao</span>
      </div>
      <div className="messageContent">
        <p>Holla !!</p>
        <img src={photos} alt="sary" />
      </div> */}
    </div>
  );
};

export default Message;
