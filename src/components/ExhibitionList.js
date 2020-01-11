import React, { Component } from 'react';
import Album from './Album';

class ExhibitionList extends Component {
    render() {
        return (
            <div class="exhibition_list">
                <h1>기가지니 온라인 전시</h1>
                <Album/>
            </div>
        );
    }
}

export default ExhibitionList;