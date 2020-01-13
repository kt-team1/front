import React, { Component } from 'react';
import Album from './Album';

class Recommendation extends Component {
    render() {
        return (
            <div className="recommendation">
                <h1>{this.props.title}</h1>
                <Album space="10" count="4" list={[1, 2,3, 4]} />
            </div>
        );
    }
}

export default Recommendation;