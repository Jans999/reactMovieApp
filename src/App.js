import React from 'react';
import './App.css';

// Components
import Header from './components/Header'
import Trending from './components/Trending'
import Genre from './components/Genre'
import SearchResult from './components/SearchResult'



function App() {
  return (
    <div>
      <Header />
      <Trending />
      <Genre />
      <SearchResult />
    </div>
  );
}

export default App;
