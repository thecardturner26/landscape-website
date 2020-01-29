import React from 'react';
import './App.css';

import HomePage from '../src/pages/HomePage';
import AboutPage from '../src/pages/AboutPage';
import ContactPage from '../src/pages/ContactPage';
import PhotoPage from '../src/pages/PhotoPage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <h1>Hello</h1>
    )
  }
}

export default App;
