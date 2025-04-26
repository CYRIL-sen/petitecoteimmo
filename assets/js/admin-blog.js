// Script pour gérer les articles du blog dans l'admin

document.addEventListener('DOMContentLoaded', function () {
  const adminBlog = document.getElementById('adminBlog');
  const ajoutArticleForm = document.getElementById('ajoutArticleForm');

  if (adminBlog) {
    // Charger les articles existants
    fetch('../admin/blog.json')
      .then(response => response.json())
      .then(data => {
        afficherArticles(data.articles);
      })
      .catch(error => {
        console.error('Erreur chargement articles :', error);
      });
  }

  function afficherArticles(articles) {
    adminBlog.innerHTML = '';
    articles.forEach((article, index) => {
      const div = document.createElement('div');
      div.classList.add('admin-card');
      div.innerHTML = `
        <h3>${article.titre}</h3>
        <p>${article.extrait}</p>
        <img src="../${article.image}" alt="${article.titre}" style="width:100%; height:150px; object-fit:cover; border-radius:8px; margin-top:10px;">
        <button onclick="supprimerArticle(${index})" class="btn-secondary" style="margin-top:10px;">Supprimer</button>
      `;
      adminBlog.appendChild(div);
    });
  }

  if (ajoutArticleForm) {
    ajoutArticleForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nouvelArticle = {
        titre: document.getElementById('titreArticle').value,
        extrait: document.getElementById('extrait').value,
        image: document.getElementById('imageArticle').value
      };

      const div = document.createElement('div');
      div.classList.add('admin-card');
      div.innerHTML = `
        <h3>${nouvelArticle.titre}</h3>
        <p>${nouvelArticle.extrait}</p>
        <img src="../${nouvelArticle.image}" alt="${nouvelArticle.titre}" style="width:100%; height:150px; object-fit:cover; border-radius:8px; margin-top:10px;">
      `;
      adminBlog.appendChild(div);

      ajoutArticleForm.reset();
      alert('Article ajouté (simulation)');
    });
  }

  // Fonction de suppression simulée
  window.supprimerArticle = function(index) {
    alert('Suppression simulée pour l\'article #' + (index + 1));
    // En vrai, il faudrait re-générer l'affichage sans l'article supprimé
  };
});

