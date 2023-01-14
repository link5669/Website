import './App.css';
import Chatbot from 'react-chatbot-kit';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import config from './chatbot/config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
      </header>
    </div>
  );
}

export default App;
