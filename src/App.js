import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import './css/App.css';
import Home from './screens/Home';
import Search from './screens/Search';
import OnlineExhibition from './screens/OnlineExhibition';
import SearchDetail from './screens/SearchDetail';
import ShowExhibition from './screens/ShowExhibition';
import Picture from './screens/ShowPicDetail';
import ExhibitionDetail from './screens/ExhibitionDetail';
import Exhibition from './components/Exhibition';

function App() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/search" exact={true} component={Search}/>
        <Route path="/search/:id" component={SearchDetail}/>
        <Route path="/exhibition/" component={OnlineExhibition}/>
        <Route path="/exhibition/detail" component={ExhibitionDetail}/>
        <Route path="/exhibition/detail/main" component={ShowExhibition}/>
        <Route path="/exhibition/detail/pic" component={Picture}/>
      </HashRouter>
    );
}

export default App;
