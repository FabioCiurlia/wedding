import Image from "next/image";
import "../../node_modules/bulma/css/bulma.css";

import Celebration from "./components/Celebration";
import ConfirmForm from "./components/ConfirmForm";

export default function Home() {
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
                  <a href="#conferma-partecipazione">Info Cerimonia</a>
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
      <section className="hero is-fullheight paper-back" id="conferma-partecipazione">
        <div className="hero-body pt-0">
          <div className="columns is-centered">
            <div className="column is-half">
              <ConfirmForm />
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight paper-back" id="conferma-partecipazione">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-half">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
