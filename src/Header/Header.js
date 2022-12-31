import "../Header/Header.css";
import cvimge from "../img/Resume-bro.png";

export default function Header({ nextStep }) {
  return (
    <div className="Header">
      <div className="text">
        <h1>You cannot create your own resume?</h1>
        <p>Here you will create it easily</p>
      </div>
      <img src={cvimge} />

      <div>
        <button onClick={nextStep}>start</button>
      </div>
    </div>
  );
}
