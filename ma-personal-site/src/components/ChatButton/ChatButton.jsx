import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import './chatbutton.css'

const ChatButton = forwardRef(( props, ref ) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <>
      <div style={hideWhenVisible}>
        <button className='chatbot-button' onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className={'toggleableContent'}>
        <button className='chatbot-button' onClick={toggleVisibility}>Hide</button>
        <div className='chatbot-container'>
          {props.children}
        </div>
      </div>
    </>
  )
})

ChatButton.displayName = 'Toggleable'

ChatButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ChatButton