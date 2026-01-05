import { TOKEN_CONTRACT, BASESCAN_TOKEN_URL, UNISWAP_BUY_URL, UNISWAP_POSITION_URL, CHAIN_ID } from './lib/kindx.js';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    const nextState = !expanded;
    navToggle.setAttribute('aria-expanded', String(nextState));
    navLinks.setAttribute('aria-expanded', String(nextState));
  });
}

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navLinks) {
        navLinks.setAttribute('aria-expanded', 'false');
      }
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.textContent = 'Message received';
      setTimeout(() => {
        submitButton.textContent = 'Send message';
      }, 2000);
    }
  });
}

const fillTextContent = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
};

fillTextContent('[data-token-contract]', TOKEN_CONTRACT);
fillTextContent('[data-chain-id]', CHAIN_ID);

const updateHref = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.setAttribute('href', value);
  });
};

updateHref('[data-link="basescan-token"]', BASESCAN_TOKEN_URL);
updateHref('[data-link="uniswap-buy"]', UNISWAP_BUY_URL);
updateHref('[data-link="uniswap-position"]', UNISWAP_POSITION_URL);

const showToast = (message) => {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 200);
  }, 2000);
};

const copyButtons = document.querySelectorAll('[data-copy-target]');
copyButtons.forEach((button) => {
  const targetSelector = button.getAttribute('data-copy-target');
  const target = targetSelector ? document.querySelector(targetSelector) : null;
  button.addEventListener('click', async () => {
    if (!target) return;
    const value = target.textContent?.trim();
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      showToast('Copied');
    } catch (error) {
      console.error('Copy failed', error);
    }
  });
});

export { TOKEN_CONTRACT, BASESCAN_TOKEN_URL, UNISWAP_BUY_URL, UNISWAP_POSITION_URL, CHAIN_ID };
