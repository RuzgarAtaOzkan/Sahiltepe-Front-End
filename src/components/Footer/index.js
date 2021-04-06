
// MODULES
import React from 'react';
import { Link } from 'react-router-dom';

// ICONS
import { 
    FaFacebookF,
    FaLinkedinIn 
} from 'react-icons/fa';

import { 
    AiOutlineTwitter, 
    AiOutlineInstagram 
} from 'react-icons/ai';

// STYLES
import './Footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <>
                <footer>
                    <h1>Sahiltepe Villaları</h1>

                    <div className="lists">
                        <div className="list about-us">
                            <h3>ABOUT US</h3>

                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</span>
                        </div>

                        <div className="list">
                            <h3>SERVICES</h3>

                            <ul>
                                <li>
                                    <Link> My Account </Link>
                                </li>
                                <li>
                                    <Link> Announcements </Link>
                                </li>
                                <li>
                                    <Link> Votes </Link>
                                </li>
                                <li>
                                    <Link> Surveys </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="list">
                            <h3>SUPPORT</h3>

                            <ul>
                                <li>
                                    <Link>
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                    F.A.Q.
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="list social">
                            <h3>FOLLOW US</h3>

                            <div className="social-container">
                                <a
                                    href="https://www.facebook.com/uitwaaien6/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiOutlineTwitter />
                                </a>
                                <a
                                    href="https://www.facebook.com/uitwaaien6/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.facebook.com/uitwaaien6/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiOutlineInstagram />
                                </a>
                                <a
                                    href="https://www.facebook.com/uitwaaien6/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bottom">
                        <Link>Privacy Policy</Link>
                        <span> | </span>
                        <Link>Terms & Conditions</Link>
                        <span> | </span>
                        <Link>Cookies</Link>
                        <span id="rights"> @ {new Date().getFullYear().toString()} All rights reserved. </span>
                    </div>

                    <div className="author">
                        <span>Created by Mert Agca & Ruzgar Ata Ozkan.</span>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;

