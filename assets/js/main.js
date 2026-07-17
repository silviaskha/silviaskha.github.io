// =========================================================
// NAVIGATION
// =========================================================
const navToggle = document.getElementById('menu-toggle');
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => { if (navToggle) navToggle.checked = false; });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Shrink nav + active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 40);

  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// =========================================================
// PROJECT RENDERING
// =========================================================
const grid = document.getElementById('projectGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const emptyState = document.getElementById('projectEmpty');

function projectCardHTML(project) {
  const badge = project.category === 'data' ? 'Data / ML' : 'Web Dev';
  const stack = project.techStack.slice(0, 3).map(t => `<span>${t}</span>`).join('');
  return `
    <article class="project-card" data-category="${project.category}" data-id="${project.id}" tabindex="0">
      <div class="project-image-wrap">
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy"
             onerror="this.src='assets/images/placeholder.svg'">
        <span class="project-badge badge-${project.category}">${badge}</span>
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.shortDescription}</p>
        <div class="project-stack">${stack}</div>
        <div class="project-links">
          <button class="project-detail-btn" data-id="${project.id}">View details →</button>
        </div>
      </div>
    </article>`;
}

function renderProjects(filter = 'all') {
  const list = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);
  grid.innerHTML = list.map(projectCardHTML).join('');
  emptyState.style.display = list.length ? 'none' : 'block';
  attachCardEvents();
  observeElements(document.querySelectorAll('.project-card'));
}

function attachCardEvents() {
  document.querySelectorAll('.project-card').forEach(card => {
    const open = () => showProjectModal(card.getAttribute('data-id'));
    card.addEventListener('click', open);
    card.addEventListener('keypress', e => { if (e.key === 'Enter') open(); });
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

renderProjects('all');

// =========================================================
// MODAL
// =========================================================
const modal = document.getElementById('projectModal');
const modalClose = modal.querySelector('.modal-close');
const body = document.body;

function showProjectModal(projectId) {
  const project = allProjects.find(p => p.id === projectId);
  if (!project) return;

  modal.querySelector('.modal-image').src = project.image;
  modal.querySelector('.modal-image').onerror = function () { this.src = 'assets/images/placeholder.svg'; };
  modal.querySelector('.modal-badge').textContent = project.category === 'data' ? 'Data / ML Project' : 'Web Development Project';
  modal.querySelector('.modal-badge').className = `modal-badge badge-${project.category}`;
  modal.querySelector('.modal-title').textContent = project.title;
  modal.querySelector('.modal-description').textContent = project.fullDescription;
  modal.querySelector('.tech-stack').innerHTML = project.techStack.map(t => `<span>${t}</span>`).join('');
  modal.querySelector('.features').innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
  modal.querySelector('.role').textContent = project.role;
  modal.querySelector('.demo-link').href = project.demoLink;
  modal.querySelector('.github-link').href = project.githubLink;

  modal.classList.add('active');
  body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('active');
  body.classList.remove('modal-open');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

// =========================================================
// CONTACT FORM
// =========================================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = 'Thank you — your message has been noted. I will get back to you soon.';
    status.classList.add('visible');
    this.reset();
    setTimeout(() => status.classList.remove('visible'), 5000);
  });
}

// =========================================================
// SCROLL REVEAL
// =========================================================
function observeElements(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

window.addEventListener('load', () => {
  observeElements(document.querySelectorAll('.reveal, .timeline-item'));
});
