document.addEventListener('DOMContentLoaded', () => {
    const lightboxLinks = document.querySelectorAll('.lightbox');
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.classList.add('lightbox-overlay');
    document.body.appendChild(lightboxOverlay);
  
    lightboxLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const img = document.createElement('img');
        img.src = link.href;
        lightboxOverlay.innerHTML = '';
        lightboxOverlay.appendChild(img);
        lightboxOverlay.classList.add('active');
      });
    });
  
    lightboxOverlay.addEventListener('click', () => {
      lightboxOverlay.classList.remove('active');
    });
  });
  