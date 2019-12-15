import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

// Components
import Header from './components/Header'
import Trending from './components/Trending'
import Genre from './components/Genre'
import SearchResult from './components/SearchResult'
import GenreSelect from './components/GenreSelect'
import Home from './components/Home'
import ErrorBoundary from './components/ErrorBoundary'


class App extends Component {

  state = {
    trending: [],
    trendingSearch: {},
  }

  // Gets the data for trending and sets it in state
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=431597031460c6825db9b7aef28617e8&language=en-US&sort_by=popularity.desc&page=1')
      .then(response => {
        // handle success
        this.setState({trending: response.data.results});
        // console.log(this.state)
      })
      .catch(function (error) {
        // handle error
        console.log("Something went wrong in the fetch/parsing action " + error);
      })
  }

  // Updates the trendingSearch state item and then this data is passed to searchResult
  handleTrendingSearch = (id) => {
    var searchItem = this.state.trending.find(element => element.id === id);
    console.log(searchItem);
    this.setState({
      trendingSearch: searchItem,
    })
  }



  render() {
    console.log(this.state)
    return (
    <ErrorBoundary>

      <Router>
        <Header />
      
          <Switch>
            
            <Route exact path="/" render = { () => <Home /> } />

            <Route path="/trending" render = { () => <Trending trendingData={this.state.trending} handleTrendingSearch={this.handleTrendingSearch} />}/>

            <Route path="/genres" render ={ () => <Genre /> } />

            <Route path="/searchresult" render ={ () => <SearchResult trendingSearch={this.state.trendingSearch}/> } />

            <Route path="/genreselect" render = { () => <GenreSelect /> } />

          </Switch>

      </Router>
    </ErrorBoundary>

    )};
}

export default App;
