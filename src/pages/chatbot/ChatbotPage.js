import React, { Component } from "react";
import UserCard from "./components/UserCard";
import Button from "../../components/button";
import ChatCard from "./components/ChatCard";
import "./styles/ChatbotPage.scss";
import { connect } from "react-redux";
import * as chatBotActions from "../../services/redux/actions/ChatbotActions";

class ChatbotPage extends Component {
  componentDidMount() {
    this.props.chatBot();
  }
  render() {
    const { chatValue, chatbot } = this.props;
    console.log(this.props);
    return (
      <div className="Chatbot">
        <h1 className="Chatbot-title">Chatbot</h1>
        <div className="Chatbot-Container">
          {chatValue.map(chat => {
            if (chatValue.length > 0) {
              return (
                <div className="Chatbot-Container-left">
                  <ChatCard
                    key={chat.id}
                    number={chat.option}
                    text={chat.message}
                  />
                </div>
              );
            } else {
              return (
                <div className="Chatbot-Container-left">
                  <ChatCard text="Invalido" />
                </div>
              );
            }
          })}
          {chatValue.value > 0 ? (
            <div className="Chatbot-Container-right">
              <UserCard text={this.chatArea ? this.chatArea.value : null} />
            </div>
          ) : (
            ""
          )}

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
                const options = chatValue.filter(item => {
                  return item.option === this.chatArea.value;
                });
                if (options.length >= 1) {
                  this.props.onSendChat(options[0]);
                } else {
                  console.log("Invalida");
                }
              }}
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    chatValue: state.chat.value,
    chatbot: state.chat.chat
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    chatBot: () => {
      dispatch(chatBotActions.chatBot({}));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatbotPage);
