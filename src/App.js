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
    searchItem: {},
    searchInputField: "",
    searchArray: [],
    searchRequestResult: {},
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

  // Async request and gets the film list of the selected genre
  getGenreSelectedList = async (genreSelected) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=431597031460c6825db9b7aef28617e8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreSelected}`)
    .then( response => {
      this.setState({genreSelectedList: response.data.results})
    } )
  }

  // Works with the genre request (separate function to couple with the async request)
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

  // Updates the search result state item and then this data is passed to searchResult
  handleTrendingSearch = (id) => {
    var searchItem = this.state.trending.find(element => element.id === id);
    this.setState({
      searchResult: searchItem,
    })
  }

    // Updates the search result state item and then this data is passed to searchResult component
    handleGenreSearch = (id) => {
      var searchItem = this.state.genreSelectedList.find(element => element.id === id);
      this.setState({
        searchResult: searchItem,
      })
    }

    // Search result functions

    // Controlled component for the search field

    handleSearchFieldInput = (e) => {
      this.setState({
          searchInputField: e.target.value,
      })
  }

  // Beginning of the search fetch and retrieve if the query exists...

    handleSearchFieldSubmit = async(e) => {
      e.preventDefault();
      axios.get(`https://api.themoviedb.org/3/search/company?api_key=431597031460c6825db9b7aef28617e8&query=${this.state.searchInputField}&page=1`)
      .then(response => {
        // handle success
        // Gets the data from the search request and puts it into the array in state
        this.setState({searchArray: response.data.results});
        console.log(this.state.searchArray)
      }).then(
        console.log("this is the find " + this.state.searchArray.find( (element) => element.name === this.state.searchInputField ))
      )
      .catch(function (error) {
        // handle error
        console.log("Something went wrong in the search action" + error);
      })
    }


  render() {
    return (
    <ErrorBoundary>

      <Router>
        <Header handleSearchFieldSubmit={this.handleSearchFieldSubmit} handleSearchFieldInput={this.handleSearchFieldInput} searchFieldState={this.state.searchInputField} />
      
          <Switch>
            
            <Route exact path="/" render = { () => <Home /> } />

            <Route path="/trending" render = { () => <Trending trendingData={this.state.trending} handleTrendingSearch={this.handleTrendingSearch} />}/>

            <Route path="/genres" render ={ () => <Genre genres={this.state.genresList} handleGenreSelect={this.handleGenreSelect} handleGenreClick={this.handleGenreClick} /> } />

            <Route path="/searchresult" render ={ () => <SearchResult searchResult={this.state.searchResult}/> } />

            <Route path="/genreselect" render = { () => <GenreSelect genreSelected={this.state.genreSelected} genreSelectedList={this.state.genreSelectedList} handleTrendingSearch={this.handleGenreSearch} /> } />

          </Switch>

      </Router>
    </ErrorBoundary>

    )};
}

export default App;
