import React, { Component } from "react";
import ChatbotPages from "../pages/chatbot";
import * as ChatbotActions from "../services/redux/actions/ChatbotActions";
import { connect } from "react-redux";

class ChatbotContainer extends Component {
  createChat(id, option) {
    var request = {
      id: option
    };
    this.props.dispatch(ChatbotActions.chatBotSend(request));
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
