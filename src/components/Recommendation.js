import React, { Component } from 'react';
import Album from './Album';

class Recommendation extends Component {
    render() {
        return (
            <div class="recommendation">
    <h1>{this.props.title}</h1>
                <Album />
            </div>
        );
    }
}

export default Recommendation;