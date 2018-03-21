import React from "react";

const ChatCard = ({ children }) => {
  return (
    <div className="Card-Chatbot">
      <div />
      <p className="Card-Chatbot-text">{children}</p>
    </div>
  );
};
export default ChatCard;
