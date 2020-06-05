/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import './styles/footer.css';

function Footer() {
    const dt = new Date();
    const currentYear = dt.getFullYear();

    return (
        <footer id="footer" className="d-flex justify-content-center align-items-center">
            <small>&copy; {currentYear} | Virtual Park Web</small>
        </footer>
    );
}   

export default Footer;