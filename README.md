# Sawah Cyber Security CTF 2025 — Landing Page (React rebuild) 🚩

A rebuild of the Sawah Cyber Security CTF 2025 landing page, this time on a proper component-based stack instead of one long HTML file.

## Why a second version? 🤔

The [original page](https://github.com/GianneAngely/ctf-landing-page) was a single `index.html` with all the markup, styles, and scripts in one place. It worked, but editing one section meant scrolling through thousands of lines. This version splits everything into components so each section can be changed on its own.

## What is inside 🧩

Each part of the page is its own component:

- `HeroSection` with the event pitch
- `CountdownTimer` counting down to the competition
- `AboutSection`, `CategoriesSection`, `EventDetailsSection`
- `PartnersSection` for sponsors and academic partners
- `FAQSection`
- `Navigation` and `Footer`
- `MatrixBackground` for the falling-code effect behind the hero

## Built with 🛠️

- **Vite** for the dev server and build
- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **shadcn/ui** for the base components
- **AOS** for scroll-triggered animations

## Running it locally 💻

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually `http://localhost:5173`.

To produce a production build:

```bash
npm run build
```

The output lands in `dist/`.

## Docker 🐳

The repo ships a `Dockerfile` and an `nginx.conf`, so it can also be built into a container that serves the static bundle through nginx:

```bash
docker build -t scs-ctf-landing .
docker run -p 8080:80 scs-ctf-landing
```

Then visit `http://localhost:8080`.
