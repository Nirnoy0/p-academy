import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-heading footer-1">
                    <h2>About Us</h2>
                    <a href="#">Blog</a>
                    <a href="#">Demo</a>
                    <a href="#">Customers</a>
                    <a href="#">Terms of Service</a>
                </div>

                <div className="footer-heading footer-2">
                    <h2>Contact Us</h2>
                    <a href="#">Jobs</a>
                    <a href="#">Support</a>
                    <a href="#">Contact</a>
                    <a href="#">Patners</a>
                </div>

                <div className="footer-heading footer-3">
                    <h2>Social Media</h2>
                    <a href="#">Facebook</a>
                    <a href="#">Instragram</a>
                    <a href="#">Linkedin</a>
                    <a href="#">Twitter</a>
                    <a href="#">Youtube</a>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;