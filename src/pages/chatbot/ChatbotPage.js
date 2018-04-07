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
  componentWillReceiveProps(nextProps) {
    if (this.state.list.length === 0) {
      this.setState({
        list: this.state.list.concat(
          Object.keys(nextProps.chatbot).map(key => nextProps.chatbot[key])
        )
      });
    } else {
      const copyChatbot = { ...nextProps.chatbot };
      console.log("copyChatbot", copyChatbot);
      this.state.list.forEach(item => {
        console.log("item.id", item.id);
        item.id && delete copyChatbot[item.id];
      });
      console.log("copyChatbot", copyChatbot);
      this.setState({
        list: this.state.list.concat(
          Object.keys(copyChatbot)
            .map(key => nextProps.chatbot[key])
            .filter()
        )
      });
    }
  }
  componentDidMount() {
    this.props.chatBot();
  }
  render() {
    const { chatValue, chatbot, user } = this.props;
    return (
      <div className="Chatbot-Container">
        {this.state.list.map(chat => {
          if (chat.option) {
            return (
              <div className="Chatbot-Container-left">
                <ChatCard number={chat.option} text={chat.message} />
              </div>
            );
          } else {
            return (
              <div className="Chatbot-Container-right">
                <UserCard text={chat.id} />
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
                console.log("Invalida");
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
