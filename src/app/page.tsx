import Image from "next/image";
import styles from "./page.module.css";
import "../../node_modules/bulma/css/bulma.css";

import Celebration from "./components/Celebration";
import ConfirmForm from "./components/ConfirmForm";

export default function Home() {
  return (
    <div className="paper-back">
      <div className="hero" style={{ height: "100vh" }}>
        <div className="hero-body">
          <div className="container">
			<Celebration/>
			<ConfirmForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
