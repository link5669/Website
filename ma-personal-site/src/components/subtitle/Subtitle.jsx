import React, { useEffect } from 'react';
import { blink, messenger } from '../../js/utilities';
import './subtitle.css';

const Subtitle = () => {
    
    useEffect(() => {
        blink(document.getElementById('blink'));
        messenger(document.getElementById('content'))
    }, []);

    return (
        <>
            <p id='content'/>
        </>
    )
}
export default Subtitle;