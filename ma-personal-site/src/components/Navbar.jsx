import React, {useState} from 'react';
import { forwardRef, useImperativeHandle, createRef } from 'react';
import Name from './Name/Name';
const Navbar = forwardRef((props, ref) => {
    const [visibleName, setVisibleName] = useState(false);

    const hideWhenVisible = { display: visibleName ? 'none' : '' }
    const showWhenVisible = { display: visibleName ? '' : 'none'}

    const nameRef = createRef();

    const toggleVisibility = () => {
        setVisibleName(!visibleName)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility,
            nameRef
        }
    })
    return (
        <ul className="nav flex-column">
            <div style={showWhenVisible}>
                <Name ref={nameRef}/>
            </div>
            DEBUG:{props.scrollState}
            <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
    );
 })
 export default Navbar;