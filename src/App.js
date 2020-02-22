import React from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './components/molecules/Header';
import FrontPage from './components/pages/FrontPage';

import './scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          {/* <Route path="/atoms/buttons">
            <Buttons />
          </Route> */}
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;