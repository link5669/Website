import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../components/LearningOptions/LearningOptions";

const config = {
  initialMessages: [createChatBotMessage(`Hey! How can I help?`, 
        { 
            widget: "options" 
        })
    ],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <LearningOptions {...props} />,
        }
    ]
}

export default config