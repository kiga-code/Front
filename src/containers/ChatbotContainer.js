import React, { Component } from "react";
import ChatbotPages from "../pages/chatbot";
import * as ChatbotActions from "../services/redux/actions/ChatbotActions";
import { connect } from "react-redux";

class ChatbotContainer extends Component {
  createChat(id) {
    this.props.dispatch(ChatbotActions.chatBot({ id }));
  }
  render() {
    return <ChatbotPages onSendChat={this.createChat.bind(this)} />;
  }
}

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     id: state.chat.data.value.id
//   };
// }
export default connect()(ChatbotContainer);
