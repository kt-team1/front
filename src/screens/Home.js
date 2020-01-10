import React, { Component } from 'react';
import Recommendation from '../components/Recommendation';
import SearchBar from '../components/Searchbar';


class Home extends Component {
    render() {
        return (
            <div class="home">
                <Recommendation />
                <SearchBar />
            </div>
        );
    }
}

export default Home;