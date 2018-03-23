import React from "react";

const ChatCard = props => {
  return (
    <div className="Card-Chatbot">
      <div />
      {props.value.map(chat => (
        <p className="Card-Chatbot-text">{chat.name}</p>
      ))}
    </div>
  );
};
export default ChatCard;
