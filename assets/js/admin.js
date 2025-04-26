// Script pour gérer les annonces dans l'admin

document.addEventListener('DOMContentLoaded', function () {
  const adminAnnonces = document.getElementById('adminAnnonces');
  const ajoutForm = document.getElementById('ajoutAnnonceForm');

  // Charger les annonces existantes
  fetch('annonces.json')
    .then(response => response.json())
    .then(data => {
      afficherAnnonces(data.annonces);
    })
    .catch(error => {
      console.error('Erreur chargement annonces :', error);
    });

  function afficherAnnonces(annonces) {
    adminAnnonces.innerHTML = '';
    annonces.forEach((annonce, index) => {
      const div = document.createElement('div');
      div.classList.add('admin-card');
      div.innerHTML = `
        <h3>${annonce.titre}</h3>
        <p>Localisation : ${annonce.localisation}</p>
        <p>Superficie : ${annonce.superficie} m²</p>
        <p>Prix : ${annonce.prix} €</p>
        <button onclick="supprimerAnnonce(${index})" class="btn-secondary">Supprimer</button>
      `;
      adminAnnonces.appendChild(div);
    });
  }

  // Ajouter une nouvelle annonce (simulation côté client)
  ajoutForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nouvelleAnnonce = {
      titre: document.getElementById('titre').value,
      localisation: document.getElementById('localisation').value,
      superficie: parseInt(document.getElementById('superficie').value),
      prix: parseInt(document.getElementById('prix').value)
    };

    // Ajouter l'annonce directement à l'affichage
    const div = document.createElement('div');
    div.classList.add('admin-card');
    div.innerHTML = `
      <h3>${nouvelleAnnonce.titre}</h3>
      <p>Localisation : ${nouvelleAnnonce.localisation}</p>
      <p>Superficie : ${nouvelleAnnonce.superficie} m²</p>
      <p>Prix : ${nouvelleAnnonce.prix} €</p>
    `;
    adminAnnonces.appendChild(div);

    // Reset formulaire
    ajoutForm.reset();
    alert('Annonce ajoutée (simulation)');
  });

  // Supprimer une annonce (simulation)
  window.supprimerAnnonce = function(index) {
    alert('Suppression simulée pour l\'annonce #' + (index + 1));
    // Ici on ne modifie pas encore réellement le fichier JSON
  };
});
