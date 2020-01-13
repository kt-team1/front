import React, { Component } from 'react';
import Album from './Album';

class Recommendation extends Component {
    render() {
        return (
            <div class="recommendation">
                <Album space="10" count="4" list={[1, 2,3, 4]} />
            </div>
        );
    }
}

export default Recommendation;