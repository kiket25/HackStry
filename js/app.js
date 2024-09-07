// Función para cargar los últimos posts
function loadLatestPosts() {
    fetch('blog.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const blogDoc = parser.parseFromString(data, 'text/html');

        // Seleccionar los últimos 3 artículos de blog.html
        const articles = blogDoc.querySelectorAll('section ul li');
        const postsContainer = document.getElementById('posts-container');
        const latestPosts = Array.from(articles).slice(0, 2); // Los 3 primeros

        // Crear y agregar cada post al index.html
        latestPosts.forEach(post => {
          const postClone = post.cloneNode(true); // Clonamos el post
          postsContainer.appendChild(postClone); // Lo agregamos al container
        });
      })
      .catch(error => console.log('Error cargando los posts:', error));
  }

  // Cargar los últimos posts al cargar la página
  window.onload = loadLatestPosts;