import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from './components/Header'
import Trending from './components/Trending'
import Genre from './components/Genre'
import SearchResult from './components/SearchResult'
import GenreSelect from './components/GenreSelect'



function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Trending />
        </Route>
        <Route path="/genres">
          <Genre />
        </Route>
        <Route path="/searchresult">
          <SearchResult />
        </Route>
        <Route path="/genreselect">
          <GenreSelect />
        </Route>
        <Route path="/searchresult">
          <SearchResult />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
