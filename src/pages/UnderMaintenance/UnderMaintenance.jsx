import './UnderMaintenance.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/panneau-maintenance.jpg"
const UnderMaintenance = () => {
  return (
    <div id="under-maintenance">
      <h1>Cette page est en maintenance.
      <div className="under-maintenance_img">
      <img src={logo} alt="logo" /></div>
      </h1>
      <Link to="/"> Retourner à la page d&apos;accueil</Link>
    </div>
  );
};

export default UnderMaintenance;