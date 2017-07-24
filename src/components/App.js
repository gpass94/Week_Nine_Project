import React, { Component } from 'react';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from '.PlayListForm';
import '../styles/App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayListForm />
        <PlayListItem />
        <PlayList />

        </div>
    );
  }
}

export default App;
