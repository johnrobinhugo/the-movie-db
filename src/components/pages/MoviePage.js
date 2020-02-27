import React from 'react';

import Hero from '../molecules/Hero';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      baseUrl: [],
      backdropSizes: []
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
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // Get data for a movie
    fetch('https://api.themoviedb.org/3/movie/454626?api_key=' + apiKey)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ 
          movie: data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    // const baseUrl = this.state.baseUrl;
    // const backdropSize = this.state.backdropSizes[3];
    // const backdropPath = this.state.randomMovie.backdrop_path;
    // const bgImageUrl = baseUrl.concat(backdropSize, backdropPath)

    return (
      <main className="page">
        {/* <Hero title={this.state.randomMovie.title} body={this.state.randomMovie.overview} link="/" linkTitle="View movie" bgImgUrl={bgImageUrl}/> */}
        
      </main>
    )
  }
}

export default MoviePage;