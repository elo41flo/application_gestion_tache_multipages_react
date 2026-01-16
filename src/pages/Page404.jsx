// Import
import { Link } from "react-router-dom"; // On permet à l'utilsiateur avec Link de pouvoir revenir en arrière et échapper à l'erreur

function Page404() {
    return (
        <div>
            <h1>404 - Page non trouvée 😵</h1>
            <p>Oups ! Cette page n'existe pas.</p>

            {/* On propose de revenir à l'accueil du site */}
            <Link to="/">Retourner à l'accueil</Link>
        </div>
    );
}

export default Page404;