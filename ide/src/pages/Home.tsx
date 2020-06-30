import React from 'react';
import '../styles/HomePage.css';
import {Redirect, withRouter} from 'react-router';

// ... components and style imports
import Navbar from '../components/Nav/index';

const HomePage: React.FC = () => {

    var returnToDash = <Redirect to="/dashboard"/>;

    return (
        <>
        <Navbar/>
        <div id="home">
            <div className="hdWrapper">
                <h1>
                    Create smart contract apps visually, only on Blockstack
                </h1>
                <p>
                    Use our flow editor to drag and drop blocks that create 
                    dApps and Smart Contracts without code. It's that easy.
                </p>
                <button className="ldBtn" onClick={() => returnToDash}>
                    Try out the demo
                </button>
            </div>
            <div className="ilsWrapper">
                <img src="/assets/landingIllustration1.png" alt="landing-illustration"/>
            </div>
        </div>
        </>
    )
};

export default withRouter(HomePage) ;