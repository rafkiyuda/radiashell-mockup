// Main JavaScript logic

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Optional: stop observing once animated
        }
      });
    }, observerOptions);
  
    // Initial fetch of elements to observe (minus the hero ones which are already visible)
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
    elementsToAnimate.forEach(el => observer.observe(el));
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 14, 23, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 14, 23, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
  });
