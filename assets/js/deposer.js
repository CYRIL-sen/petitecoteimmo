// Script pour gérer le formulaire de dépôt d'annonce

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('deposerForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher l'envoi classique du formulaire

    // Simulation d'envoi réussi
    alert("Votre annonce a été envoyée avec succès ! Nous la traiterons rapidement.");

    // Optionnel : Réinitialiser le formulaire après envoi
    form.reset();
  });
});

