import './App.css';
import Chatbot from 'react-chatbot-kit';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import config from './chatbot/config';
import { useState } from 'react';
import Togglable from './components/ChatButton/ChatButton';
import Navbar from './components/Navbar';
import './index.css';

const App = () => {
  return (
    <>
      {/* <div className='container no-gutters' style={{width:'100%'}}> */}
        <div className='row'>
          <div className='col-2'>
            <Navbar/>
          </div>
          <div className='col-10 content'>
              <Togglable buttonLabel={'Show'}>
                <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
              </Togglable>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default App;
