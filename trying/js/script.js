document.addEventListener('DOMContentLoaded', () => {
  
  // --- 1. SIDEBAR TOGGLE ---
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
    
    // Close sidebar when clicking main content on mobile
    mainContent.addEventListener('click', () => {
      if (window.innerWidth < 1024 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
      }
    });
  }

  // --- 2. LIGHTBOX ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-lightbox');
  
  // Works for both home grid and gallery page grid
  document.querySelectorAll('.gallery-home-grid img, .gallery-page-grid img').forEach(img => {
    img.addEventListener('click', () => {
      if(lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if(closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  if(lightbox) {
    lightbox.addEventListener('click', (e) => {
      if(e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // --- 3. SCROLL REVEAL ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .hero-text, .section h2, .service-row, .gallery-home-grid, .gallery-page-grid').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});