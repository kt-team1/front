import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';

// class InputForm extends React.Component {

//     // render() {
//     //     return (<Redirect to={{
//     //                 pathname: '/search',
//     //                 state: { referrer: 'asdasdasdas' }
//     //             }} />)
//     // }
// }

class SearchBar extends Component {
    render() {
        return (
            <div className="search_bar" style={{position: 'relative', height: '100%'}}>
                <h1 style={{fontSize: '2.0vw'}}>기가지니</h1>
                <h2 style={{fontSize: '1.6vw'}}>인기 있는 전시 검색해줘</h2>
                <h4 style={{fontSize: '1.3vw'}}>기가지니와 함께 떠나는 문화 여행</h4>
                <p style={{fontSize: '1.3vw'}}>-</p>
                <p style={{fontSize: '1.3vw'}}>"광화문 주변 전시회 보여줘"</p>
                <p style={{fontSize: '1.3vw'}}>"기가지니 온라인 전시회 보여줘"</p>
                <div className="input_container" style={{position: 'absolute', width: '100%', height: '20%', bottom: '0'}}>
                    {/* <InputForm/> */}
                </div>
            </div>
            
        );
    }
}

export default SearchBar;