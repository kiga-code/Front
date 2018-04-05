import React from "react";

const ChatCard = props => {
  return (
    <div className="Card-Chatbot">
      <div />
      <p className="Card-Chatbot-text">
        {props.number}-{props.text}
      </p>
    </div>
  );
};
export default ChatCard;
