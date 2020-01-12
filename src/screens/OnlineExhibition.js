import React, { Component } from 'react';
import Album from '../components/Album';
import '../css/exhibition.css';
import axios from "axios";
import PropTypes from "prop-types";


class InfoBar extends Component {
    render() {
        return (
            <div class="info_bar">
                <h1>기가지니와 함께 하는 전시 여행</h1>
                <p>"기가지니, 1번 전시 보여줘"라고 말씀해보세요!</p>
            </div>
        );
    }
}

class List extends Component {
    render() {
        return (
            <div class="exhibition_list">
                <Album space="9"/>
                <Album space="9"/>
            </div>
        );
    }
}

class OnlineExhibition extends Component {
    getExhibitions = async () => {
        const {
            data: {
                search
            }
        } = await axios.get('http://211.254.213.185:5000/searchapi');
        const maxPage = parseInt(search.length / 6);
    }

    render() {
        return (
            <div class="online_exhibition">
                <InfoBar />
                <List />
            </div>
        );
    }
}

export default OnlineExhibition;