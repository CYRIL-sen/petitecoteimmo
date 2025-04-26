// Script pour gérer les annonces dans l'admin

document.addEventListener('DOMContentLoaded', function () {
  const adminAnnonces = document.getElementById('adminAnnonces');
  const ajoutForm = document.getElementById('ajoutAnnonceForm');

  if (adminAnnonces) {
    // Charger les annonces existantes
    fetch('../admin/annonces.json')
      .then(response => response.json())
      .then(data => {
        afficherAnnonces(data.annonces);
      })
      .catch(error => {
        console.error('Erreur chargement annonces :', error);
      });
  }

  function afficherAnnonces(annonces) {
    adminAnnonces.innerHTML = '';
    annonces.forEach((annonce, index) => {
      const div = document.createElement('div');
      div.classList.add('admin-card');
      div.innerHTML = `
        <h3>${annonce.titre}</h3>
        <p><strong>Localisation :</strong> ${annonce.localisation}</p>
        <p><strong>Superficie :</strong> ${annonce.superficie} m²</p>
        <p><strong>Prix :</strong> ${annonce.prix} €</p>
        <button onclick="supprimerAnnonce(${index})" class="btn-secondary" style="margin-top:10px;">Supprimer</button>
      `;
      adminAnnonces.appendChild(div);
    });
  }

  if (ajoutForm) {
    ajoutForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nouvelleAnnonce = {
        titre: document.getElementById('titre').value,
        localisation: document.getElementById('localisation').value,
        superficie: parseInt(document.getElementById('superficie').value),
        prix: parseInt(document.getElementById('prix').value)
      };

      const div = document.createElement('div');
      div.classList.add('admin-card');
      div.innerHTML = `
        <h3>${nouvelleAnnonce.titre}</h3>
        <p><strong>Localisation :</strong> ${nouvelleAnnonce.localisation}</p>
        <p><strong>Superficie :</strong> ${nouvelleAnnonce.superficie} m²</p>
        <p><strong>Prix :</strong> ${nouvelleAnnonce.prix} €</p>
      `;
      adminAnnonces.appendChild(div);

      ajoutForm.reset();
      alert('Annonce ajoutée (simulation)');
    });
  }

  // Fonction de suppression simulée
  window.supprimerAnnonce = function(index) {
    alert('Suppression simulée pour l\'annonce #' + (index + 1));
    // Ici, en réalité, on devrait re-générer l'affichage sans l'annonce supprimée
    // Mais la suppression directe du fichier JSON nécessite un vrai serveur backend
  };
});
