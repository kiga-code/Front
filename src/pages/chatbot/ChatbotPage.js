import React, { Component } from "react";
import UserCard from "./components/UserCard";
import Button from "../../components/button";
import ChatCard from "./components/ChatCard";
import "./styles/ChatbotPage.scss";
import { connect } from "react-redux";

class ChatbotPage extends Component {
  render() {

    return (
      <div className="Chatbot-Container">
        <div className="Chatbot-Container-right">
          <UserCard />
        </div>
        <div className="Chatbot-Container-left">
          <ChatCard />
        </div>
        <div className="Chatbot-Container-down">
          <textarea
            placeholder="Escreva aqui..."
            className="Chatbot-fild"
            required
            ref={chatText => {
              this.chatArea = chatText;
            }}
            rows="5"
          />
          <Button
            styleClass="Chatbot-Container-button"
            onClick={e => {
              e.preventDefault();
              this.props.onSendChat(this.chatArea.value);
            }}
          >
            Enviar
          </Button>
        </div>
      </div>
    );
  }
}



export default(ChatbotPage);
