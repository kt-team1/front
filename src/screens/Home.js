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
                        <Recommendation title="기가지니 온라인 전시"/>
                </div>

            </div>

        );
    }
}

export default Home;