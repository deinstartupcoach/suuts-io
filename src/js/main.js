import { 
  createIcons, 
  Waves, 
  Heart, 
  Sparkles, 
  Cpu, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Ruler, 
  Smartphone, 
  X, 
  Menu,
  Award,
  Activity,
  Compass,
  Feather,
  Building2,
  UserCheck,
  Mail,
  Send
} from 'lucide';
import { translations } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  function renderIcons() {
    createIcons({
      icons: {
        Waves,
        Heart,
        Sparkles,
        Cpu,
        Check,
        ArrowRight,
        ShieldCheck,
        Layers,
        Ruler,
        Smartphone,
        X,
        Menu,
        Award,
        Activity,
        Compass,
        Feather,
        Building2,
        UserCheck,
        Mail,
        Send
      },
    });
  }

  renderIcons();

  // 2. Header Scroll State
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 4. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 5. Language Switcher (DE / EN)
  let currentLang = 'de';
  const langBtns = document.querySelectorAll('.lang-btn');

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update button active state
    langBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate DOM elements
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Re-trigger simulator update for localized text
    const heightSlider = document.getElementById('sim-height');
    if (heightSlider) {
      heightSlider.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // Re-render icons if any were injected in dynamic strings
    renderIcons();
  }

  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Set initial language
  setLanguage(currentLang);

  // 6. Modals (Impressum & Datenschutz)
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

  // Escape key to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (impressumModal) impressumModal.classList.remove('active');
      if (privacyModal) privacyModal.classList.remove('active');
    }
  });

  // 7. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Verarbeite...</span>';

      setTimeout(() => {
        contactForm.reset();
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
