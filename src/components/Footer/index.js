// MODULES
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

// ICONS
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

// STYLES
import styles from './Footer.module.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <footer>
          <h1>
            <Link to="/">Sahiltepe Villaları</Link>
          </h1>

          <div className={styles['lists']}>
            <div className={cn(styles['list'], styles['about-us'])}>
              <h3>ABOUT US</h3>

              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </span>
            </div>

            <div className={styles['list']}>
              <h3>SERVICES</h3>

              <ul>
                <li>
                  <Link to="#"> My Account </Link>
                </li>
                <li>
                  <Link to="#"> Announcements </Link>
                </li>
                <li>
                  <Link to="#"> Votes </Link>
                </li>
                <li>
                  <Link to="#"> Surveys </Link>
                </li>
              </ul>
            </div>
            <div className={styles['list']}>
              <h3>SUPPORT</h3>

              <ul>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">F.A.Q.</Link>
                </li>
              </ul>
            </div>
            <div className={cn(styles['list'], styles['social'])}>
              <h3>FOLLOW US</h3>

              <div className={styles['social-container']}>
                <a
                  href="https://www.twitter.com/ruzgarataozkan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
                <a
                  href="https://www.facebook.com/ozkanruzgarata/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/ruzgarataozkan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/ruzgarataozkan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className={styles['bottom']}>
            <Link to="#">Privacy Policy</Link>
            <span> | </span>
            <Link to="#">Terms & Conditions</Link>
            <span> | </span>
            <Link to="#">Cookies</Link>
            <span id={styles['rights']}>
              {' '}
              @ {new Date().getFullYear().toString()} All rights reserved.{' '}
            </span>
          </div>

          <div className={styles['author']}>
            <span>Created by Mert Agca & Ruzgar Ata Ozkan.</span>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
