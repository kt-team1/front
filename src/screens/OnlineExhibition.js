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

class OnlineExhibition extends Component {
    state = {
        count: 8,
        list: []
    };
    
    async getExhibitions() {
        const response = await axios.get('http://211.254.213.185:5000/searchapi');
        // console.log(response['data']['search']);
        let data = response['data']['search'];
        console.log(data.length);

        for (var i=0; i < 6; i++) {
            var randnum = Math.floor(Math.random() * 163) + 1;
            this.state.list.push(data[randnum]);
        }
    }

    async componentDidMount() {
        this.getExhibitions();
    }

    render() {
        return (
            <div class="online_exhibition">
                <InfoBar />
                <div class="exhibition_list">
                    <Album space="9" count={this.state.count} list={this.state.list}/>
                    {/* <Album space="9" /> */}
                </div>
            </div>
        );
    }
}

export default OnlineExhibition;