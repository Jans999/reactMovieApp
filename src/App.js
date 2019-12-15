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
    genresList: [],
    genreSelected: {},
    genreSelectedList: []
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=431597031460c6825db9b7aef28617e8&language=en-US&page=1')
      .then(response => {
        // handle success
        // Gets the data for trending and sets it in state
        this.setState({trending: response.data.results});
        // Gets the data for GenreList
        return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=431597031460c6825db9b7aef28617e8&language=en-US')
      }).then( response => {
        // sets the genreList data
        this.setState({genresList: response.data.genres})
      }).catch(function (error) {
        // handle error
        console.log("Something went wrong in the fetch/parsing action" + error);
      })
  }

  // Async request and gets the film list of the genre selected
  getGenreSelectedList = async (genreSelected) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=431597031460c6825db9b7aef28617e8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreSelected}`)
    .then( response => {
      this.setState({genreSelectedList: response.data.results})
    } )
  }

  // Works with the genre request
  handleGenreSelect = (genreid, genreName) => {
    this.setState({
      genreSelected: {genreid, genreName}
    })
  }

  // Combined method to populate genre movie list that is called in genre
  handleGenreClick = (genreid, genreName) => {
    this.handleGenreSelect(genreid, genreName);
    this.getGenreSelectedList(genreid)
  }

  // Updates the trendingSearch state item and then this data is passed to searchResult
  handleTrendingSearch = (id) => {
    var searchItem = this.state.trending.find(element => element.id === id);
    this.setState({
      trendingSearch: searchItem,
    })
  }


  render() {
    return (
    <ErrorBoundary>

      <Router>
        <Header />
      
          <Switch>
            
            <Route exact path="/" render = { () => <Home /> } />

            <Route path="/trending" render = { () => <Trending trendingData={this.state.trending} handleTrendingSearch={this.handleTrendingSearch} />}/>

            <Route path="/genres" render ={ () => <Genre genres={this.state.genresList} handleGenreSelect={this.handleGenreSelect} handleGenreClick={this.handleGenreClick} /> } />

            <Route path="/searchresult" render ={ () => <SearchResult trendingSearch={this.state.trendingSearch}/> } />

            <Route path="/genreselect" render = { () => <GenreSelect genreSelected={this.state.genreSelected} genreSelectedList={this.state.genreSelectedList} handleTrendingSearch={this.handleTrendingSearch} /> } />

          </Switch>

      </Router>
    </ErrorBoundary>

    )};
}

export default App;
