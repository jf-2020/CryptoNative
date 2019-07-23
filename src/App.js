import React from 'react';

import RowBadge from './components/RowBadge';
import MiniChart from './components/MiniChart';
import RowItem from './components/RowItem';

const App = () => {
    const coin1 = 'bitcoin',
        coin2 = 'ethereum',
        coin3 = 'ripple',
        coin4 = 'litecoin',
        coin5 = 'bitcoin-cash';
    const coins = [coin1, coin2, coin3, coin4, coin5];

    // working examples (before applying map, just grab one)

    /* BITCOIN */
    const coin = coins[0];
    const ticker = 'btc';
    const datatype =

    /* ETHEREUM */
    // const coin = coins[1];
    // const ticker = 'eth';

    return (
        <div className="App">
            <RowBadge name={coin} ticker={ticker} />
            <hr />
            <MiniChart coin={coin} />
            <hr />
            <RowItem name={coin} />
        </div>
    )
}

export default App;
