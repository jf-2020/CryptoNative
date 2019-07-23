import React from 'react';
import '../styles/RowBadge.css';

const RowBadge = (props) => {
    const ticker = props.ticker,
        name = props.name.substr(0, 1).toUpperCase() + props.name.substr(1, props.name.length);
    const logo = require(`../../assets/icons/${ticker}.svg`);

    return (
        <div className="flex-row-container">
            <img src={logo} alt={ticker + "-logo"} />
            <div className="flex-col-container">
                <h1>{name}</h1>
                <h1>{ticker}</h1>
            </div>
        </div>
    )
}

export default RowBadge;