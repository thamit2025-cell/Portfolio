[README.md](https://github.com/user-attachments/files/31475453/README.md)
# B.M. Tanvir Hasan Amit — Personal Portfolio

A premium, responsive personal portfolio website for **B.M. Tanvir Hasan Amit**.

## Features

- Premium dark modern responsive design
- Desktop, tablet and mobile support
- Smooth scrolling and mobile navigation
- Replaceable profile photo
- About, Education, Skills, Projects, Assignments, Certificates and Contact sections
- Project category filtering
- Image and MP4 video support
- Centralized content/data files
- Basic SEO and Open Graph metadata
- WhatsApp and two clickable email contacts
- No GitHub required
- No backend or database required
- Designed for simple Netlify deployment

## Personal Information

**Name:** B.M. Tanvir Hasan Amit

**University:** Jashore University of Science and Technology (JUST), Bangladesh

**Education:** BBA — Currently Studying

**Additional Education:** CMA — Cost and Management Accounting — Ongoing

**WhatsApp:** 01725435358

**Email 1:** t.h.amit2025@gmail.com

**Email 2:** thbrands.marketing@gmail.com

## Project Structure

```text
tanvir-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
├── HOW-TO-UPDATE.md
├── data/
│   ├── content.js
│   ├── projects.js
│   ├── assignments.js
│   └── certificates.js
└── assets/
    ├── images/
    │   ├── profile/
    │   │   └── profile.jpg
    │   └── projects/
    ├── videos/
    ├── certificates/
    └── assignments/
```

## Where to Put Files

### Profile photo

```text
assets/images/profile/profile.jpg
```

Replace the existing `profile.jpg` with your new profile photo.

### Project images

```text
assets/images/projects/
```

### Project videos

```text
assets/videos/
```

MP4 is recommended.

### Certificates

```text
assets/certificates/
```

### Academic assignments

```text
assets/assignments/
```

## Add a New Project

Open:

```text
data/projects.js
```

Add a real project using this structure:

```javascript
{
  title: "My New Project",
  category: "AI Video",
  description: "A short factual description of my real project.",
  image: "assets/images/projects/my-project.jpg",
  video: "assets/videos/my-project.mp4",
  tools: ["AI Tool", "Video Editing"],
  date: "August 2026",
  link: ""
}
```

Available categories:

```text
Digital Marketing
AI Video
Video Editing
Data Analytics
Excel
Academic
```

## Add a New Video

1. Put the video in `assets/videos/`.
2. Put the thumbnail/project image in `assets/images/projects/`.
3. Add the project information to `data/projects.js`.
4. Set the video path, for example:

```javascript
video: "assets/videos/my-video.mp4"
```

## Add an Assignment

Open:

```text
data/assignments.js
```

Example:

```javascript
{
  title: "Assignment Title",
  course: "Course Name",
  description: "Short description.",
  image: "assets/assignments/assignment.jpg",
  pdf: "assets/assignments/assignment.pdf",
  date: "August 2026"
}
```

Only add real assignment information.

## Add a Certificate

Open:

```text
data/certificates.js
```

Example:

```javascript
{
  title: "Certificate Title",
  issuer: "Issuing Organization",
  date: "August 2026",
  image: "assets/certificates/certificate.jpg",
  verification: "https://example.com"
}
```

Only add genuine certificates and verification links.

## Change Skills and Education

Open:

```text
data/content.js
```

Skills and education are centralized there so the visual design does not need to be changed.

## Change Email

The current email addresses are:

```text
t.h.amit2025@gmail.com
thbrands.marketing@gmail.com
```

If they ever change, update both the displayed text and the corresponding `mailto:` links in `index.html`.

## Change WhatsApp

Current number:

```text
01725435358
```

WhatsApp URL:

```text
https://wa.me/8801725435358
```

If the number changes, update both.

## Main Files

### `index.html`
Website structure and sections.

### `styles.css`
Complete visual design and responsive styling.

### `script.js`
Mobile menu, navigation, project filtering, dynamic rendering, scroll effects and other interactions.

### `data/content.js`
Education and skills.

### `data/projects.js`
Portfolio projects.

### `data/assignments.js`
Academic assignments.

### `data/certificates.js`
Certificates.

## Netlify — No GitHub Required

This is a static website and does not require GitHub, a database, or a backend.

Basic workflow:

```text
Edit website
    ↓
Add images/videos/projects
    ↓
Save changes
    ↓
Use the complete website folder
    ↓
Upload/deploy to your existing Netlify site
    ↓
Updated website goes live
```

There is no required build command for this static version.

When updating an existing Netlify website, make your changes and deploy the updated complete website folder to the existing site.

## Performance

The website uses:

- Responsive layouts
- Lazy loading for images
- Lightweight static files
- Native browser video playback
- No unnecessary framework or backend
- Accessibility considerations

Avoid unnecessarily large image and video files.

## SEO

The website includes:

- Page title
- Meta description
- Open Graph title
- Open Graph description
- Open Graph image

Page title:

```text
B.M. Tanvir Hasan Amit | Digital Marketer, Data Analyst & AI Video Creator
```

## Content Rule

Never invent:

- Clients
- Companies
- Income
- Awards
- Certificates
- Testimonials
- Reviews
- Statistics
- Project results
- Work experience
- Social media accounts
- Achievements

Only add real information.

## Using Claude

You can give the website folder to Claude when you want help editing it.

Useful instructions:

> Add this new project to data/projects.js without changing the existing design.

> Replace my profile photo with the new image I provided and keep everything else unchanged.

> Add this certificate to data/certificates.js and do not invent any information.

## Beginner Tip

For most updates, you only need to work with:

```text
data/content.js
data/projects.js
data/assignments.js
data/certificates.js
assets/images/
assets/videos/
assets/certificates/
assets/assignments/
```

The visual design files normally do not need to be changed.

---

© B.M. Tanvir Hasan Amit
