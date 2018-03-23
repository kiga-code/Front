import React, { Component } from "react";
import ChatbotPages from "../pages/chatbot";
import * as ChatbotActions from "../services/redux/actions/ChatbotActions";
import { connect } from "react-redux";

class ChatbotContainer extends Component {
  createChat(chatText, id) {
    this.props.dispatch(ChatbotActions.chatBot(chatText));
  }
  render() {
    return <ChatbotPages onSendChat={this.createChat.bind(this)} />;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    chat: state.chat
  };
}
export default connect(mapStateToProps)(ChatbotContainer);
