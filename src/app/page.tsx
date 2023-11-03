import Image from "next/image";
import styles from "./page.module.css";
import "../../node_modules/bulma/css/bulma.css";

import Celebration from "./components/Celebration";
import ConfirmForm from "./components/ConfirmForm";

export default function Home() {
  return (
    <section className="">
      <div className="paper-back hero">
        <div className="hero-body">
          <div className="container">
			<Celebration/>
			<div className="columns is-centered">
        		<div className="column is-half">
					<ConfirmForm/>
				</div>
			</div>
          </div>
        </div>
      </div>
    </section>
  );
}
