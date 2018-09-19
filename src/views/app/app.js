import React, { Component } from 'react';
import Home from '../pages/Home/Home';
import NoMatch from '../pages/404/NoMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}


export default App;

