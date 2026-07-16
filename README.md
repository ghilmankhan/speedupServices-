<div align="center">

<img width="1200" alt="Speedup Services Website" src=".github/assets/website-preview.png" />

# Speedup Services

The marketing website for Speedup Services — a bilingual (English/Arabic) facility management and manpower supply company site with an integrated quote-request contact system.

</div>

---

## Overview

This repository contains the public-facing website for Speedup Services, a business services provider operating in Saudi Arabia and Pakistan. The site presents the company's service catalogue (facility management, manpower supply, marketing, hard/soft services, etc.), client testimonials, and trusted-partner branding, and lets visitors submit a quote request that is emailed directly to the company via a small Express backend.

It is built as a static React front end paired with a lightweight Node/Express API for the contact form.

---

## Features

- 🌐 English / Arabic support with full RTL layout switching
- 📍 Automatic regional phone number detection (Saudi Arabia / Pakistan) based on browser locale and timezone
- 🧭 Interactive services showcase with tabbed categories and a media preview modal (image/video gallery)
- 💬 Auto-rotating client testimonials carousel with keyboard navigation
- 📝 Quote request form with client- and server-side validation, honeypot spam protection, and rate limiting
- 📧 Email delivery via Nodemailer (Gmail transport)
- 🔍 SEO metadata, Open Graph/Twitter cards, and JSON-LD `LocalBusiness` structured data
- ♿ Accessibility support: focus-visible states, `aria` labels/roles, `prefers-reduced-motion` handling
- 🖼️ Lazy-loaded images with async decoding
- ✨ Motion-based animations (Framer Motion) throughout

---

## Tech Stack

**Frontend**
- [React 19](https://react.dev/)
- [TypeScript 5.8](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (`motion/react`)
- [Lucide React](https://lucide.dev/) — icons

**Backend**
- [Express 4](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [Helmet](https://helmetjs.github.io/) — HTTP security headers
- [CORS](https://github.com/expressjs/cors)
- [tsx](https://github.com/privatenumber/tsx) — TypeScript execution for the API in development

---

## Project Structure

```
├── index.html                # HTML entry point, SEO/meta tags, JSON-LD
├── src/
│   ├── App.tsx                # Root component, section composition
│   ├── main.tsx                # React entry point
│   ├── index.css               # Tailwind theme, global styles, animations
│   ├── components/             # Page sections (Hero, About, Services, QuoteForm, ...)
│   │   └── services/            # Service catalogue, tabs, media modal
│   ├── hooks/
│   │   └── useRegionDetection.ts  # Locale/timezone-based phone number selection
│   └── i18n/                   # Language context + per-section EN/AR content
│       └── sections/
├── server/
│   ├── index.ts                 # Express app (helmet, CORS, health check)
│   └── routes/contact.ts        # Quote form endpoint (validation, rate limiting, email)
└── public/
    ├── images/
    └── videos/
```

---

## Getting Started

### Prerequisites

- Node.js

### Installation

```bash
npm install
```

### Development

Run the front end (Vite dev server on port 3000):

```bash
npm run dev
```

Run the contact form API (Express, with `tsx watch` for hot reload):

```bash
npm run dev:api
```

The Vite dev server proxies `/api` requests to the Express server, so run both together during local development.

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Other Scripts

| Script | Description |
|---|---|
| `npm run start:api` | Run the Express API without file watching (production mode) |
| `npm run lint` | Type-check the project with `tsc --noEmit` |
| `npm run clean` | Remove the `dist/` build output |

---

## Environment Variables

Configure these in a local `.env` file (see `.env.example`):

| Variable | Description |
|---|---|
| `EMAIL_USER` | Gmail account used as the sender for quote request emails |
| `EMAIL_PASS` | App password for the `EMAIL_USER` Gmail account |
| `CONTACT_RECEIVER` | Email address that receives submitted quote requests |
| `PORT` | Port the Express API listens on (defaults to `3001`) |
| `NODE_ENV` | `development` or `production` |
| `CORS_ORIGIN` | Comma-separated list of origins allowed to call the API |

---

## Deployment

The project has two deployable parts:

- **Frontend** — `npm run build` produces a static `dist/` bundle that can be served from any static host or CDN.
- **API** — `server/index.ts` is a standalone Express server (`npm run start:api`) that must be deployed separately (or alongside the frontend on a Node-capable host) and supplied with the environment variables above. In production, CORS falls back to `https://speedupservices.com` / `https://www.speedupservices.com` if `CORS_ORIGIN` is not set.

---

## Performance

- Images use `loading="lazy"` and `decoding="async"`
- Animations respect `prefers-reduced-motion` (durations collapse to near-zero for users who request reduced motion)
- SEO metadata, canonical URL, Open Graph/Twitter tags, and structured data (`LocalBusiness`) are set in `index.html` for crawlability

---

## License

This repository contains the proprietary source code for the Speedup Services website. No open-source license is granted.
