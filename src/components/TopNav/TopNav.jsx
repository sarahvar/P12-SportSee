
import logo from "../../../public/logo.png";
import {Link } from "react-router-dom";
import "../TopNav/TopNav.css"

const headerNavLinks = [
  { route: "/", name: "Accueil" },
  { route: "/profil", name: "Profil" },
  { route: "/reglage", name: "Réglage" },
  { route: "/communaute", name: "Communauté" },
];

export default function TopNavBar() {
  return ( <div id="navbar">
    <div className="navbar_logo">
      <img src={logo} alt="logo"></img>
    </div>
    <div className="topbar_right">
        <ul>
          {headerNavLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.route}>{link.name}</Link>
            </li>
          ))}
        </ul>
    </div>
  </div>
);
}
