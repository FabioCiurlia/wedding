"use client";
import "../../node_modules/bulma/css/bulma.css";
import React, { useState, useEffect } from "react";

import Celebration from "./components/Celebration";
import ConfirmForm from "./components/ConfirmForm";
import StreetDirections from "./components/StreetDirections";
import Hotel from "./components/Hotel";

const Home = () => {
  
  const initObs = () => {
    const heroes = Array.from(document.querySelectorAll(".hero"));
    let observerOptions = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entry: any) => {
      if(entry?.[1].isIntersecting){
        console.log(entry)
        return scrollBy({
          top: entry?.[1].boundingClientRect.top,
          behavior: 'smooth'
        })
      }

      if(entry?.[0].isIntersecting){
        console.log(entry)
        scrollBy({
          top: entry?.[0].boundingClientRect.top,
          behavior: 'smooth'
        })
      }
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    heroes.forEach((hero) => {
      observer.observe(hero);
    });
  };

  useEffect( initObs, []); 

  return (
    <>
      <section className="hero is-fullheight paper-back">
        <div className="decoration-back absolute is-mobile is-hidden-desktop"></div>
        <div className="decoration-back absolute is-hidden-touch"></div>
        <div className="hero-body has-text-centered">
          <div className="container">
            <Celebration />
          </div>
        </div>
        <div className="hero-foot has-text-centered">
          <div className="is-flex is-flex-wrap-wrap my-5 ">
            <div className="flex-item py-2 mx-4">
              <a className="button is-outlined is-rounded is-transparent is-fullwidth" href="#info-cerimonia">Indicazioni Stradali e Parcheggi</a>
            </div>
            <div className="flex-item py-2 mx-4">
                <a className="button is-outlined is-rounded is-transparent is-fullwidth" href="#conferma-partecipazione">Conferma Partecipazione</a>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight paper-back" id="info-cerimonia">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-half">
              <StreetDirections />
            </div>
          </div>
        </div>
      </section>
      { /* 
      <section className="hero is-fullheight paper-back" id="info-hotel">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-half">
              <Hotel />
            </div>
          </div>
        </div>
      </section> */ }
      <section
        className="hero is-fullheight paper-back" id="conferma-partecipazione">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-half">
              <ConfirmForm />
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight paper-back" style={{ position: 'relative'}}>
        <div className="end-back"></div>
        <div className="hero-body has-text-centered">
          <div className="container">
            <p className="is-size-6 is-size-5-desktop has-text-centered is-gold" style={{ lineHeight: "normal", letterSpacing: "2px" }}>GRADITA CONFERMA ENTRO IL 16 NOVEMBRE</p>
            <div className="my-3">
              <div className="my-2">
                <p className="bold-spaced-text is-size-6-desktop is-size-7">ANDREA ROSAFIO, 347 790 0514</p>
                <p className="bold-spaced-text is-gold is-size-7">VIA GAGLIARDO, 32 - TAURISANO (LE)</p>
              </div>
              <div className="my-2">
                <p className="bold-spaced-text is-size-6-desktop is-size-7">ROBERTA CARANGELO, 348 696 8255</p>
                <p className="bold-spaced-text is-gold is-size-7">VIA RUFFANO, 1 - TAURISANO (LE)</p>
              </div>
            </div>
            <div className="my-5">
              <p className="is-size-7 bold-spaced-text">IBAN<br/>IT80I0347501605CC0012296592</p>
            </div>
            <h1 className="custom-font is-size-1">Grazie</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
