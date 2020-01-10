import React, { Component } from 'react';
import Recommendation from '../components/Recommendation';
import SearchBar from '../components/Searchbar';
import ExhibitionList from '../components/ExhibitionList';
import '../css/home.css';


class Home extends Component {
    render() {
        return (
            <div class="home">
                <div class="home_lists">
                    <div class="home_recommendation">
                        <Recommendation />
                    </div>

                    <div class="home_exhibition_list">
                        <ExhibitionList />
                    </div>
                </div>
                
                <div class="home_search_bar">
                    <SearchBar />
                </div>
            </div>

        );
    }
}

export default Home;