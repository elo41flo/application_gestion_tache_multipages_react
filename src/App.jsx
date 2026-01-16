// Import 
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Accueil from "./pages/Accueil";
import AjoutTaches from "./pages/AjoutTaches";
import DetailsTaches from "./pages/DetailsTaches";
import Page404 from "./pages/Page404"; // Erreur sur l'url que je n'arrive pas à résoudre (souligné en rouge dans éditeur mais pas d'erreur dans la console)

function App() {
  // Variable qui contient mon tableau de tâche, c'est cette variable qu'on va utiliser pour afficher la liste de tâches
  const [taches, setTaches] = useState([ /* On utilise setTaches pour mettre à jour la liste des tâches 
    Avec useState on donne une valeur de départ à la liste pour ne pas avoir un écran vide au début */
    { id: 1, titre: "Exemple", description: "Ceci est une tâche test", statut: "À faire" }
  ]);

  // Fonction pour ajouter une tâche
  const ajouterUneTache = (nouvelleTache) => { // La fonction prend une nouvelle tâche en paramètre
    setTaches([...taches, nouvelleTache]); // On garde les tâches qui existe déjà et on ajoute la nouvelle à la fin
  };

  const supprimerUneTache = (id) => {  // On reçopit l'ID de la tâche à supprimer
  setTaches(taches.filter((t) => t.id !== id)); // Avec le .filter on dit de créer un nouveau tableau qui contient toutes les tâches sauf celle qui a l'ID.
};

  return (
    <>
      <Nav /> {/* Il est en dehors de Routes donc la bare de navigation s'affichera sur toutes les pages */}
      <Routes>
        {/* On passe dans tâche en props (props = l'argument devient dynamique) pour que l'accueil puisse les afficher */}
        {/* On passe supprimerUneTache pour que le bouton dans l'accueil puisse fonctionner */}
        <Route path="/" element={<Accueil taches={taches} supprimerUneTache={supprimerUneTache} />} />

        {/* On passe ajouterUneTache pour que le formulaire puisse envoyer la nouvelle tâche à App.jsx */}
        <Route path="/ajouter" element={<AjoutTaches ajouterUneTache={ajouterUneTache} />} />

        {/* :id est une variable elle permet d'avoir des url comme /tache1/ */}
        <Route path="/tache/:id" element={<DetailsTaches taches={taches} />} />

        {/* Si l'utilisateur tape une rul de tâche qui n'éxiste pas, on affiche la page 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;