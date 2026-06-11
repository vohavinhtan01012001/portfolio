# Terminal Hacker Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio landing page from blue/purple dark theme to a bold terminal/hacker aesthetic with neon green + cyan palette and Framer Motion animations.

**Architecture:** Replace all `useScrollAnimation` hook usage with Framer Motion `whileInView` + `viewport`. Add a `TypingEffect` component. Restyle all sections in-place (no routing or data changes). New color palette defined in CSS variables and Ant Design theme tokens.

**Tech Stack:** Next.js 16, React 19, TypeScript, Ant Design 5, Tailwind CSS v4, Framer Motion (new)

> **Note on TDD:** This is a visual redesign — no unit tests. Verification step for each task is: run `pnpm dev`, open http://localhost:3000, visually confirm the change.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `package.json` | Modify | Add `framer-motion` |
| `app/globals.css` | Modify | New color variables, dot-grid, scanline, blink, hacker gradient |
| `lib/theme.ts` | Modify | Ant Design token colors → green/cyan palette |
| `components/ui/TypingEffect.tsx` | Create | Reusable typewriter component |
| `components/layout/Navbar.tsx` | Modify | `> vinh.tan_` logo, `//` hover prefix |
| `components/layout/Footer.tsx` | Modify | `// EOF` terminal style |
| `components/sections/HeroSection.tsx` | Modify | 2-col layout, avatar, TypingEffect, Framer |
| `components/sections/AboutSection.tsx` | Modify | Terminal window card, stagger lines |
| `components/sections/SkillsSection.tsx` | Modify | `<Tag />` code style, `// category` headers |
| `components/sections/ProjectsSection.tsx` | Modify | Corner brackets, [LIVE] badge, company line |
| `components/sections/FocusSection.tsx` | Modify | `[01]` number badges, green left border |
| `components/sections/ContactSection.tsx` | Modify | Terminal prompt layout |
| `hooks/useScrollAnimation.ts` | Delete | Replaced by Framer Motion |

---

## Task 1: Install Framer Motion + Update Global CSS

**Files:**
- Modify: `package.json`
- Modify: `app/globals.css`

- [ ] **Step 1: Install framer-motion**

```bash
cd /mnt/c/workspace/freelance/portfolio
pnpm add framer-motion
```

Expected: `framer-motion` appears in `package.json` dependencies.

- [ ] **Step 2: Replace CSS variables and add new utility classes in `app/globals.css`**

Replace the `:root` block and add new classes. Full new `globals.css`:

```css
@import "tailwindcss";

:root {
  --background: #020c08;
  --foreground: #e2e8f0;
  --primary: #00ff88;
  --primary-glow: rgba(0, 255, 136, 0.15);
  --secondary: #00d4ff;
  --card-bg: #0a1a0f;
  --card-border: #1a3a22;
  --text-muted: #4ade80;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), Arial, Helvetica, sans-serif;
}

/* Dot grid background */
.dot-grid {
  background-image: radial-gradient(circle, #1a3a22 1px, transparent 1px);
  background-size: 28px 28px;
}

/* CRT scanline overlay */
.scanline {
  position: relative;
}

.scanline::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.08) 2px,
    rgba(0, 0, 0, 0.08) 4px
  );
  pointer-events: none;
  border-radius: inherit;
  z-index: 1;
}

/* Cursor blink */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

/* Hacker gradient text */
.gradient-text-hacker {
  background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Section divider */
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--card-border), transparent);
}

/* Antd dark theme overrides */
.ant-layout {
  background: transparent !important;
}

.ant-layout-header {
  background: rgba(2, 12, 8, 0.85) !important;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--card-border) !important;
}

.ant-layout-content {
  background: transparent !important;
}

.ant-layout-footer {
  background: #020c08 !important;
}
```

- [ ] **Step 3: Verify dev server starts without errors**

```bash
pnpm dev
```

Expected: server starts at http://localhost:3000, no CSS errors in terminal.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css package.json pnpm-lock.yaml
git commit -m "feat: install framer-motion, update color palette to terminal hacker theme"
```

---

## Task 2: Update Ant Design Theme Tokens

**Files:**
- Modify: `lib/theme.ts`

- [ ] **Step 1: Replace theme tokens**

```typescript
import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#00ff88",
    colorBgContainer: "#0a1a0f",
    colorBgElevated: "#0f1f14",
    colorBgLayout: "#020c08",
    colorText: "#e2e8f0",
    colorTextSecondary: "#4ade80",
    colorBorder: "#1a3a22",
    colorBorderSecondary: "#1a3a22",
    borderRadius: 12,
    fontFamily:
      'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Layout: {
      headerBg: "transparent",
      bodyBg: "transparent",
      footerBg: "#020c08",
    },
    Card: {
      colorBgContainer: "#0a1a0f",
      colorBorderSecondary: "#1a3a22",
    },
    Button: {
      colorPrimary: "#00ff88",
      algorithm: true,
      borderRadius: 8,
    },
    Tag: {
      colorBgContainer: "#0a1a0f",
      colorBorder: "#1a3a22",
    },
  },
};
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000. Ant Design components (buttons, cards) should have green tint.

- [ ] **Step 3: Commit**

```bash
git add lib/theme.ts
git commit -m "feat: update Ant Design theme tokens to neon green/cyan palette"
```

---

## Task 3: Create TypingEffect Component

**Files:**
- Create: `components/ui/TypingEffect.tsx`

- [ ] **Step 1: Create `components/ui/` directory and component**

```tsx
"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function TypingEffect({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  className,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timer);
    }

    const currentText = texts[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink text-[#00ff88]">|</span>
    </span>
  );
}
```

- [ ] **Step 2: Verify component file exists**

```bash
ls /mnt/c/workspace/freelance/portfolio/components/ui/
```

Expected: `TypingEffect.tsx` listed.

- [ ] **Step 3: Commit**

```bash
git add components/ui/TypingEffect.tsx
git commit -m "feat: add TypingEffect component for terminal typewriter animation"
```

---

## Task 4: Update Navbar

**Files:**
- Modify: `components/layout/Navbar.tsx`

- [ ] **Step 1: Replace Navbar with terminal hacker style**

```tsx
"use client";

import { Layout, Button, Drawer } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/data";

const { Header } = Layout;

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 max-md:!px-4 h-16">
      <a href="#" className="no-underline hover:opacity-80 transition-opacity">
        <span className="font-mono text-lg font-bold">
          <span className="text-[#00ff88]">&gt; </span>
          <span className="text-white">{siteConfig.name.toLowerCase().replace(" ", ".")}</span>
          <span className="text-[#00ff88] animate-blink">_</span>
        </span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[#94a3b8] hover:text-white transition-colors no-underline text-sm font-mono relative group"
          >
            <span className="text-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity">
              //
            </span>{" "}
            {item.label}
          </a>
        ))}
      </nav>

      <div className="max-md:hidden" />

      {/* Mobile Menu Button */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setDrawerOpen(true)}
        className="md:!hidden !text-[#00ff88]"
      />

      {/* Mobile Drawer */}
      <Drawer
        title={
          <span className="font-mono text-base font-bold">
            <span className="text-[#00ff88]">&gt; </span>
            <span className="text-white">{siteConfig.name.toLowerCase().replace(" ", ".")}</span>
            <span className="text-[#00ff88] animate-blink">_</span>
          </span>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={<CloseOutlined className="!text-[#00ff88]" />}
        styles={{
          body: { padding: 0 },
          header: { background: "#0a1a0f", borderBottom: "1px solid #1a3a22" },
          content: { background: "#0a1a0f" },
        }}
      >
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="px-6 py-4 text-[#94a3b8] hover:text-white hover:bg-[#1a3a22] transition-colors no-underline border-b border-[#1a3a22] font-mono"
            >
              <span className="text-[#00ff88]">// </span>
              {item.label}
            </a>
          ))}
        </nav>
      </Drawer>
    </Header>
  );
}
```

- [ ] **Step 2: Verify in browser**

Navbar should show `> vinh.tan_` with blinking cursor. Nav links show `// Label` on hover.

- [ ] **Step 3: Commit**

```bash
git add components/layout/Navbar.tsx
git commit -m "feat: update Navbar to terminal hacker style with blinking cursor and // hover prefix"
```

---

## Task 5: Update Footer

**Files:**
- Modify: `components/layout/Footer.tsx`

- [ ] **Step 1: Replace Footer with terminal EOF style**

```tsx
import { Layout } from "antd";
import { siteConfig } from "@/lib/data";

const { Footer: AntFooter } = Layout;

export function Footer() {
  return (
    <AntFooter className="!bg-[#020c08] border-t border-[#1a3a22]">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center">
        <p className="font-mono text-sm text-[#4ade80] m-0">
          <span className="text-[#1a3a22]">{"// "}</span>
          EOF — built with React + Next.js + Ant Design by{" "}
          <span className="text-[#00ff88]">{siteConfig.name}</span>
        </p>
      </div>
    </AntFooter>
  );
}
```

- [ ] **Step 2: Verify in browser**

Footer shows `// EOF — built with React + Next.js + Ant Design by Vinh Tân`.

- [ ] **Step 3: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: update Footer to terminal EOF style"
```

---

## Task 6: Update HeroSection

**Files:**
- Modify: `components/sections/HeroSection.tsx`

> Avatar image: place a photo at `public/avatar.jpg`. If absent, initials `VT` show as placeholder.

- [ ] **Step 1: Replace HeroSection with 2-column layout + avatar + Framer animations**

```tsx
"use client";

import { Button } from "antd";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { TypingEffect } from "@/components/ui/TypingEffect";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 relative overflow-hidden dot-grid">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#00ff88] font-mono text-sm mb-4 tracking-widest"
            >
              $ whoami
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="gradient-text-hacker">{siteConfig.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-mono mb-6 h-9"
            >
              <TypingEffect
                texts={["Front-end Developer", "React Specialist", "Next.js Engineer"]}
                className="text-[#00d4ff]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#94a3b8] text-lg mb-10 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Building scalable web and mobile applications with modern React ecosystem
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
            >
              <Button
                type="primary"
                size="large"
                icon={<MailOutlined />}
                href="#contact"
                className="min-w-[180px] !h-12 !text-base !font-mono !bg-[#00ff88] !border-[#00ff88] !text-[#020c08] hover:!bg-[#00cc70] hover:!border-[#00cc70]"
              >
                Get in Touch
              </Button>
              <Button
                size="large"
                icon={<GithubOutlined />}
                href={siteConfig.github}
                target="_blank"
                className="min-w-[180px] !h-12 !text-base !font-mono !bg-transparent !border-[#00d4ff] !text-[#00d4ff] hover:!bg-[#00d4ff]/10"
              >
                View GitHub
              </Button>
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 md:w-72 md:h-72"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#00ff88] shadow-[0_0_30px_rgba(0,255,136,0.25)] scanline">
                {/* Fallback initials — shown when image absent */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a1a0f] text-[#00ff88] text-6xl font-mono font-bold z-0">
                  VT
                </div>
                {/* Avatar image — overlays fallback when loaded */}
                <img
                  src="/avatar.jpg"
                  alt={siteConfig.name}
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#1a3a22] rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#00ff88] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Hero shows: `$ whoami` → big green/cyan gradient name → typing role → 2 CTA buttons → avatar right side. Floating animation on avatar visible. Scroll indicator at bottom.

- [ ] **Step 3: Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "feat: redesign HeroSection with 2-col layout, avatar, typing effect, Framer Motion"
```

---

## Task 7: Update AboutSection

**Files:**
- Modify: `components/sections/AboutSection.tsx`

- [ ] **Step 1: Replace AboutSection with terminal window card**

```tsx
"use client";

import { motion } from "framer-motion";
import { aboutText } from "@/lib/data";

export function AboutSection() {
  const sentences = aboutText
    .split(/(?<=\.)\s+/)
    .filter(Boolean);

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">About</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0a1a0f] border border-[#1a3a22] rounded-lg overflow-hidden"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1f14] border-b border-[#1a3a22]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-[#4ade80] font-mono text-xs">~/about.md</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm space-y-3">
            {sentences.map((sentence, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="text-[#94a3b8] leading-relaxed m-0"
              >
                <span className="text-[#00ff88]">&gt; </span>
                {sentence}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

About section shows a terminal window with macOS-style dots + `~/about.md` title. Text lines prefixed with `>`.

- [ ] **Step 3: Commit**

```bash
git add components/sections/AboutSection.tsx
git commit -m "feat: redesign AboutSection as terminal window card with stagger animation"
```

---

## Task 8: Update SkillsSection

**Files:**
- Modify: `components/sections/SkillsSection.tsx`

- [ ] **Step 1: Replace SkillsSection with code-style tags and `// category` headers**

```tsx
"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#020c08] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00ff88]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">Skills</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <span className="text-[#4ade80] text-sm font-mono min-w-[120px] pt-2">
                // {category}
              </span>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#0a1a0f] border border-[#1a3a22] text-[#e2e8f0] px-4 py-2 text-sm rounded-lg font-mono hover:border-[#00ff88] hover:shadow-[0_0_8px_rgba(0,255,136,0.2)] transition-all cursor-default"
                  >
                    <span className="text-[#00ff88]">&lt;</span>
                    {skill}
                    <span className="text-[#00ff88]"> /&gt;</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Skills show as `<React />`, `<TypeScript />` etc. with neon green brackets. Category headers are `// Frontend` etc.

- [ ] **Step 3: Commit**

```bash
git add components/sections/SkillsSection.tsx
git commit -m "feat: redesign SkillsSection with JSX-style code tags and // category headers"
```

---

## Task 9: Update ProjectsSection

**Files:**
- Modify: `components/sections/ProjectsSection.tsx`

- [ ] **Step 1: Replace ProjectsSection with corner brackets, [LIVE] badge, company line**

```tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-[#0a1a0f] border border-[#1a3a22] rounded-xl p-7 relative hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.12)] hover:-translate-y-1 transition-all flex flex-col"
            >
              {/* Corner bracket decoration */}
              <span className="absolute top-3 left-3 text-[#00ff88] font-mono text-xs opacity-50 select-none">
                ┌─
              </span>

              <div className="flex items-start justify-between mb-2 mt-1">
                <h3 className="text-white text-xl font-semibold group-hover:text-[#00ff88] transition-colors pr-3 m-0">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.demo ? (
                    <span className="font-mono text-xs text-[#00d4ff] border border-[#00d4ff]/40 px-2 py-0.5 rounded">
                      [LIVE]
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-[#4ade80] border border-[#1a3a22] px-2 py-0.5 rounded">
                      [INTERNAL]
                    </span>
                  )}
                  {project.demo && (
                    <Button
                      type="text"
                      size="small"
                      icon={<LinkOutlined />}
                      href={project.demo}
                      target="_blank"
                      className="!text-[#94a3b8] hover:!text-[#00ff88] !w-8 !h-8 !p-0 flex items-center justify-center"
                    />
                  )}
                </div>
              </div>

              <p className="font-mono text-[#4ade80] text-xs mb-3">
                // {project.company} — {project.period}
              </p>

              <p className="text-[#94a3b8] text-base leading-relaxed flex-grow mb-5 mt-0">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#020c08] border border-[#1a3a22] text-[#4ade80] text-xs px-3 py-1 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Project cards show `┌─` top-left, `[LIVE]` or `[INTERNAL]` badge, `// COMPANY — period` line, tags in green monospace.

- [ ] **Step 3: Commit**

```bash
git add components/sections/ProjectsSection.tsx
git commit -m "feat: redesign ProjectsSection with corner brackets, LIVE badge, and terminal-style company line"
```

---

## Task 10: Update FocusSection

**Files:**
- Modify: `components/sections/FocusSection.tsx`

- [ ] **Step 1: Replace FocusSection with numbered badges and green left border**

```tsx
"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/lib/data";

export function FocusSection() {
  return (
    <section id="focus" className="py-24 px-6 bg-[#020c08] relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">What I Focus On</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-transparent border border-[#1a3a22] border-l-2 border-l-[#00ff88] rounded-xl p-6 hover:bg-[#00ff88]/5 transition-all flex items-start gap-4"
            >
              <span className="font-mono text-[#00ff88] text-sm font-bold shrink-0 mt-0.5">
                [{String(index + 1).padStart(2, "0")}]
              </span>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2 m-0">{area.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed m-0">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Focus cards show `[01]`, `[02]`, etc. badges. Cards have neon green 2px left border.

- [ ] **Step 3: Commit**

```bash
git add components/sections/FocusSection.tsx
git commit -m "feat: redesign FocusSection with numbered badges and neon green left border"
```

---

## Task 11: Update ContactSection

**Files:**
- Modify: `components/sections/ContactSection.tsx`

- [ ] **Step 1: Replace ContactSection with terminal prompt layout**

```tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "antd";
import { GithubOutlined, SendOutlined } from "@ant-design/icons";
import { siteConfig } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#00ff88]/5 to-[#00d4ff]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-full" />
          <h2 className="text-white text-3xl font-bold m-0">Get in Touch</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[#94a3b8] text-lg mb-10"
        >
          Interested in working together? Feel free to reach out.
        </motion.p>

        <div className="bg-[#0a1a0f] border border-[#1a3a22] rounded-lg overflow-hidden">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0f1f14] border-b border-[#1a3a22]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-[#4ade80] font-mono text-xs">~/contact</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm space-y-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#4ade80] m-0"
            >
              <span className="text-[#00ff88]">$ </span>contact --vinh
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-[#94a3b8] m-0">
                <span className="text-[#00ff88]">&gt; </span>
                <span className="text-[#4ade80]">email:{"  "}</span>
                {siteConfig.email}
              </p>
              <p className="text-[#94a3b8] m-0">
                <span className="text-[#00ff88]">&gt; </span>
                <span className="text-[#4ade80]">github: </span>
                github.com/vohavinhtan01012001
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                size="large"
                icon={<SendOutlined />}
                href={`mailto:${siteConfig.email}`}
                className="!h-12 !text-base !font-mono !bg-[#00ff88] !border-[#00ff88] !text-[#020c08] hover:!bg-[#00cc70] hover:!border-[#00cc70]"
              >
                [→ Send Email]
              </Button>
              <Button
                size="large"
                icon={<GithubOutlined className="!text-xl" />}
                href={siteConfig.github}
                target="_blank"
                className="!h-12 !w-12 !p-0 !bg-transparent !border-[#1a3a22] !text-[#94a3b8] hover:!border-[#00d4ff] hover:!text-[#00d4ff] flex items-center justify-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Contact shows terminal with `$ contact --vinh`, then `> email:` and `> github:` lines, then CTA buttons.

- [ ] **Step 3: Commit**

```bash
git add components/sections/ContactSection.tsx
git commit -m "feat: redesign ContactSection as terminal prompt with stagger reveal"
```

---

## Task 12: Cleanup — Remove useScrollAnimation

**Files:**
- Delete: `hooks/useScrollAnimation.ts`
- Modify: `hooks/index.ts`

- [ ] **Step 1: Verify no component imports useScrollAnimation**

```bash
grep -r "useScrollAnimation" /mnt/c/workspace/freelance/portfolio/components/
```

Expected: no output (all components migrated to Framer Motion).

- [ ] **Step 2: Delete hook files**

```bash
rm /mnt/c/workspace/freelance/portfolio/hooks/useScrollAnimation.ts
```

- [ ] **Step 3: Update `hooks/index.ts` — remove the export**

Check current content:
```bash
cat /mnt/c/workspace/freelance/portfolio/hooks/index.ts
```

Remove the `useScrollAnimation` export line. If `hooks/index.ts` is now empty, delete it too:
```bash
rm /mnt/c/workspace/freelance/portfolio/hooks/index.ts
```

- [ ] **Step 4: Verify build passes**

```bash
pnpm build
```

Expected: build completes with no TypeScript errors.

- [ ] **Step 5: Final visual check**

Open http://localhost:3000 and scroll through all sections. Confirm:
- Navbar: `> vinh.tan_` blinking cursor, `//` hover
- Hero: 2-col, avatar (VT initials or photo), typing effect, green CTA
- About: terminal window with `~/about.md`
- Skills: `<React />` style tags
- Projects: `┌─` corner, `[LIVE]`/`[INTERNAL]` badges
- Focus: `[01]`, `[02]` badges, green left border
- Contact: terminal with `$ contact --vinh`
- Footer: `// EOF`

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: remove useScrollAnimation hook, all animations migrated to Framer Motion"
```
