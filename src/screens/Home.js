import React, { Component } from 'react';
import Recommendation from '../components/Recommendation';
import SearchBar from '../components/Searchbar';
import '../css/home.css';


class Home extends Component {
    render() {
        return (
            <div class="home">
                <div class="home_search_bar">
                    <SearchBar />
                </div>

                <div class="home_lists">
                        <Recommendation title="추천 전시" />
                        <Recommendation title="기가지니 온라인 전시" />
                </div>

            </div>

        );
    }
}

export default Home;

// {
//     recommend_result: err / success
//     recommend_ data : 데이터 결과
//     isonline_result: 통신 결과
//     isonline_data : 데이터 결과
//     } 이런식으로 json데이터 보내질거에요