import React from "react";
import "./styles/Chatbot.scss";

const UserCard = props => {
  return (
    <div className="Card-Chatbot-user">
      <div className="Card-Chatbot-arrow" />
      <p className="Card-Chatbot-user-text">{props.text}</p>
    </div>
  );
};

export default UserCard;
