// value c'est la valeur actuelle du texte
// onChange c'est la fonctionn qui va s'exécuter à chaque fois que l'utilisateur tape une lettre
function ChampSaisie({ value, onChange }) {
    return (
        <input 
            type="text" 
            placeholder="Titre de la tâche..." 
            value={value} 
            onChange={onChange} 
            style={{ padding: "8px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
    );
}

export default ChampSaisie;