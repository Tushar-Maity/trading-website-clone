import React from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Switch, withStyles } from '@material-ui/core'

function Header({ lightMode, setlightMode }) {

    const ISOSwitch = withStyles({
        root: {
            width: 60,
            height: 34,
            padding: 0,
        },
        switchBase: {
            padding: 4,
            '&$checked': {
              transform: 'translateX(26px)',
              color: '#3dc6c1',
              '& + $track': {
                backgroundColor: '#2e3241',
                opacity: 1,
                border: 'none',
              },
            },
          },
          thumb: {
            width: 26,
            height: 26,
            color: '#3dc6c1'
          },
          track: {
            borderRadius: 34 / 2,
            backgroundColor: '#f8f9fa',
            opacity: 1,
            transition: '.5s',
          },
          checked: {},
    })(Switch);

    return (
        <div className="header">
            <div className="header-width header-logo">
                <a href="/">
                    <div className="logo">
                        <img className="logo-img" src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="logo" />
                    </div>
                </a>
                <p>Powered By <span>Finstreet</span></p>
            </div>
            <div className="header-width header-buttons">
                <div className="header-button">
                    <button 
                        className="header-button-single"
                        style={{
                            backgroundColor: lightMode ? '#f8f9fa' :  '#2e3241' , 
                            color: lightMode ? '#2e3241' : '#fff', 
                            transition: "all .5s"
                        }}
                        >INR <ArrowDropDownIcon />
                    </button>
                </div>
                <div className="header-button">
                    <button 
                        className="header-button-single"
                        style={{
                            backgroundColor: lightMode ? '#f8f9fa' :  '#2e3241' , 
                            color: lightMode ? '#2e3241' : '#fff', 
                            transition: "all .5s"
                        }}
                        >BTC <ArrowDropDownIcon />
                    </button>
                </div>
                <div className="header-button">
                    <button 
                        className="header-button-single"
                        style={{
                            backgroundColor: lightMode ? '#f8f9fa' :  '#2e3241' , 
                            color: lightMode ? '#2e3241' : '#fff', 
                            transition: "all .5s"
                        }}>BUY BTC
                    </button>
                </div>
            </div>
            <div className="header-width header-right">
                <div className="progress-bar">
                    <p>60</p>
                </div>
                <div className="telegram-button">
                    <button className="telegram"><TelegramIcon style={{marginRight: '10px'}} />Connect Telegram</button>
                </div>
                <div className="toggle-theme">
                    {/* Switch */}
                    <div className="switch">
                        <ISOSwitch 
                            checked={!lightMode} 
                            onChange={() => setlightMode(!lightMode)} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
