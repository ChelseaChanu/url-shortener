import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    const [isVisible, setVisibility] = useState(false);

    const handleToggleClick = ()=>{
        setVisibility(!isVisible);
    };

    return(
        <nav className="navbar">
            <div className="logo"></div>
            <div className={`container ${isVisible? '':'hidden'}`}>
                <div className="tabs">
                    <a href='/' >Features</a>
                    <a href='/' >Pricing</a>
                    <a href='/' >Resources</a>
                </div>
                <div className="buttons">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn btn btn_style">Sign Up</button>
                </div>
            </div>
            <div className="navigation_logo">
                <FontAwesomeIcon icon={faBars} onClick={handleToggleClick} className='nav-icon' />
            </div>
        </nav>
    );
}