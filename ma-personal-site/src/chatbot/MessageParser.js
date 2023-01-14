class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  parse(message) {
    if (message.includes("hello" || "hi" || "hey")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;