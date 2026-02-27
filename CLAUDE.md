# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Vinh Tân (Frontend Engineer) built with Next.js 16, React 19, TypeScript, Ant Design 5, and Tailwind CSS v4.

## Commands

```bash
pnpm dev      # Start development server at http://localhost:3000
pnpm build    # Production build
pnpm start    # Run production server
pnpm lint     # Run ESLint
```

## Architecture

```
app/                    # Next.js App Router
  layout.tsx            # Root layout with Antd ConfigProvider + theme
  page.tsx              # Home page assembling all sections
  globals.css           # Global styles + Antd dark theme overrides

components/
  layout/               # Layout components (MainLayout, Navbar, Footer)
  sections/             # Page sections (Hero, About, Skills, Projects, Focus, Contact)

lib/
  theme.ts              # Ant Design dark theme configuration
  data.ts               # Portfolio content (skills, projects, focus areas, nav items)
```

## Key Patterns

- **Styling**: Ant Design components for UI, Tailwind for spacing/layout only
- **Theme**: Dark mode default via `lib/theme.ts` ConfigProvider
- **Data**: All portfolio content centralized in `lib/data.ts`
- **Path Alias**: `@/*` maps to project root

## Customization

- Update `lib/data.ts` to change portfolio content (name, skills, projects, etc.)
- Update `lib/theme.ts` to modify Ant Design theme tokens
- Section components in `components/sections/` are self-contained and reusable
