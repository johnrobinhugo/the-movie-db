import React from 'react';

import ContentSection from '../organisms/ContentSection';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      value: '',
      results: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({query: this.state.value});
    event.preventDefault();
  }

  handleSearch() {
    const apiKey = '629509ed105e3999068ed4c71c959130';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.query}&page=1&include_adult=false`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query) {
      this.handleSearch();
    }
  }

  render() {
    return (
      <main className="page">
        <ContentSection title="Search">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form__item form__item--search">
              <input type="text" value={this.state.value} placeholder="Search by title" onChange={this.handleChange} />
              <button type="submit">Search</button>
            </div>
          </form>
        </ContentSection>
      </main>
    )
  }
}

export default SearchPage;