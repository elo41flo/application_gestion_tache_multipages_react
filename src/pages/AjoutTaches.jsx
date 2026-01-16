// Import
import { useState } from "react"; // Pour créer une variable temporaire qui stocke ce que l'utilisateur tape avant de valider
import { useNavigate } from "react-router-dom"; // Permet de rediriger l'utilsiateur, c'est l'équivalent automatique d'un clic sur un lien
import ChampSaisie from "../components/ChampSaisie";
import BtnAjouter from "../components/BtnAjouter";

function AjoutTaches({ ajouterUneTache }) {
    const [titre, setTitre] = useState("");
    // Titre est un espace de stockage temporaire, tant que l'utilisateur n'a pas cliqué que ajouter la tâche n'existe pas encore dans App.jsx

    const navigate = useNavigate();

        // e.preventDefault() sans ça la page se refraîchirait et on perdrais les données de l'utilisateur
        // .trim supprime les espaces inutiles au début et à la fin.
        const handleSubmit = (e) => {
            e.preventDefault();
            if (!titre.trim()) return;

        const nouvelle = {
            id: Date.now(), // On utilise le timestamp actuel pour garantir un id unique
            titre: titre,
            description: "Tâche ajoutée via le formulaire",
            statut: "À faire"
        };

        ajouterUneTache(nouvelle); // On envoie l'objet à App.jsx
        navigate("/"); // Redirection vers l'accueil
    };

    return (
        <div>
            <h1>Créer une nouvelle tâche</h1>
            <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
                {/* value et onChange sont des composant contrôlé. La valeur de l'iput est lié au state titre, chaque lettre tazé par l'utilsiateur met à jour le state */}
                {/* BtnAjouter comme il est dans une balise form, submit déclenche automatiquement le onSubmit du formulaire */}
                <ChampSaisie 
                    value={titre} 
                    onChange={(e) => setTitre(e.target.value)} 
                />
                <BtnAjouter />
            </form>
        </div>
    );
}

export default AjoutTaches;