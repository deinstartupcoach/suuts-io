import { createIcons, Box, Cpu, Waves, Sparkles, Check, ArrowRight, ShieldCheck, Layers, Ruler, Smartphone, X, Menu } from 'lucide';
import { init3DScanner } from './scanner-3d.js';
import { initFitSimulator } from './fit-simulator.js';
import { translations } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  createIcons({
    icons: {
      Box,
      Cpu,
      Waves,
      Sparkles,
      Check,
      ArrowRight,
      ShieldCheck,
      Layers,
      Ruler,
      Smartphone,
      X,
      Menu,
    },
  });

  // 2. Initialize 3D Body Scanner
  const scannerCanvas = document.getElementById('bodyScannerCanvas');
  if (scannerCanvas) {
    init3DScanner(scannerCanvas);
  }

  // 3. Initialize Interactive Fit Simulator
  initFitSimulator();

  // 4. Header Scroll State
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 5. Mobile Navigation
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 6. Language Switcher (EN / DE)
  let currentLang = 'de'; // Default to DE for German EXIST context, easy toggle to EN
  const langBtns = document.querySelectorAll('.lang-btn');

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update button states
    langBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate all elements with data-i18n
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate placeholder attributes if any
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Re-trigger simulator calculation for translated strings
    const event = new Event('input', { bubbles: true });
    const heightSlider = document.getElementById('sim-height');
    if (heightSlider) heightSlider.dispatchEvent(event);

    // Re-render icons that might be dynamically inside translated elements
    createIcons({
      icons: {
        Box,
        Cpu,
        Waves,
        Sparkles,
        Check,
        ArrowRight,
        ShieldCheck,
        Layers,
        Ruler,
        Smartphone,
        X,
        Menu,
      },
    });
  }

  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Set initial language
  setLanguage(currentLang);

  // 7. Modals: Impressum & Privacy
  const impressumModal = document.getElementById('impressumModal');
  const privacyModal = document.getElementById('privacyModal');
  const openImpressumBtns = document.querySelectorAll('.open-impressum');
  const openPrivacyBtns = document.querySelectorAll('.open-privacy');
  const modalCloseBtns = document.querySelectorAll('.modal-close, .modal-overlay');

  openImpressumBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (impressumModal) impressumModal.classList.add('active');
    });
  });

  openPrivacyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (privacyModal) privacyModal.classList.add('active');
    });
  });

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target === btn || btn.classList.contains('modal-close')) {
        if (impressumModal) impressumModal.classList.remove('active');
        if (privacyModal) privacyModal.classList.remove('active');
      }
    });
  });

  // 8. Pilot Partner Form Submission
  const pilotForm = document.getElementById('pilotForm');
  const formSuccess = document.getElementById('formSuccess');

  if (pilotForm) {
    pilotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = pilotForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Processing...</span>';

      setTimeout(() => {
        pilotForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (formSuccess) {
          formSuccess.classList.add('active');
          setTimeout(() => {
            formSuccess.classList.remove('active');
          }, 8000);
        }
      }, 600);
    });
  }
});
