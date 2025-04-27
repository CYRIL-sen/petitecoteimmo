// espace.js

document.addEventListener("DOMContentLoaded", () => {

  const connexionForm = document.getElementById("connexionForm");
  const inscriptionForm = document.getElementById("inscriptionForm");
  const motDePasseForm = document.getElementById("motDePasseForm");

  const switchToInscription = document.getElementById("switchToInscription");
  const switchToConnexion = document.getElementById("switchToConnexion");
  const switchToMotDePasse = document.getElementById("switchToMotDePasse");

  const retourConnexion = document.getElementById("retourConnexion");

  // Navigation entre les formulaires

  switchToInscription.addEventListener("click", (e) => {
    e.preventDefault();
    connexionForm.classList.add("hidden");
    inscriptionForm.classList.remove("hidden");
    motDePasseForm.classList.add("hidden");
  });

  switchToConnexion.addEventListener("click", (e) => {
    e.preventDefault();
    inscriptionForm.classList.add("hidden");
    connexionForm.classList.remove("hidden");
    motDePasseForm.classList.add("hidden");
  });

  switchToMotDePasse.addEventListener("click", (e) => {
    e.preventDefault();
    connexionForm.classList.add("hidden");
    inscriptionForm.classList.add("hidden");
    motDePasseForm.classList.remove("hidden");
  });

  retourConnexion.addEventListener("click", (e) => {
    e.preventDefault();
    motDePasseForm.classList.add("hidden");
    connexionForm.classList.remove("hidden");
  });

});

