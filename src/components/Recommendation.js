import React, { Component } from 'react';
import Card from './Card';

class Recommendation extends Component {
    render() {
        return (
            <div class="recommendation">
                <h1>추천 전시</h1>
                <Card/>
            </div>
        );
    }
}

export default Recommendation;