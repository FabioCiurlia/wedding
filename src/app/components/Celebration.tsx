import "../../../node_modules/bulma/css/bulma.css";

export default function Celebration() {
  return (
    <section>
      <h1 className="is-hidden-mobile names-desktop">Andrea e Roberta</h1>

      <h1 className="is-hidden-desktop names-mobile">Andrea e Roberta</h1>

      <div className="columns is-centered">
        <div className="column is-half">
          <div className="my-5">
            <p
              className="has-text-centered is-size-6"
              style={{ lineHeight: "normal", letterSpacing: "2px" }}
            >
              ANNUNCIANO CON GIOIA
              <br />
              IL LORO MATRIMONIO
            </p>
          </div>
          <div className="is-flex is-flex-direction-column is-align-items-center">
            <div
              className="is-flex is-justify-content-center"
              style={{ gap: "1.5em", alignItems: "center" }}
            >
              <div>
                <span className="wrapped-border">&#8194;SABATO&#8194;</span>
              </div>
              <div>
                <span className="is-size-2 is-size-2-touch">16</span>
              </div>
              <div>
                <span className="wrapped-border">DICEMBRE</span>
              </div>
            </div>
            <div style={{ marginTop: "-8px" }}>2023</div>
          </div>
        </div>
      </div>
    </section>
  );
}
