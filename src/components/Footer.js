import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="contents">
                <div className="footer-text"><h5>Copyright © 2021</h5></div>
                <div className="footer-text"><h5>Hodlinfo.com</h5></div>
                <div className="footer-text footer-text-link">
                    <h5>
                        Developed By
                        <a 
                            href="https://www.quadbtech.com" 
                            rel="noreferrer"  
                            target="_blank" 
                        >QuadBtech
                        </a>
                    </h5>
                </div>
                <div className="footer-text-pointer" >
                    <h5>
                        <a href="mailto:support@hodlinfo.com" className="footer-text-link">Support</a>
                    </h5>
                </div>
            </div>
            <div className="footer-botton-back" >
                <button className="footer-button">Add hodlinfo to home screen</button>
            </div>
        </div>
    )
}

export default Footer
