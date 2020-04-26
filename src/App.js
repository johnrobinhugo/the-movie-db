import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/molecules/Header';
import FrontPage from './components/pages/FrontPage';
import SinglePage from './components/pages/SinglePage';
import ArchivePage from './components/pages/ArchivePage';
import SearchPage from './components/pages/SearchPage';
import LoginPage from './components/pages/LoginPage';
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
          <Route path="/movies/:id" render={({ match }) => <SinglePage match={match} mediaType="movie"/>}/>
          <Route path="/movies">
            <ArchivePage mediaType="movie" archiveTitle="All movies" />
          </Route>
          <Route path="/tv-shows/:id" render={({ match }) => <SinglePage match={match} mediaType="tv-show"/>}/>
          <Route path="/tv-shows">
            <ArchivePage mediaType="tv-show" archiveTitle="All tv-shows" />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
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