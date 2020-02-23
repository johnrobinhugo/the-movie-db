import React from 'react';

import Hero from '../molecules/Hero';
import ContentSection from '../organisms/ContentSection';
import ContentGrid from '../organisms/ContentGrid';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      randomMovie: {},
      baseUrl: [],
      backdropSizes: [],
      posterSizes: []
    }
   }

  componentDidMount() {
    const apiKey = '629509ed105e3999068ed4c71c959130';

    // Get API configs like images sizes
    fetch('https://api.themoviedb.org/3/configuration?api_key=' + apiKey)
      .then(response => response.json())
      .then((data) => {
        this.setState({ 
          baseUrl: data.images.base_url,
          backdropSizes: data.images.backdrop_sizes,
          posterSizes: data.images.poster_sizes
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // Get movies
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&popularity.asc&include_adult=false&include_video=false&page=1')
      .then(response => response.json())
      .then(data => {
        let movies = data.results;
        let randomMovie = movies[Math.floor(Math.random() * movies.length)]

        this.setState({
          popularMovies: movies,
          randomMovie: randomMovie
        });
      })
      .catch((error) => {
        console.log(error);
      });;
  }

  render() {

    const baseUrl = this.state.baseUrl;
    const backdropSize = this.state.backdropSizes[3];
    const backdropPath = this.state.randomMovie.backdrop_path;
    const bgImageUrl = baseUrl.concat(backdropSize, backdropPath)

    return (
      <main className="page">
        <Hero title={this.state.randomMovie.title} body={this.state.randomMovie.overview} bgImgUrl={bgImageUrl}/>
        <ContentSection title="Popular movies" sectionLink="/movies" sectionLinkTitle="All movies">
          <ContentGrid content={this.state.popularMovies} gridItems={5} configBaseUrl={this.state.baseUrl} configPosterSizes={this.state.posterSizes}/>
        </ContentSection>
      </main>
    )
  }
}

export default FrontPage;