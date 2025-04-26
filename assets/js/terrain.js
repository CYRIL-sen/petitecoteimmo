// terrain.js

// Fonction pour récupérer les infos du terrain depuis l'URL
function getTerrainData() {
  // Exemple simulé, plus tard on pourra passer les données dans l'URL
  return {
    titre: "Terrain résidentiel à Popenguine",
    localisation: "Popenguine, Sénégal",
    superficie: "4500 m²",
    prix: "30 000 €",
    type: "Résidentiel",
    latitude: 14.6050,   // Coordonées latitude du terrain
    longitude: -17.0667  // Coordonées longitude du terrain
  };
}

// Afficher les infos du terrain
function afficherTerrain() {
  const terrain = getTerrainData();

  document.getElementById('titreTerrain').textContent = terrain.titre;
  document.getElementById('localisationTerrain').textContent = `📍 Localisation : ${terrain.localisation}`;
  document.getElementById('superficieTerrain').textContent = `📐 Superficie : ${terrain.superficie}`;
  document.getElementById('prixTerrain').textContent = `💰 Prix : ${terrain.prix}`;
  document.getElementById('typeTerrain').textContent = `🏡 Type : ${terrain.type}`;
}

// Fonction d'initialisation de la carte Google Map
function initMap() {
  const terrain = getTerrainData();

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: terrain.latitude, lng: terrain.longitude },
  });

  const marker = new google.maps.Marker({
    position: { lat: terrain.latitude, lng: terrain.longitude },
    map: map,
    title: terrain.titre
  });
}

// Appeler l'affichage dès que la page est chargée
document.addEventListener("DOMContentLoaded", afficherTerrain);
