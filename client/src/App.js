import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Layers from './pages/Layers';
import Explore from './pages/Explore';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/layers" component={Layers} />
          <Route path="/explore" component={Explore} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
