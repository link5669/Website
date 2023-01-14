import './name.css';
import { useEffect, forwardRef, useImperativeHandle, useState  } from 'react';
import { blink } from '../../js/utilities';

const Name = forwardRef((props, ref) => {
    const [inNavBar, setInNavBar] = useState(false);

    const nameStyle = { marginTop: inNavBar ? '0vh' : '40vh' }

    const toggleVisibility = () => {
        console.log(inNavBar)
        setInNavBar(!inNavBar)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })

    useEffect(() => {
        blink(document.getElementById('blink'));
      }, []);
      
    return (
        <h1 style={nameStyle} className="name">
            Miles Acquaviva
            <span id='blink'>|</span>
        </h1>
    )
})
export default Name;