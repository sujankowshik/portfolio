# Sujan Kowshik Jilla — Software Engineer Portfolio

A dark-themed personal portfolio for **Sujan Kowshik Jilla** — Computer Science Engineering student at Anurag University. Focused on Full-Stack Web Development, Machine Learning, and FinTech integrations.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Designed for one-click deployment on **Vercel**.

## Stack

- React 18 / TypeScript
- Vite (build tool)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations + scroll effects)
- Lucide React (icons)
- Kanit font (Google Fonts, weights 300–900)

## Sections

1. **Hero** — name, tagline, stats, social links
2. **About** — bio, education, tech stack grid, academic achievements, certifications
3. **Services** — Full-Stack Web Dev, ML & AI, FinTech, Databases, DSA
4. **Projects** — sticky-stacking cards for Financial Dashboard, eCommerce Store, House Price Prediction
5. **Contact** — Email, WhatsApp, LinkedIn, GitHub
6. **Resume** — interactive modal with print-friendly A4 resume generation

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # serve /dist locally
```

## Deploy to Vercel

Push to GitHub → import the repo at [vercel.com/new](https://vercel.com/new) → click Deploy. No environment variables needed.

## Project structure

```
src/
├── App.tsx                    # composes all sections + ResumeModal
├── main.tsx                   # React entry
├── index.css                  # global styles + .hero-heading gradient
└── components/
    ├── HeroSection.tsx        # navbar, massive heading, social profiles, resume triggers
    ├── AboutSection.tsx       # bio, education, certifications, tech stack
    ├── ServicesSection.tsx    # white section, 5 numbered services
    ├── ProjectsSection.tsx    # sticky-stacking project cards
    ├── ContactSection.tsx     # 4 contact methods with icons
    ├── ResumeModal.tsx        # print-ready interactive resume modal
    │
    ├── ContactButton.tsx      # gradient pill CTA
    ├── LiveProjectButton.tsx  # ghost outline pill
    ├── FadeIn.tsx             # whileInView animation wrapper
    ├── Magnet.tsx             # mouse-following magnetic hover
    └── AnimatedText.tsx       # char-by-char scroll-driven reveal
```

## Featured projects

| Project | Built with |
|---|---|
| Financial Portfolio Dashboard | React.js, Node.js, Yahoo Finance API, Chart.js |
| eCommerce & Admin Dashboard | React.js, Node.js, Firebase Auth, JWT, Stripe |
| House Price Prediction | Flask, Python, HTML/CSS |

## Customisation

| Want to change | Open this file |
|---|---|
| Name, nav links, hero text | `src/components/HeroSection.tsx` |
| About paragraph, skills list | `src/components/AboutSection.tsx` |
| Services list | `src/components/ServicesSection.tsx` (`SERVICES` array) |
| Projects, screenshots, live URLs | `src/components/ProjectsSection.tsx` (`PROJECTS` array) |
| Contact methods | `src/components/ContactSection.tsx` (`CONTACT_METHODS` array) |
| Project screenshots | drop new images in `public/` and reference as `/filename.png` |
| Brand gradient, font, dark colour | `src/index.css` and `tailwind.config.js` |
| Page title, meta description | `index.html` |

## Credits

Personalized by **Sujan Kowshik Jilla** · [LinkedIn](https://www.linkedin.com/in/sujankowshikjilla/) · [GitHub](https://github.com/sujankowshik)
