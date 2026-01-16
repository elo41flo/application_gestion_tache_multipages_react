// Import
import { Link } from "react-router-dom"; // Vérifie que c'est bien écrit au pluriel

function Nav() {
    return (
        <nav>
            <ul>
                {/* On utilise des balises <li> séparées pour chaque lien */}
                <li>
                    <Link to="/">Accueil</Link> {/* On pointe vers la racine du site */}
                </li>
                <li>
                    <Link to="/ajouter">Ajouter une tâche</Link> {/* Le chemin doit correspondre à ce que je met dans le fichier App.jsx */}
                </li>
            </ul>
        </nav>
    );
}

export default Nav;