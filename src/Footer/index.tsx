import React from 'react';
import './styles.css';

import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2° ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="youtube.com" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="linkedin.com" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="instagram.com" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;