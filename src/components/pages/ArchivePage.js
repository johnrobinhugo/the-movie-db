import React, { useState, useEffect } from 'react';

import ContentSection from '../organisms/ContentSection';
import ContentGrid from '../organisms/ContentGrid';

function ArchivePage() {

  const [config, setConfig] = useState({
    baseUrl: [],
    backdropSizes: [],
    posterSizes: []
  });

  const [mediaList, setMediaList] = useState([]);

  function getMovies(pageNumber) {
    const apiKey = '629509ed105e3999068ed4c71c959130';

    // Get movies
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&popularity.asc&include_adult=false&include_video=false&page=${pageNumber}`)
      .then(response => response.json())
      .then(data => {
        let mediaObjects = data.results;
        setMediaList(mediaObjects);
      })
      .catch((error) => {
        console.log(error);
      });; 
  }

  useEffect(() => {
    const apiKey = '629509ed105e3999068ed4c71c959130';

    // Get API configs like images sizes
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
      .then(response => response.json())
      .then((data) => {
        setConfig({
          baseUrl: data.images.base_url,
          backdropSizes: data.images.backdrop_sizes,
          posterSizes: data.images.poster_sizes
        })
      })
      .catch((error) => {
        console.log(error);
      });

      const pageNumber = 1;
      getMovies(pageNumber);
  });

  return (
    <main className="page">
      <ContentSection title="All movies">
        <ContentGrid content={mediaList} configBaseUrl={config.baseUrl} configPosterSizes={config.posterSizes} />
      </ContentSection>
    </main>
  )
}

export default ArchivePage;