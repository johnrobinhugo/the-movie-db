import React from 'react';

import Hero from '../molecules/Hero';
import Like from '../atoms/Like';

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaObject: {},
      baseUrl: [],
      backdropSizes: [],
      likeStatus: false
    }

    this.setLikeStatus = this.setLikeStatus.bind(this);
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

    // Get data for media object
    const id = this.props.match.params.id;

    let mediaType = '';

    if(this.props.mediaType === 'movie') {
      mediaType = 'movie';
    } else if(this.props.mediaType === 'tv-show') {
      mediaType = 'tv'
    }

    fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setState({ 
          mediaObject: data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setLikeStatus(e) {
    e.preventDefault();
    this.setState(prevState => ({
      likeStatus: !prevState.likeStatus
    }));
  }

  render() {

    const baseUrl = this.state.baseUrl;
    const backdropSize = this.state.backdropSizes[3];
    const backdropPath = this.state.mediaObject.backdrop_path;
    const bgImageUrl = baseUrl.concat(backdropSize, backdropPath)

    let heroTitle = null;

    if(this.state.mediaObject.original_title !== undefined) {
      heroTitle = this.state.mediaObject.original_title;
    } else {
      heroTitle = this.state.mediaObject.original_name;
    }

    return (
      <main className="page">
        <Hero title={heroTitle} bgImgUrl={bgImageUrl}/>
        <div className="bg-white">
          <div className="page-wrapper">
            <div className="primary-content">
              <div className="primary-content__column">
                <p>
                  {this.state.mediaObject.overview}
                </p>
              </div>
              <div className="primary-content__column">
                <div className="meta-info">
                  <p className="meto-info__item"><span>Release date: </span>{this.state.mediaObject.release_date}</p>
                  <p className="meto-info__item"><span>Average vote: </span>{this.state.mediaObject.vote_average}</p>
                </div>
                <p className="like-this">
                  <span>Heart this:</span><Like sendLikeStatus={this.setLikeStatus} likeStatus={this.state.likeStatus}/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default SinglePage;