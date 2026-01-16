// Import
import { Link } from "react-router-dom"; // Link remplazce la balise html <a>
import BtnSupprimer from "../components/BtnSupprimer"; // On importe le composant pour l'utiliser ici

// On récupère la lsite des tâches et la fonction de suppression envoyée par App.jsx
function Accueil({ taches, supprimerUneTache }) {
    return (
        <div>
            <h1>Accueil - To Do List</h1>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

                {/* Le .map parcourt mon tableau tâche et pour chaque objet t trouvé elle génère du code jsx */}
                {taches.map((t) => {
                    return (
                        <div key={t.id} className="card" style={{ border: "1px solid #ccc", padding: "15px" }}> {/* key={t.id} est obligatoire, il faut un id pour chaque élément d'une liste afin de savoir lequel supprimer */}
                            <h3>{t.titre}</h3>   
                            <Link to={`/tache/${t.id}`}>Voir détails</Link> {/* On utilise le to= pour constrire les url. Si l'id est 1, le lien devient /tache1/. C'est ce qui permet de savoir quelle tâche afficher quand on clique sur Voir détail. */}
                            <BtnSupprimer onClick={() => supprimerUneTache(t.id)} /> {/* onClick sert de écouteur de click. On utilise une fonction fléché pour attendre le clic, quand l'utilisateur clic ça exécute la suppression en utilisant l'id de la tâche */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Accueil;