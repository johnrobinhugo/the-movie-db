import React from 'react';

import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <section className="hero hero--large" style={{backgroundImage: "url(" + props.bgImgUrl + ")"}}>
      <div className="hero__content color-white page-wrapper">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <Link to={props.link} className="button button--hollow">{props.linkTitle}</Link>
      </div>
    </section>
  )
}

export default Hero;