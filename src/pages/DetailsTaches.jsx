// Import
import { useParams, Link } from "react-router-dom"; // useParams est un hook qui permet de lire l'url et link est utilisé ici pour créer un bouton retour qui ne recharge pas la page

function DetailsTaches({ taches }) {
    const { id } = useParams(); // :id extrait la variable que j'ai définis dans mes routers App.jsx
    const tache = taches.find((t) => t.id.toString() === id); // taches c'est le tableau que j'ai rreçu en props depuis App.jsx, 
    // .find parcourt le tableau et s'arrête dès qu'il trouve une correspondance, 
    // ensuite on transforme l'id de la tâche en texte (avec toString) pour pouvoir le comparer proprement à l'ID de l'URL

    if (!tache) return <h2>Tâche non trouvée !</h2>; // Si l'utilisateur tape un id dans l'url qui n'existe pas, ça affiche un message d'erreur

    return (
        <div>
            <h1>Détails de la tâche</h1>
            <div style={{ border: "2px solid blue", padding: "20px", borderRadius: "10px" }}>
                {/* Une fois que la tâche est trouvée on peut voir ses propriétés pour les injecter dans le html */}
                <h2>{tache.titre}</h2>
                <p><strong>Description :</strong> {tache.description}</p>
                <p><strong>Statut :</strong> {tache.statut}</p>
                
                {/* L'utilsiateur peut revenir à l'accueil s'il le souhaite */}
                <Link to="/">Retour à la liste</Link>
            </div>
        </div>
    );
}

export default DetailsTaches;