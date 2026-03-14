// Main JavaScript logic for RadiaShell Mockup
import './style.css';

// Intersection Observer for Scroll Animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
};

// Navbar Scroll Effect
const handleNavbar = () => {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 14, 23, 0.95)';
      navbar.style.padding = '0.8rem 0';
    } else {
      navbar.style.background = 'rgba(10, 14, 23, 0.8)';
      navbar.style.padding = '1rem 0';
    }
  });
};

// Earnings Calculator
const initCalculator = () => {
  const input = document.getElementById('shell-weight');
  const result = document.getElementById('earnings-total');
  const PRICE_PER_KG = 1500;

  input?.addEventListener('input', (e) => {
    const weight = parseFloat(e.target.value) || 0;
    const earnings = weight * PRICE_PER_KG;
    result.textContent = `Rp ${earnings.toLocaleString('id-ID')}`;
  });
};

// IoT Simulation (Live data animation)
const initIoT = () => {
  const tempEl = document.getElementById('iot-temp');
  const powerEl = document.getElementById('iot-power');
  const flowEl = document.getElementById('iot-flow');

  setInterval(() => {
    if (tempEl) {
      const currentTemp = parseFloat(tempEl.textContent);
      const newTemp = currentTemp + (Math.random() * 0.4 - 0.2);
      tempEl.textContent = newTemp.toFixed(1);
    }
    if (powerEl) {
      const currentPower = parseFloat(powerEl.textContent);
      const newPower = currentPower + (Math.random() * 0.1 - 0.05);
      powerEl.textContent = newPower.toFixed(2);
    }
    if (flowEl) {
      const currentFlow = parseInt(flowEl.textContent);
      const newFlow = currentFlow + (Math.round(Math.random() * 2 - 1));
      flowEl.textContent = Math.max(0, newFlow);
    }
  }, 2000);
};

// Modal Logic for "Request Quote"
const initModal = () => {
  const modal = document.getElementById('quote-modal');
  const closeBtn = document.getElementById('close-modal');
  const productNameEl = document.getElementById('modal-product-name');
  
  document.querySelectorAll('.open-quote').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product');
      if (productNameEl) productNameEl.textContent = product;
      if (modal) modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn?.addEventListener('click', () => {
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  handleNavbar();
  initCalculator();
  initIoT();
  initModal();
});
