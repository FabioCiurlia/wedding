import "../../../node_modules/bulma/css/bulma.css";

export default function Celebration() {
  return (
    <section className="">
      <embed src="andrea_roberta.svg" className="logo"/>
      <div className="columns is-centered is-flex">
        <div className="column is-half">
          <div className="my-5">
            <p
              className="has-text-centered is-size-6 is-gold bold-spaced-text"
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
                <span className="wrapped-border is-size-4-desktop">&#8194;SABATO&#8194;</span>
              </div>
              <div>
                <span className="is-size-1-desktop is-size-2 is-size-2-touch is-green">16</span>
              </div>
              <div>
                <span className="wrapped-border is-size-4-desktop">DICEMBRE</span>
              </div>
            </div>
            <div className="is-green is-size-4-desktop" style={{ marginTop: "-8px" }}>
              2023
            </div>
          </div>
          {/* Fine Layout Partecipazione */}
          <div className="my-6">
            <span
              className="is-gold is-size-5-desktop is-size-6"
              style={{ marginBottom: "-4px" }}
            >
              ORE 10:30
            </span>
            <p
              className="is-green is-size-4-desktop bold-spaced-text"
              style={{ lineHeight: "normal", letterSpacing: "2px" }}
            >
              CATTEDRALE MARIA SS. ASSUNTA
            </p>
            <span className="is-gold is-size-6-desktop is-size-7">
              <a href="https://maps.app.goo.gl/KgiAzC4RsV8YC3DDA">
                P.ZZA DEL DUOMO - LECCE
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

