class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage, ...rest) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.stateRef = stateRef;
      this.createCustomMessage = createCustomMessage;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hello!");
        this.updateChatbotState(greetingMessage);
    }
}

export default ActionProvider;