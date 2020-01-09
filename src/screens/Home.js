import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Recommendation from '../components/Recommendation';


class Home extends Component {
    render() {
        return (
            <Recommendation/>
        );
    }
}

export default Home;