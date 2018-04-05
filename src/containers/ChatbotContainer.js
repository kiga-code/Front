import React, { Component } from "react";
import ChatbotPages from "../pages/chatbot";
import * as ChatbotActions from "../services/redux/actions/ChatbotActions";
import { connect } from "react-redux";

class ChatbotContainer extends Component {
  createChat(option) {
    console.log(option);
    var request = {
      id: option.id
    };
    this.props.dispatch(ChatbotActions.chatBotSend(request));
  }
  render() {
    return <ChatbotPages onSendChat={this.createChat.bind(this)} />;
  }
}

export default connect()(ChatbotContainer);
