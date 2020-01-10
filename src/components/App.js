import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import '../css/App.css';
import Home from '../screens/Home';
import Search from '../screens/Search';
import OnlineExhibition from '../screens/OnlineExhibition';
import SearchDetail from '../screens/SearchDetail';
import ShowExhibition from '../screens/ShowExhibition';
import Picture from '../screens/ShowPicDetail';
import ExhibitionDetail from '../screens/ExhibitionDetail';


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}>
          <Home />
        </Route> 
        <Route exact path="/search" component={Search}>
          <Search />
        </Route>
        <Route exact path="/search/detail" component={SearchDetail}>
          <SearchDetail />
        </Route>
        <Route exact path="/exhibition" component={OnlineExhibition}>
          <OnlineExhibition />
        </Route>
        <Route exact path="/exhibition/detail" component={ExhibitionDetail}>
          <ExhibitionDetail />
        </Route>
        <Route exact path="/exhibition/detail/main" component={ShowExhibition}>
          <ShowExhibition />
        </Route>
        <Route exact path="/exhibition/detail/pic" component={Picture}>
          <Picture />
        </Route>
      </Router>
    );
  }
}

export default App;
