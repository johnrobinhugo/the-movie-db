import React from 'react';

import { Link } from "react-router-dom";

function Hero(props) {

  const showLargeHero = props.showLargeHero;

  console.log(showLargeHero)

  return (
    <section className={`hero ${showLargeHero ? "hero--large" : ""}`} style={{backgroundImage: "url(" + props.bgImgUrl + ")"}}>
      <div className="hero__content color-white page-wrapper">
        <h1>{props.title}</h1>
        {props.body !== undefined &&
          <p>{props.body}</p>
        }
        {props.link !== undefined &&
          <Link to={props.link} className="button button--hollow">{props.linkTitle}</Link>
        }
      </div>
    </section>
  )
}

export default Hero;