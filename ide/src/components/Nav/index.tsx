import React from 'react';
import {Redirect, withRouter} from 'react-router';
import '../../styles/c/Navbar.css';

// ... components and style imports

const Navbar: React.FC = () => {
    return (
        <nav id="navbar">
            <div className="nvb_wrapper">
                <img src="/assets/stackFlowLogo.png" width="52px"/>
            </div>
            <div>
                <ul>
                    <li>About</li>
                    <li>Resources</li>
                    <li>Community</li>
                    <li>Docs</li>
                    <li>Help</li>
                </ul>
            </div>
            <button>
                Continue with Blockstack
            </button>
        </nav>
    )
};

export default withRouter(Navbar);