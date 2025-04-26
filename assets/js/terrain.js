// terrain.js

// Données simulées pour les terrains
const terrains = {
  1: {
    titre: "Terrain à Popenguine",
    prix: "15 000 €",
    surface: "450 m²",
    adresse: "Popenguine, Sénégal",
    description: "Magnifique terrain plat à Popenguine, idéal pour résidence secondaire.",
    photos: [
      "assets/images/terrains/terrain1.jpg",
      "assets/images/terrains/terrain1b.jpg"
    ]
  },
  2: {
    titre: "Terrain Agricole à Ndayane",
    prix: "32 000 €",
    surface: "1200 m²",
    adresse: "Ndayane, Sénégal",
    description: "Beau terrain agricole à Ndayane à proximité de la future zone logistique.",
    photos: [] // Aucune photo disponible
  },
};

// Fonction pour choisir une image générique au hasard
function getRandomGenericImage() {
  const genericImages = [
    'assets/images/terrains/terrain-generique-1.png',
    'assets/images/terrains/terrain-generique-2.png',
    'assets/images/terrains/terrain-generique-3.png',
  ];
  const randomIndex = Math.floor(Math.random() * genericImages.length);
  return genericImages[randomIndex];
}

// Récupérer l'ID depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const terrainId = urlParams.get('id');

// Sélectionner le terrain
const terrain = terrains[terrainId];

if (terrain) {
  // Injecter les données
  document.getElementById('terrain-title').textContent = terrain.titre;
  document.getElementById('terrain-price').textContent = terrain.prix;
  document.getElementById('terrain-surface').textContent = terrain.surface;
  document.getElementById('terrain-address').textContent = terrain.adresse;
  document.getElementById('terrain-description').textContent = terrain.description;

  // Gérer les photos
  const photoGallery = document.getElementById('terrain-photos');
  photoGallery.innerHTML = '';

  if (terrain.photos.length > 0) {
    terrain.photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo;
      img.alt = terrain.titre;
      photoGallery.appendChild(img);
    });
  } else {
    const img = document.createElement('img');
    img.src = getRandomGenericImage();
    img.alt = "Terrain disponible";
    photoGallery.appendChild(img);
  }

} else {
  // Terrain non trouvé
  document.getElementById('terrain-title').textContent = "Terrain non trouvé";
  document.getElementById('terrain-price').textContent = "-";
  document.getElementById('terrain-surface').textContent = "-";
  document.getElementById('terrain-address').textContent = "-";
  document.getElementById('terrain-description').textContent = "Ce terrain n'existe pas ou a été retiré.";
}
