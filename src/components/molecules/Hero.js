import React from 'react';

function Hero(props) {
  return (
    <section className="hero hero--large" style={{backgroundImage: "url(" + props.bgImgUrl + ")"}}>
      <div className="hero__content color-white page-wrapper">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <a href="#" className="button button--hollow">Learn more</a>
      </div>
    </section>
  )
}

export default Hero;