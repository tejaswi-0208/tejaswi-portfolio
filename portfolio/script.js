/* ══════════════════════════════════════════
   TEJASWI THAKUR PORTFOLIO — script.js
══════════════════════════════════════════ */

'use strict';

// ── Loading Screen ──────────────────────
const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loaderFill');

let progress = 0;
const loadInterval = setInterval(() => {
  progress += Math.random() * 18;
  if (progress >= 100) {
    progress = 100;
    clearInterval(loadInterval);
    loaderFill.style.width = '100%';
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      startAnimations();
    }, 400);
  }
  loaderFill.style.width = progress + '%';
}, 80);

document.body.style.overflow = 'hidden';


// ── Custom Cursor ────────────────────────
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0,  ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left  = mouseX + 'px';
  cursorDot.style.top   = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Hover effect on interactive elements
document.querySelectorAll('a, button, .gallery-card, .mockup-card, .service-card, .testi-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
});


// ── Scroll Progress ──────────────────────
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const scrollTop    = window.scrollY;
  const docHeight    = document.body.scrollHeight - window.innerHeight;
  const pct          = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = pct + '%';
}, { passive: true });


// ── Navbar Scroll Effect ─────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });


// ── Mobile Nav Toggle ────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  // Animate hamburger
  const spans = navToggle.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});


// ── Intersection Observer — Reveal ───────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

function initReveal() {
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
}


// ── Counter Animation ────────────────────
function animateCounter(el) {
  const target   = parseInt(el.dataset.count, 10);
  const duration = 2000;
  const step     = target / (duration / 16);
  let current    = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));


// ── Skill Bar Animation ──────────────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, i * 150);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) skillObserver.observe(skillsSection);


// ── Ripple Effect ────────────────────────
document.querySelectorAll('.ripple').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect   = this.getBoundingClientRect();
    const x      = e.clientX - rect.left;
    const y      = e.clientY - rect.top;
    const size   = Math.max(rect.width, rect.height) * 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x - size / 2}px;
      top: ${y - size / 2}px;
    `;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});


// ── Card Tilt Effect ─────────────────────
document.querySelectorAll('.service-card, .about-card, .testi-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect   = card.getBoundingClientRect();
    const x      = e.clientX - rect.left;
    const y      = e.clientY - rect.top;
    const centX  = rect.width  / 2;
    const centY  = rect.height / 2;
    const rotX   = ((y - centY) / centY) * -6;
    const rotY   = ((x - centX) / centX) *  6;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});


// ── Lightbox ─────────────────────────────
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { lightboxImg.src = ''; }, 300);
}

document.querySelectorAll('.gallery-card, .mockup-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    if (img) openLightbox(img.src, img.alt);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});


// ── Typing Animation ─────────────────────
function initTyping() {
  const titles = ['Graphic Designer', 'Logo Designer', 'Brand Identity Designer'];
  let  tIdx = 0, cIdx = 0, deleting = false;

  const el = document.querySelector('.hero-badge');
  if (!el) return;

  const originalText = el.textContent;

  function type() {
    const current = titles[tIdx];
    if (!deleting) {
      cIdx++;
      if (cIdx > current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      cIdx--;
      if (cIdx < 1) {
        deleting = false;
        tIdx = (tIdx + 1) % titles.length;
      }
    }
    setTimeout(type, deleting ? 60 : 90);
  }
  // Keep hero badge as is — too important for UX, skip typing there
  // Instead animate a subtitle typing if present
}


// ── Smooth Scroll ────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


// ── Contact Form ─────────────────────────
const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = contactForm.name.value.trim();
    const email   = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formNote.textContent = 'Please fill in all required fields.';
      formNote.style.color = '#ff6b6b';
      return;
    }

    // Build mailto link
    const subject  = encodeURIComponent(`Portfolio Enquiry from ${name}`);
    const body     = encodeURIComponent(
      `Hi Tejaswi,\n\nName: ${name}\nEmail: ${email}\nService: ${contactForm.service.value || 'Not specified'}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:tejaswi02086@gmail.com?subject=${subject}&body=${body}`;

    formNote.textContent = '✦ Opening your email client…';
    formNote.style.color = '#FF4D6D';
    contactForm.reset();
    setTimeout(() => { formNote.textContent = ''; }, 4000);
  });
}


// ── Mouse Glow Cursor Trail ──────────────
const trail = [];
const TRAIL_COUNT = 6;

for (let i = 0; i < TRAIL_COUNT; i++) {
  const dot = document.createElement('div');
  dot.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 9990;
    border-radius: 50%;
    background: var(--primary);
    width: ${4 - i * 0.5}px;
    height: ${4 - i * 0.5}px;
    opacity: ${0.3 - i * 0.04};
    transform: translate(-50%, -50%);
    transition: left ${0.05 + i * 0.04}s, top ${0.05 + i * 0.04}s;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(dot);
  trail.push(dot);
}

let trailX = 0, trailY = 0;
document.addEventListener('mousemove', (e) => {
  trailX = e.clientX;
  trailY = e.clientY;
});

function animateTrail() {
  trail.forEach((dot, i) => {
    dot.style.left = trailX + 'px';
    dot.style.top  = trailY + 'px';
  });
  requestAnimationFrame(animateTrail);
}
animateTrail();


// ── Start Animations after Load ──────────
function startAnimations() {
  initReveal();
  initTyping();
}

// ── Active Nav Link Highlight ─────────────
const sections    = document.querySelectorAll('section[id]');
const navLinkEls  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkEls.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--primary)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));


// ── Parallax Blobs ───────────────────────
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  const blobs = document.querySelectorAll('.blob');
  blobs.forEach((blob, i) => {
    const speed = 0.15 + i * 0.05;
    blob.style.transform = `translateY(${sy * speed}px)`;
  });
}, { passive: true });
