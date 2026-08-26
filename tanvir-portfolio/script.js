const $ = (s) => document.querySelector(s);


/* ================= SECURITY ================= */

const escapeHTML = (value = '') =>
  String(value).replace(
    /[&<>"']/g,
    c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[c])
  );


/* ================= EDUCATION ================= */

function renderEducation() {

  $('#education-list').innerHTML =
    portfolioContent.education
      .map(
        e => `
          <article class="edu-card">

            <div>

              <h3>
                ${escapeHTML(e.title)}
              </h3>

              <p>
                ${escapeHTML(e.institution)}
              </p>

            </div>

            <span class="status">
              ${escapeHTML(e.status)}
            </span>

          </article>
        `
      )
      .join('');
}


/* ================= SKILLS ================= */

function renderSkills() {

  $('#skills-grid').innerHTML =
    portfolioContent.skills
      .map(
        ([name, desc, icon]) => `
          <article class="skill-card">

            <div
              class="skill-icon"
              aria-hidden="true"
            >
              ${escapeHTML(icon)}
            </div>

            <h3>
              ${escapeHTML(name)}
            </h3>

            <p>
              ${escapeHTML(desc)}
            </p>

          </article>
        `
      )
      .join('');
}


/* ================= PROJECT MEDIA ================= */

function projectMedia(p) {

  if (p.video) {

    return `
      <video
        controls
        preload="metadata"
        poster="${escapeHTML(p.image || '')}"
      >

        <source
          src="${escapeHTML(p.video)}"
          type="video/mp4"
        >

        Your browser does not support video playback.

      </video>
    `;
  }


  if (p.image) {

    return `
      <img
        loading="lazy"
        src="${escapeHTML(p.image)}"
        alt="${escapeHTML(p.title)} project image"
      >
    `;
  }


  return `
    <span>
      Project media<br>
      add image or video
    </span>
  `;
}


/* ================= PROJECTS ================= */

function renderProjects(filter = 'All') {

  const categories = [
    'All',
    'Digital Marketing',
    'AI Video',
    'Video Editing',
    'Data Analytics',
    'Excel',
    'Academic'
  ];


  $('#project-filters').innerHTML =
    categories
      .map(
        c => `
          <button
            class="filter ${c === filter ? 'active' : ''}"
            data-filter="${escapeHTML(c)}"
          >
            ${escapeHTML(c)}
          </button>
        `
      )
      .join('');


  const visible =
    filter === 'All'
      ? projects
      : projects.filter(
          p => p.category === filter
        );


  $('#projects-grid').innerHTML =
    visible.length

      ? visible
          .map(
            p => `
              <article class="project-card">

                <div class="project-media">
                  ${projectMedia(p)}
                </div>

                <div class="project-body">

                  <h3>
                    ${escapeHTML(p.title)}
                  </h3>

                  <p>
                    ${escapeHTML(p.description)}
                  </p>


                  <div class="tags">

                    <span class="tag">
                      ${escapeHTML(p.category)}
                    </span>

                    ${
                      (p.tools || [])
                        .map(
                          t => `
                            <span class="tag">
                              ${escapeHTML(t)}
                            </span>
                          `
                        )
                        .join('')
                    }

                  </div>


                  ${
                    p.date
                      ? `
                        <p class="project-date">
                          ${escapeHTML(p.date)}
                        </p>
                      `
                      : ''
                  }


                  ${
                    p.link
                      ? `
                        <a
                          class="project-link"
                          href="${escapeHTML(p.link)}"
                          target="_blank"
                          rel="noopener"
                        >
                          View Project ↗
                        </a>
                      `
                      : ''
                  }

                </div>

              </article>
            `
          )
          .join('')

      : `
        <div class="empty">

          <strong>
            No real projects added yet.
          </strong>

          Add your first project in
          <code>data/projects.js</code>.

        </div>
      `;


  document
    .querySelectorAll('.filter')
    .forEach(
      btn =>
        btn.addEventListener(
          'click',
          () =>
            renderProjects(
              btn.dataset.filter
            )
        )
    );
}


/* ================= ASSIGNMENTS ================= */

function renderAssignments() {

  $('#assignments-grid').innerHTML =

    assignments.length

      ? assignments
          .map(
            a => `
              <article class="simple-card">

                <h3>
                  ${escapeHTML(a.title)}
                </h3>

                <p>
                  <strong>
                    ${escapeHTML(a.course || '')}
                  </strong>
                </p>

                <p>
                  ${escapeHTML(a.description || '')}
                </p>

                ${
                  a.pdf
                    ? `
                      <a
                        class="project-link"
                        href="${escapeHTML(a.pdf)}"
                        target="_blank"
                        rel="noopener"
                      >
                        View PDF ↗
                      </a>
                    `
                    : ''
                }

              </article>
            `
          )
          .join('')

      : `
        <div class="empty">

          <strong>
            No assignments added yet.
          </strong>

          Add real university work in
          <code>data/assignments.js</code>.

        </div>
      `;
}


/* ================= CERTIFICATES ================= */

function renderCertificates() {

  $('#certificates-grid').innerHTML =

    certificates.length

      ? certificates
          .map(
            c => `
              <article class="simple-card">

                ${
                  c.image
                    ? `
                      <img
                        loading="lazy"
                        src="${escapeHTML(c.image)}"
                        alt="${escapeHTML(c.title)} certificate"
                        style="
                          width:100%;
                          border-radius:12px;
                          margin-bottom:16px
                        "
                      >
                    `
                    : ''
                }

                <h3>
                  ${escapeHTML(c.title)}
                </h3>

                <p>
                  ${escapeHTML(c.issuer || '')}
                </p>

                <p>
                  ${escapeHTML(c.date || '')}
                </p>

                ${
                  c.verification
                    ? `
                      <a
                        class="project-link"
                        href="${escapeHTML(c.verification)}"
                        target="_blank"
                        rel="noopener"
                      >
                        Verify ↗
                      </a>
                    `
                    : ''
                }

              </article>
            `
          )
          .join('')

      : `
        <div class="empty">

          <strong>
            No certificates added yet.
          </strong>

          Add real certificates in
          <code>data/certificates.js</code>.

        </div>
      `;
}


/* ================= SCROLL REVEAL ================= */

const observer =
  new IntersectionObserver(
    entries =>
      entries.forEach(
        e =>
          e.isIntersecting &&
          e.target.classList.add('visible')
      ),
    {
      threshold: .12
    }
  );


document
  .querySelectorAll('.reveal')
  .forEach(
    el =>
      observer.observe(el)
  );


/* ================= MOBILE NAVIGATION ================= */

const menu = $('.menu-toggle');
const nav = $('.nav');


menu.addEventListener(
  'click',
  () => {

    const open =
      nav.classList.toggle('open');

    menu.setAttribute(
      'aria-expanded',
      open
    );

  }
);


nav
  .querySelectorAll('a')
  .forEach(
    a =>
      a.addEventListener(
        'click',
        () =>
          nav.classList.remove('open')
      )
  );


/* ================= ACTIVE NAVIGATION ================= */

const sections =
  [
    ...document.querySelectorAll(
      'main section[id]'
    )
  ];

const navLinks =
  [
    ...document.querySelectorAll(
      '.nav a'
    )
  ];


sections
  .forEach(
    s =>
      new IntersectionObserver(
        entries =>
          entries.forEach(
            entry => {

              if (entry.isIntersecting) {

                navLinks.forEach(
                  a =>
                    a.classList.toggle(
                      'active',
                      a.getAttribute('href') ===
                        '#' + entry.target.id
                    )
                );

              }

            }
          ),
        {
          rootMargin:
            '-35% 0px -55%'
        }
      ).observe(s)
  );


/* ================= INITIAL RENDER ================= */

renderEducation();

renderSkills();

renderProjects();

renderAssignments();

renderCertificates();

$('#year').textContent =
  new Date().getFullYear();
