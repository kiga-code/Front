import React, { Component } from "react";
import UserCard from "./components/UserCard";
import Button from "../../components/button";
import ChatCard from "./components/ChatCard";
import "./styles/ChatbotPage.scss";

class ChatbotPage extends Component {
  render() {
    return (
      <div className="Chatbot-Container">
        <div className="Chatbot-Container-right">
          <UserCard>Teste</UserCard>
        </div>
        <div className="Chatbot-Container-left">
          <ChatCard />
        </div>
        <div className="Chatbot-Container-down">
          <textarea
            placeholder="Escreva aqui..."
            className="Chatbot-fild"
            rows="5"
          />
          <Button styleClass="Chatbot-Container-button">Enviar</Button>
        </div>
      </div>
    );
  }
}
export default ChatbotPage;
