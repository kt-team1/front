import React, { Component } from 'react';
import Album from '../components/Album';
import '../css/exhibition.css';


class InfoBar extends Component {
    render() {
        return (
            <div class="info_bar">
                <h1>기가지니와 함께 하는 전시 여행</h1>
                <h2>"기가지니, 1번 전시 보여줘"라고 말씀해보세요!</h2>
            </div>
        );
    }
}

class OnlineExhibition extends Component {
    render() {
        return (
            <div class="online_exhibition">
                <InfoBar/>
                <div class="exhibition_list">
                <Album/>
                <Album/>
                </div>
            </div>
        );
    }
}

export default OnlineExhibition;