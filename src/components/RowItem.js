import React, { Component } from 'react';
import fetch from 'node-fetch';

class RowItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            data: null
        }
    }

    componentDidMount() {
        // construct the request
        const base_url = "https://api.coincap.io/v2/",
            resource = "assets/",
            id = `${this.state.name}`;
        const request_url = base_url + resource + id;
        // now perform the fetch
        fetch(request_url)
            .then(resp => resp.json())
            // get the relevant data array
            .then(data => data.data)
            .then(array => console.log(array));
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

export default RowItem;