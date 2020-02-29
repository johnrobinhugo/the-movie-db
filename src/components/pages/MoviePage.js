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
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
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
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
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

    const baseUrl = this.state.baseUrl;
    const backdropSize = this.state.backdropSizes[3];
    const backdropPath = this.state.movie.backdrop_path;
    const bgImageUrl = baseUrl.concat(backdropSize, backdropPath)

    return (
      <main className="page">
        <Hero title={this.state.movie.title} bgImgUrl={bgImageUrl}/>
        <div className="content">
          <div className="page-wrapper">
            <p>
              {this.state.movie.overview}
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default MoviePage;