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
        <div className="hero-body has-text-centered">
          <div className="container">
            <Celebration />
          </div>
        </div>
        <div className="hero-foot has-text-centered">
          <div className="is-flex is-flex-wrap-wrap my-5 ">
            <div className="flex-item p-2">
              <span className="is-gold is-uppercase is-size-7">
                <a href="#conferma-partecipazione">Conferma Partecipazione</a>
              </span>
            </div>
            <div className="flex-item p-2">
              <span className="is-gold is-uppercase is-size-7">
                <a href="#info-cerimonia">Info Cerimonia</a>
              </span>
            </div>

            <div className="flex-item p-2">
              <span className="is-gold is-uppercase is-size-7">
                <a href="#conferma-partecipazione">Info Ristorante</a>
              </span>
            </div>

            <div className="flex-item p-2">
              <span className="is-gold is-uppercase is-size-7">
                <a href="#conferma-partecipazione">Info Hotel</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hero is-fullheight paper-back"
        id="conferma-partecipazione"
      >
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-half">
              <ConfirmForm />
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight paper-back" id="info-indicazioni">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-half">
              <StreetDirections />
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight paper-back" id="info-hotel">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-half">
              <Hotel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
