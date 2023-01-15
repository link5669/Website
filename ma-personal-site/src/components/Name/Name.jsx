import './name.css';
import { useEffect, forwardRef, useImperativeHandle, useState  } from 'react';
import { blink } from '../../js/utilities';

const Name = forwardRef((props, ref) => {
    const [inNavBar, setInNavBar] = useState(false);

    const nameStyle = { marginTop: inNavBar ? '0vh' : '40vh', fontSize: inNavBar ? '1.25rem' : '2.5rem',
    textAlign: inNavBar ? 'left' : 'center', padding: inNavBar ? '.5rem' : '0', transition: inNavBar ? 'opacity 2s ease' : 'opacity 2s ease' }

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