import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './css/App.css';
import Home from './screens/Home';
import Search from './screens/Search';
import OnlineExhibition from './screens/OnlineExhibition';
import SearchDetail from './screens/SearchDetail';
import ShowExhibition from './screens/ShowExhibition';
import Picture from './components/ShowPicDetail';
import ExhibitionDetail from './screens/ExhibitionDetail';
import Exhibition from './components/Exhibition';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/search" exact={true} component={Search}/>
      <Route path="/search/:id" exact={true} component={SearchDetail}/>
      <Route path="/exhibition/" exact={true} component={OnlineExhibition}/>
      <Route path="/exhibition/detail" exact={true} component={ExhibitionDetail}/>
      <Route path="/exhibition/detail/main" exact={true} component={ShowExhibition}/>
      <Route path="/exhibition/detail/pic" exact={true} component={Picture}/>
    </BrowserRouter>
  );
}

export default App;
