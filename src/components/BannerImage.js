import React from 'react'

const BannerImage = ({ srcLink, srcBanner }) => {
    return (
        <a href={srcLink} target="_blank" rel="noreferrer" >
            <img 
                src={srcBanner} alt="banner" 
                style={{
                    width: '100%',
                    padding: '10px'
                }} 
            />
        </a>
    )
}

export default BannerImage
