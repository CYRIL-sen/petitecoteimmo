// terrain.js

// Liste des terrains disponibles
const terrains = [
  {
    id: 1,
    titre: "Terrain résidentiel à Popenguine",
    localisation: "Popenguine, Sénégal",
    superficie: "4500 m²",
    prix: "30 000 €",
    type: "Résidentiel",
    latitude: 14.6050,
    longitude: -17.0667,
    images: [
      "assets/images/terrains/terrain1.jpg",
      "assets/images/terrains/terrain2.jpg",
      "assets/images/terrains/terrain3.jpg",
      "assets/images/terrains/terrain4.jpg"
    ]
  },
  {
    id: 2,
    titre: "Grand terrain agricole à Ndayane",
    localisation: "Ndayane, Sénégal",
    superficie: "10 hectares",
    prix: "120 000 €",
    type: "Agricole",
    latitude: 14.5333,
    longitude: -17.1500,
    images: [
      "assets/images/terrains/terrain5.jpg",
      "assets/images/terrains/terrain6.jpg"
    ]
  },
  {
    id: 3,
    titre: "Terrain commercial à Diamniadio",
    localisation: "Diamniadio, Sénégal",
    superficie: "1200 m²",
    prix: "90 000 €",
    type: "Commercial",
    latitude: 14.7167,
    longitude: -17.3000,
    images: [] // Pas encore de photo
  }
];

// Fonction pour récupérer l'ID depuis l'URL
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id')) || 1; // par défaut id=1
}

// Fonction pour afficher les infos du terrain
function afficherTerrain() {
  const id = getIdFromUrl();
  const terrain = terrains.find(t => t.id === id) || terrains[0]; // sécurité

  document.getElementById('titreTerrain').textContent = terrain.titre;
  document.getElementById('localisationTerrain').textContent = `📍 Localisation : ${terrain.localisation}`;
  document.getElementById('superficieTerrain').textContent = `📐 Superficie : ${terrain.superficie}`;
  document.getElementById('prixTerrain').textContent = `💰 Prix : ${terrain.prix}`;
  document.getElementById('typeTerrain').textContent = `🏡 Type : ${terrain.type}`;

  // Galerie de photos
  const galerie = document.querySelector('.terrain-gallery');
  galerie.innerHTML = '';

  if (terrain.images.length > 0) {
    terrain.images.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo;
      img.alt = terrain.titre;
      galerie.appendChild(img);
    });
  } else {
    // Aucune image => image générique
    const img = document.createElement('img');
    img.src = "assets/images/terrains/terrain-generique.jpg";
    img.alt = "Terrain générique";
    galerie.appendChild(img);
  }
}

// Fonction d'initialisation de la carte
function initMap() {
  const id = getIdFromUrl();
  const terrain = terrains.find(t => t.id === id) || terrains[0];

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

// Lancer tout au chargement de la page
document.addEventListener("DOMContentLoaded", afficherTerrain);
