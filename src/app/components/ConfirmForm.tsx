import React from "react";

export default function ConfirmForm() {
  return (
    <>
    <div className="mb-5 has-text-centered">
      <span className="wrapped-border is-size-5">CONFERMA PARTECIPAZIONE</span>
    </div>
    <div className="content my-2 ">
        <p className="has-text-justified">Ti chiediamo cortesemente di compilare le informazioni riguardo la tua partecipazione, specificando <b>Nome</b> e <b>Cognome</b> della famiglia.
        </p>
      </div>
      <form name="confirm-invite" data-netlify="true" method="post">
        <input type="hidden" name="form-name" value="confirm-invite"/>
        <div className="field">
          <label className="label">Nome</label>
          <input className="input" type="text" name="name" placeholder="es. Andrea"/>
        </div>
        <div className="field">
            <label className="label">Cognome</label>
            <input className="input" type="text" name="cognome" placeholder="es. Rosafio"/>
        </div>

        <div className="columns">
          <div className="column is-6">
          <label className="label">Parteciperai?</label>
          <label className="checkbox">
            <input type="checkbox" name="partecipazione" value="Si"/>
          </label>
          <span className="mx-1">Si</span>

          <label className="checkbox">
            <input type="checkbox" name="partecipazione" value="No"/>
          </label>
          <span className="mx-1">No</span>
        </div>

        <div className="column is-6">

          <div className="field">
          <label className="label">Quanti sarete?</label>
          <input className="input" type="number" name="numero" placeholder="es. 2"/>
        </div>
          </div>
          
          </div>
        
        <div className="field">
            <label className="label mb-1">Allergeni o Intolleranze</label>
            <article className="mb-2">
                <div className="is-bold">
                    Se ci sono delle intolleranze o allergie, per favore, specificale qui
                </div>
            </article>
            <textarea className="textarea" name="note" placeholder="es. Lattosio, Glutine etc..."></textarea>
        </div>

        <p className="has-text-centered">
          <button className="button" type="submit">Conferma</button>
        </p>
      </form>
    </>
  );
}
