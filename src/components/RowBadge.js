import React from 'react';
import '../styles/RowBadge.css';

const RowBadge = (props) => {
    const logo = require(`../../assets/icons/${props.ticker.toLowerCase()}.svg`);

    return (
        <div className="flex-row-container">
            <img src={logo} alt={props.ticker + "-logo"} />
            <div className="flex-col-container">
                <h1>{props.name}</h1>
                <h1>{props.ticker}</h1>
            </div>
        </div>
    )
}

export default RowBadge;