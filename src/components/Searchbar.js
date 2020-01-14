import React, { Component } from 'react';


class SearchBar extends Component {
    render() {
        return (
            <div className="search_bar">
                <h1 style={{fontSize: '2.0vw'}}>기가지니</h1>
                <h2 style={{fontSize: '1.6vw'}}>인기 있는 전시 검색해줘</h2>
                <h4 style={{fontSize: '1.3vw'}}>기가지니와 함께 떠나는 문화 여행</h4>
                <p style={{fontSize: '1.3vw'}}>-</p>
                <p style={{fontSize: '1.3vw'}}>"광화문 주변 전시회 보여줘"</p>
                <p style={{fontSize: '1.3vw'}}>"기가지니 온라인 전시회 보여줘"</p>
                
            </div>
        );
    }
}

export default SearchBar;