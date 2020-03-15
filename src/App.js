import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Posts from './components/Posts';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feed/>
      <Posts/>
    </div>
  )
}

export default App;
