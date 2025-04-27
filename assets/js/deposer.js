// assets/js/deposer.js

document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('deposerForm');
  const confirmation = document.getElementById('confirmation');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validation du code secret
    const codeSecret = form.codeSecret.value.trim();
    if (!/^[A-Za-z0-9]{8}$/.test(codeSecret)) {
      alert('Votre code secret doit contenir exactement 8 lettres et/ou chiffres.');
      return;
    }

    // Simulation d'enregistrement local (dans le navigateur pour l'instant)
    const annonce = {
      prenom: form.prenom.value.trim(),
      nom: form.nom.value.trim(),
      email: form.email.value.trim(),
      telephone: form.telephone.value.trim(),
      codeSecret: form.codeSecret.value.trim(),
      titre: form.titre.value.trim(),
      description: form.description.value.trim(),
      prix: form.prix.value.trim(),
      superficie: form.superficie.value.trim(),
      localisation: form.localisation.value.trim(),
      photos: []
    };

    // Gestion des photos (simplement afficher les noms pour le moment)
    if (form.photos.files.length > 0) {
      for (let i = 0; i < form.photos.files.length; i++) {
        annonce.photos.push(form.photos.files[i].name);
      }
    }

    // Stockage temporaire dans localStorage (simule une base de données pour test)
    let annonces = JSON.parse(localStorage.getItem('annonces')) || [];
    annonces.push(annonce);
    localStorage.setItem('annonces', JSON.stringify(annonces));

    // Réinitialiser le formulaire
    form.reset();

    // Afficher confirmation
    form.style.display = 'none';
    confirmation.style.display = 'block';
  });
});
