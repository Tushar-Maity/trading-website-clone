import React from 'react';

const PlatformPrice = ({ platforms, lightMode }) => {
    return (
        <div className="platform-price">
        <table className="platform-price-table">
            <thead>
                <tr>
                    <th>
                        <h4><span className="pointer">#</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Platform</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Last Traded Price</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Buy / Sell Price</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Difference</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Savings</span></h4>
                    </th>
                </tr>
            </thead>
            <tbody>
                {platforms.map(platform => (
                    <tr 
                        key={platform.id} 
                        style={{
                            backgroundColor: lightMode ? "#f8f9fa" : "#2e3241",
                            color: lightMode ? "#0c0f48" : "#fff",
                            transition: "all .5s"
                        }}
                    >
                        <td><h4>{platform.id}</h4></td>
                        <td className="platform">
                            <a 
                                href={platform.link} 
                                target="_blank" 
                                rel="noreferrer"
                                style={{
                                    color: lightMode ? "#0c0f48" : "#fff",
                                    transition: "all .5s"
                                }}
                            >
                                <img 
                                    src={`./assets/${platform.image}.png`} 
                                    alt={platform.platform} 
                                    className="platform-image"
                                />
                                <h4>{platform.platform}</h4>
                            </a>

                        </td>
                        <td>
                            <h4>₹ {platform.lastprice.toLocaleString('en-IN')}</h4>
                        </td>
                        <td>
                            <h4>
                                <span>₹ {platform.buyPrice.toLocaleString('en-IN')}</span> /
                                <span> ₹ {platform.sellPrice.toLocaleString('en-IN')}</span>
                            </h4>
                        </td>
                        <td className="difference">
                            <h4 className={
                                `${(platform.buyPrice - platform.sellPrice) > 0 
                                    ? 'color-pos' 
                                    : 'color-neg' }`
                                }
                            >{(platform.buyPrice - platform.sellPrice) / 100}  %
                            </h4>
                        </td>
                        <td  className="difference">
                            <h4  className={
                                `${(platform.buyPrice - platform.sellPrice) > 0 
                                ? 'color-pos' 
                                : 'color-neg' }`}
                            >
                                {(platform.buyPrice - platform.sellPrice) > 0 
                                ? '▼'
                                : '▲' }
                                ₹ {(platform.buyPrice - platform.sellPrice).toLocaleString('en-IN')}
                            </h4>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default PlatformPrice
