import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from './components/Header'
import Trending from './components/Trending'
import Genre from './components/Genre'
import SearchResult from './components/SearchResult'
import GenreSelect from './components/GenreSelect'
import Home from './components/Home'
import ErrorBoundary from './components/ErrorBoundary'


function App() {
  return (
    <ErrorBoundary>

      <Router>
        <Header />
      
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/trending">
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
          </Switch>

      </Router>
    </ErrorBoundary>

  );
}

export default App;
