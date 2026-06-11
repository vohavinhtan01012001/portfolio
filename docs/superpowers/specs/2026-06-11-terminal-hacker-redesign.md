# Terminal Hacker Redesign — Portfolio Landing Page

**Date:** 2026-06-11  
**Status:** Approved  
**Style:** Bold & Expressive — Terminal/Hacker Aesthetic

---

## Goals

Redesign the portfolio landing page from a generic dark blue/purple theme to a bold "terminal hacker" aesthetic. Target: impress recruiters and clients while maintaining readability and professionalism.

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | `#020c08` | Page background (near-black, green tint) |
| Primary | `#00ff88` | Neon green — primary accent, CTAs, borders |
| Secondary | `#00d4ff` | Cyan — secondary accent, links |
| Text | `#e2e8f0` | Body text |
| Muted | `#4ade80` | Dim green — labels, captions |
| Card bg | `#0a1a0f` | Card backgrounds |
| Card border | `#1a3a22` | Default card borders |

### Typography
- Body/headings: Geist Sans (existing)
- Accent/terminal text: `font-mono` (Geist Mono)

### Animation Library
- Replace all CSS `useScrollAnimation` with **Framer Motion**
- Use `motion.div` with `viewport` prop for scroll-triggered animations
- Use spring/ease transitions for organic feel
- Stagger children with `variants` + `staggerChildren`

---

## Section Designs

### Navbar
- Logo: `> vinh.tan_` with blinking cursor (`|` blink loop via Framer)
- Nav links: monospace font, hover prepends `//` prefix with Framer layout animation
- Active section: neon green `#00ff88` underline
- Background: `rgba(2, 12, 8, 0.85)` blur — same blur pattern as current

### Hero (2-column desktop, stacked mobile)

**Left column:**
- Small label: `$ whoami` — monospace, neon green, Framer fade-in
- Name `Vinh Tân` — large (`text-6xl`/`text-7xl`), bold, gradient green→cyan
- Typing effect component: cycles through roles (`"Front-end Developer"` → `"React Specialist"` → loop) with cursor blink
- Subtitle: short description, muted color, `text-lg`
- CTA row: `[Get in Touch]` neon green filled + `[View GitHub]` outlined cyan

**Right column:**
- Avatar image (user provides photo at `public/avatar.jpg`)
- Square with rounded corners, 2px neon green glowing border
- CSS scanline overlay (subtle CRT effect via `::after` pseudo-element)
- Framer: slide-in from right + subtle `float` loop animation

**Background:**
- Dot grid pattern via CSS `background-image` radial-gradient
- 2 gradient orbs: green (`#00ff88/10`) top-left + cyan (`#00d4ff/10`) bottom-right

### About

Terminal window card:
- Header bar: 3 dots (red/yellow/green) + `~/about.md` title — monospace
- Body: each sentence prefixed with `>`, Framer stagger fade-in per line
- Card: `bg-[#0a1a0f]` border `#1a3a22`, rounded-lg

### Skills

- Section heading pattern kept (line + title) but colors updated to green
- Category headers: `// Frontend`, `// Mobile` etc. — `font-mono`, muted green
- Skill tags: styled as JSX-like code: `<React />`, `<TypeScript />`
  - `<` and `/>` in neon green, name in white
  - Hover: neon green border + subtle glow
  - `bg-[#0a1a0f]` border `#1a3a22`

### Projects

- Cards with top-left corner bracket: `┌─` in neon green (CSS `::before`)
- Status badge: `[LIVE]` cyan if `demo` exists, `[INTERNAL]` muted if not
- Company/period line: `// COMPANY — MM/YYYY` monospace, muted
- Tags: small, green-tinted (`text-[#4ade80]` `bg-[#0a1a0f]`)
- Hover: neon green border glow + `translateY(-4px)` lift

### Focus

- Replace Ant Design icons with number badges: `[01]`, `[02]`, etc. — monospace, neon green
- Left border accent: 2px solid `#00ff88` per card (replaces gradient)
- Hover: subtle `bg-[#00ff88]/5` tint

### Contact

Terminal prompt layout:
```
$ contact --vinh
> email:  vohavinhtan6@gmail.com  
> github: github.com/vohavinhtan01012001
```
- Framer stagger: each line types in sequentially
- Email CTA button: neon green, monospace font, `[→ Send Email]` label
- GitHub icon button: cyan hover

### Footer

```
// EOF — built with React + Next.js + Ant Design
```
Monospace, muted, centered.

---

## New Dependencies

| Package | Version | Purpose |
|---|---|---|
| `framer-motion` | latest | All scroll + entrance animations |

Remove: `useScrollAnimation` custom hook after migration complete.

---

## Avatar

User must provide photo at `public/avatar.jpg` (or `.png`).  
If absent: show placeholder with initials `VT` in neon green on dark bg.

---

## Files Changed

| File | Change |
|---|---|
| `app/globals.css` | Update CSS variables to new color palette, add dot-grid + scanline styles |
| `lib/theme.ts` | Update Ant Design token colors to match new palette |
| `components/layout/Navbar.tsx` | New logo style, `//` hover prefix, cursor blink |
| `components/layout/Footer.tsx` | `// EOF` style |
| `components/sections/HeroSection.tsx` | 2-col layout, avatar, typing effect, Framer |
| `components/sections/AboutSection.tsx` | Terminal window card, stagger lines |
| `components/sections/SkillsSection.tsx` | `<Tag />` code style, `// category` headers |
| `components/sections/ProjectsSection.tsx` | Corner brackets, `[LIVE]` badge, company line |
| `components/sections/FocusSection.tsx` | Number badges `[01]`, green left border |
| `components/sections/ContactSection.tsx` | Terminal prompt layout, stagger |

---

## Out of Scope

- No new pages
- No backend/API changes
- No routing changes
- No form (contact stays as mailto link)
