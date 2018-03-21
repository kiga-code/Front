import React from "react";
import "./styles/Chatbot.scss";

const UserCard = ({ children }) => {
  return (
    <div className="Card-Chatbot-user">
      <div className="Card-Chatbot-arrow" />
      <p className="Card-Chatbot-user-text">{children}</p>
    </div>
  );
};

export default UserCard;
