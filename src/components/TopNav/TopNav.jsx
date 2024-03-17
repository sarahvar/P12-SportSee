
import logo from "../../../public/logo.png";
import { NavLink } from "react-router-dom";
import "../TopNav/TopNav.css"

const headerNavLinks = [
  { route: "/", name: "Accueil" },
  { route: "/profil", name: "Profil" },
  { route: "/reglages", name: "Réglages" },
  { route: "/communaute", name: "Communauté" },
];

export default function TopNavBar() {
  return (
    <div id="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="topbar_right">
        <ul>
          {headerNavLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.route} activeclassname="active">{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


