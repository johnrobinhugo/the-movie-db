import React from 'react';
import { Switch, Route, useParams } from "react-router-dom";

import Header from './components/molecules/Header';
import FrontPage from './components/pages/FrontPage';
import MoviePage from './components/pages/MoviePage';
import Footer from './components/molecules/Footer';

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
          <Route path="/movies/:id" render={({ match }) => <MoviePage match={match}/>}/>
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;