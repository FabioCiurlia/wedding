import React from "react";

export default function ConfirmForm() {
  return (
    <>
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
        <div className="control">
            <label className="radio">Parteciperai?</label>
            <label className="radio">
                <input type="radio" name="partecipi" value="Si"/>Si
            </label>
            <label className="radio">
                <input type="radio" name="partecipi" value="No"/>No
            </label>
        </div>
        <br/>
        <div className="field">
          <label className="label">Partecipanti</label>
          <input className="input" type="number" name="numero" placeholder="es. 2"/>
        </div>
        
        <div className="field">
            <label className="label mb-1">Allergeni o Intolleranze</label>
            <article className="">
                <div className="is-bold">
                    Se ci sono delle intolleranze o allergie, per favore, specificale qui
                </div>
            </article>
            <textarea className="textarea" name="note" placeholder="es. Lattosio, Glutine etc..."></textarea>
        </div>

        <p className="has-text-centered">
          <button className="button" type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
