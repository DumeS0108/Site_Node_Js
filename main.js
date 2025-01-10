// Récupérer l'élément où afficher la liste des médecins
var ladivMagique = document.getElementById("idListeMedecin");

// Afficher un message de chargement pendant la récupération des données
ladivMagique.innerHTML = "<p>Chargement des médecins...</p>";

// Appeler l'API pour récupérer la liste des médecins
fetch('http://192.168.65.219:8080/Route1', {
    headers: {
        Accept: 'application/json'
    }
})
    .then(response => {
        if (response.ok) {
            return response.json(); // Convertir la réponse en JSON
        } else {
            throw new Error('Erreur serveur', { cause: response });
        }
    })
    .then(result => {
        console.log('La liste des médecins :', result);

        // Vérifier si le résultat est un tableau et non vide
        if (Array.isArray(result) && result.length > 0) {
            // Effacer le message de chargement
            ladivMagique.innerHTML = "";

            // Ajouter chaque médecin dans une liste HTML
            const ul = document.createElement('ul');
            result.forEach(medecin => {
                const li = document.createElement('li');
                // Afficher prénom et nom du médecin
                li.textContent = `ID : ${medecin.id} Nom : ${medecin.nom} || Prenom : ${medecin.prenom}`; // Concaténer nom et prénom
                ul.appendChild(li);
            });
            ladivMagique.appendChild(ul);
        } else {
            ladivMagique.innerHTML = "<p>Aucun médecin trouvé.</p>";
        }
    })
    .catch(error => {
        console.error('Une erreur est survenue :', error);

        // Afficher un message d'erreur
        ladivMagique.innerHTML = "<p>Une erreur est survenue lors du chargement des médecins.</p>";
    });


//Button "GO"
var monButton = document.getElementById("Lebuton");
function envoyerUntruc() {
    let valeurDeMonChamp = document.getElementById("leNom");
    fetch("http://192.168.65.219:8080/addMedecin",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ "nom": valeurDeMonChamp })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}

monButton.addEventListener("click", envoyerUnTruc);