import { Link } from "react-router-dom";
import TopNavBar from "../../components/TopNav/TopNav";
import "../Error/Error.css";

//Créer la page error en cas d'erreurs et utiliser pour les 3 pages
export default function ErrorPage() {
  return (
    <div className="error-page">
      <TopNavBar />
      <div className="container">
        <h1 className="title-error">404</h1>
        <div className="oups">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <Link className="link-accueil" to="/">
          retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}