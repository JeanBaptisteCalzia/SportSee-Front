import React from "react";
import { Link } from "react-router-dom";

/**
 * Render Error 404 content
 * @return { JSX.Element }
 */

function Error() {
  return (
    <main>
      <h1>Erreur 404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="btn">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error;
