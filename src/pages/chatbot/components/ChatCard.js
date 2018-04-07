import React from "react";

const ChatCard = props => {
  console.log(props);
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
