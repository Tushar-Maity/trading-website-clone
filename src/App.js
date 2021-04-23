import { useState } from 'react';
import BannerImage from './components/BannerImage';
import BelowHeader from './components/BelowHeader';
import Footer from './components/Footer';
import Header from './components/Header';
import PlatformPrice from './components/PlatformPrice';

import data from './data'

import './styles/app.scss'

const App = () => {

    const [platforms] = useState(data)
    const [lightMode, setlightMode] = useState(false)

    return (
        <div style={{
            backgroundColor: lightMode ? "#fff" : "#191d28",
            // color: lightMode ? "#000" : "#fff",
            transition: "all .5s"
        }}>
            <Header 
                lightMode={lightMode} 
                setlightMode={setlightMode} 
            />
            <BelowHeader 
                lightMode={lightMode} 
            />

            <PlatformPrice 
                platforms={platforms} 
                lightMode={lightMode} 
            />
            <BannerImage 
                srcLink={"https://ftx.com/"}
                srcBanner={"https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png"}
                style={{padding: '20px'}}
            />
            <Footer />
        </div>
    )
}

export default App

