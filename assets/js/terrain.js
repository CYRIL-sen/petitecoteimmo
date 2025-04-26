let map;

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const terrainId = urlParams.get('id');

  fetch('admin/annonces.json')
    .then(response => response.json())
    .then(data => {
      const terrain = data.annonces[terrainId];

      document.getElementById('titreTerrain').textContent = terrain.titre;
      document.getElementById('localisationTerrain').innerHTML = `<strong>Localisation :</strong> ${terrain.localisation}`;
      document.getElementById('superficieTerrain').innerHTML = `<strong>Superficie :</strong> ${terrain.superficie} m²`;
      document.getElementById('prixTerrain').innerHTML = `<strong>Prix :</strong> ${terrain.prix} €`;

      // Stocke coordonnées latitude et longitude
      initMap(terrain.latitude, terrain.longitude);
    })
    .catch(error => {
      console.error('Erreur chargement terrain :', error);
    });
});

function initMap(lat = 14.745, lng = -17.475) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: lat, lng: lng },
    zoom: 14
  });

  new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map,
    title: "Localisation du terrain"
  });
}

