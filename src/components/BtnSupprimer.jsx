function BtnSupprimer({ onClick }) {
    // On créer un bouton supprimer qui réagis au clic de l'utilisateur 
    return (
        <button onClick={onClick} style={{ backgroundColor: "red", color: "white" }}>
        Supprimer
        </button>
    );
}

export default BtnSupprimer;