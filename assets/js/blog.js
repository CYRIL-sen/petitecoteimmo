// Script pour charger les articles du blog automatiquement

document.addEventListener('DOMContentLoaded', function () {
  const blogContainer = document.querySelector('.blog-articles');

  // On va charger les articles depuis admin/blog.json
  fetch('admin/blog.json')
    .then(response => response.json())
    .then(data => {
      blogContainer.innerHTML = ''; // On vide ce qu'il y avait au départ

      data.articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('blog-article');

        articleElement.innerHTML = `
          <img src="${article.image}" alt="${article.titre}">
          <h2>${article.titre}</h2>
          <p>${article.extrait}</p>
          <a href="#">Lire l'article</a>
        `;

        blogContainer.appendChild(articleElement);
      });
    })
    .catch(error => {
      console.error('Erreur lors du chargement des articles :', error);
    });
});

