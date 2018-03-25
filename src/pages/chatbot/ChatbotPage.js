import React, { Component } from "react";
import UserCard from "./components/UserCard";
import Button from "../../components/button";
import ChatCard from "./components/ChatCard";
import "./styles/ChatbotPage.scss";
import { connect } from "react-redux";

class ChatbotPage extends Component {
  render() {
    const { chatValue } = this.props;
    console.log(this.props);
    return (
      <div className="Chatbot-Container">
        {chatValue.map(chat => {
          if (chatValue.length > 0) {
            return(
              <div className="Chatbot-Container-left">
                <ChatCard number={chat.option} text={chat.message} />
              </div>
            )
          } else {
            return(
              <div className="Chatbot-Container-left">
                <ChatCard text="Comando Invalido" />
              </div>
            )
          }
        })}
        {/* <div className="Chatbot-Container-right">
            <UserCard />
          </div> */}
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

function mapStateToProps(state) {
  console.log(state);
  return {
    chatValue: state.chat.value
  };
}

export default connect(mapStateToProps)(ChatbotPage);
