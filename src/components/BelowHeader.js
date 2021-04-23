import React from 'react';
import BannerImage from './BannerImage';

function BelowHeader({ lightMode }) {
    return (
        <div className="belowHeader">
            <div className="numbers"
            style={{
                color: lightMode ? '#0c0f48' : '#ccc',
                transition: "all .5s"
            }}>
                <div className="number">
                    <div className="topHeader">
                        <h2>0.72%</h2>
                    </div>
                    <div className="subHeader">
                        <h3>5 Mins</h3>
                    </div>
                </div>
                <div className="number">
                    <div className="topHeader">
                        <h2>1.25%</h2>
                    </div>
                    <div className="subHeader">
                        <h3>1 Hour</h3>
                    </div>
                </div>
                <div className="main" style={{maxWidth: '40%', color: '#fff'}}>
                    <div className="upperHeading">
                        <h3>Best Price to Trade</h3>
                    </div>
                    <div 
                        className="middle" 
                        style={{
                            paddingBottom: '10px',
                            color: lightMode ? '#0c0f48' : '#fff', 
                        }}
                    >
                        <h2>₹ 40,20,649</h2>
                    </div>
                    <div className="lowerHeading">
                        <h3>Average BTC/INR net price including commission</h3>
                    </div>
                </div>
                <div className="number">
                    <div className="topHeader">
                        <h2>8.6%</h2>
                    </div>
                    <div className="subHeader">
                        <h3>1 Day</h3>
                    </div>
                </div>
                <div className="number">
                    <div className="topHeader">
                        <h2>16.9%</h2>
                    </div>
                    <div className="subHeader">
                        <h3>7 Days</h3>
                    </div>
                </div>
            </div>
            <BannerImage 
                srcLink={"https://finstreet.in/"}
                srcBanner={"https://hodlinfo.com/static/media/cryptonews.54869ee3.png"}
            />
        </div>
    )
}

export default BelowHeader
