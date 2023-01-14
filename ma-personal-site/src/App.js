import './App.css';
import Chatbot from 'react-chatbot-kit';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import config from './chatbot/config';
import Togglable from './components/ChatButton/ChatButton';
import Navbar from './components/Navbar';
import './index.css';
import Name from './components/Name/Name';
import Subtitle from './components/subtitle/Subtitle';
import { Waypoint } from 'react-waypoint';
import { useState, createRef } from 'react';
import AboutMe from './components/AboutMe/AboutMe';

const App = () => {
  const [scrollState, setScrollState] = useState(0);

  const navBarNameRef = createRef();
  const nameRef = createRef();

  return (
    <>
      <div className='row'>
        <div className='col-2'>
          <div className='sticky-top'>
          <Navbar ref={navBarNameRef} scrollState={scrollState}/>
          </div>
        </div>
        <div className='col-10 content'>
          <div className='title'>
            <Name ref={nameRef}/>
            <Subtitle/>
          </div>
          <div style={{ height: '100vh' }}>
            <AboutMe/>
            <Waypoint
              onEnter={ () => {
                if (scrollState !== 1) {
                  navBarNameRef.current.toggleVisibility();
                  nameRef.current.toggleVisibility()
                  setScrollState(1);
                }}}
              onLeave={ () => {
                if (scrollState !== 0) {
                  navBarNameRef.current.toggleVisibility();
                  setScrollState(0);
                }}}
            />
            
            </div>
          <Togglable buttonLabel={'Show'}>
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
          </Togglable>
          
        </div>
      </div>
    </>
  );
}

export default App;
