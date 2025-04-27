// assets/js/espace.js

// Vérifie si un utilisateur est déjà connecté
if (localStorage.getItem('userConnected')) {
  window.location.href = 'espace.html';
}

// Enregistrement d'un nouvel utilisateur
function enregistrerCompte(email, code) {
  const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs') || '{}');
  utilisateurs[email] = { code };
  localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
}

// Connexion d'un utilisateur
function connecter(email, code) {
  const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs') || '{}');

  if (utilisateurs[email] && utilisateurs[email].code === code) {
    localStorage.setItem('userConnected', email);
    window.location.href = 'espace.html';
  } else {
    alert('Email ou code incorrect.');
  }
}

// Déconnexion
function deconnecter() {
  localStorage.removeItem('userConnected');
  window.location.href = 'connexion.html';
}

// Mot de passe oublié
function recupererCode(email) {
  const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs') || '{}');

  if (utilisateurs[email]) {
    alert(`Votre code est : ${utilisateurs[email].code}`);
  } else {
    alert("Aucun compte n'est associé à cet email.");
  }
}

// Gestion formulaire connexion
const formConnexion = document.getElementById('formConnexion');
if (formConnexion) {
  formConnexion.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailConnexion').value.trim();
    const code = document.getElementById('codeConnexion').value.trim();
    connecter(email, code);
  });
}

// Gestion formulaire création de compte
const formCreation = document.getElementById('formCreation');
if (formCreation) {
  formCreation.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailCreation').value.trim();
    const code = document.getElementById('codeCreation').value.trim();
    enregistrerCompte(email, code);
    alert('Compte créé avec succès. Connectez-vous maintenant.');
    window.location.href = 'connexion.html';
  });
}

// Gestion formulaire mot de passe oublié
const formRecup = document.getElementById('formRecuperation');
if (formRecup) {
  formRecup.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailRecuperation').value.trim();
    recupererCode(email);
  });
}
