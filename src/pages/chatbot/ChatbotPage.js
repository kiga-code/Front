import React, { Component } from "react";
import UserCard from "./components/UserCard";
import Button from "../../components/button";
import ChatCard from "./components/ChatCard";
import "./styles/ChatbotPage.scss";
import { connect } from "react-redux";
import * as chatBotActions from "../../services/redux/actions/ChatbotActions";
class ChatbotPage extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.props.chatBot();
  }
  render() {
    const { chatValue, chatbot, user } = this.props;
    let invalido = ["Tente novamente"];
    return (
      <div className="Chatbot-Container">
        {chatValue.map(chat => {
          if (chatValue.length > 0) {
            return (
              <div className="Chatbot-Container-left">
                <ChatCard number={chat.option} text={chat.message} />
              </div>
            );
          } else {
            return (
              <div className="Chatbot-Container-left">
                <ChatCard text={invalido} />
              </div>
            );
          }
        })}

        <div className="Chatbot-Container-down">
          <textarea
            placeholder="Escreva aqui..."
            className="Chatbot-fild"
            required
            ref={chatText => {
              this.chatArea = chatText;
            }}
            rows="3"
          />
          <Button
            styleClass="Chatbot-Container-button"
            onClick={e => {
              e.preventDefault();
              const options = chatValue.filter(item => {
                return item.option == this.chatArea.value;
              });
              if (options.length > 0) {
                this.props.onSendChat(options[0]);
              } else {
               
              }
              this.chatArea.value = "";
              this.setState({ list: this.state.list.concat(options[0]) });
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
  return {
    chatValue: state.chat.value,
    chatbot: state.chat.chat,
    user: state.chat.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    chatBot: () => {
      dispatch(chatBotActions.chatBot({}));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatbotPage);
