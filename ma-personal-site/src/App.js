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
import TypingTransition from './components/TypingTransition';
import musicImg from './img/mp5.png'
import Education from './components/Education/Education';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';

const App = () => {
  const [scrollState, setScrollState] = useState(0);

  const navBarNameRef = createRef();
  const nameRef = createRef();

  return (
    <>
      <div className='row'>
        <div className='col-2'>
          <div className='sticky-top'>
            <Navbar ref={navBarNameRef} scrollState={scrollState} />
          </div>
        </div>
        <div className='col-10 content'>
          <div className='title'>
            <Name ref={nameRef} />
            <Subtitle />
          </div>
          <TypingTransition scrollState={scrollState} navBarNameRef={navBarNameRef} setScrollState={setScrollState}/>
          <div style={{paddingLeft: '5vw', paddingRight: '5vw', paddingBottom: '15vh'}}>
            <AboutMe/>
          </div>
          <div style={{height:'70vh'}}>
            <marquee loop='infinite' scrollamount='60' width="60%" direction="right" height="500px">
                  <img src={musicImg}></img>
            </marquee>
          </div>
          <div style={{paddingLeft: '5vw', paddingRight: '5vw', paddingBottom:'15vh'}}>
            <Education/>
          </div>
          <div style={{paddingLeft: '5vw', paddingRight: '5vw', paddingBottom:'15vh'}}>
            <WorkExperience/>
          </div>
          <div style={{paddingLeft: '5vw', paddingRight: '5vw', paddingBottom:'15vh'}}>
            <Projects/>
          </div>
        </div>
        <Togglable buttonLabel={'Show'}>
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </Togglable>
      </div>
    </>
  );
}

export default App;
