import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <a href="https://www.facebook.com/" target='_blank'><FaFacebook/></a>
            <a href="https://www.twitter.com/" target='_blank'><FaTwitter/></a>
            <a href="https://www.linkedin.com/" target='_blank'><FaLinkedin/></a>
        </footer>
    );
}

export default Footer
