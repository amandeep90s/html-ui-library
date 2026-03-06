# Shared UI Library

A shared HTML/CSS component showcase built with **TailwindCSS v4** and **DaisyUI v5**, powered by **Vite 7**. Teams can browse live-rendered components and **copy the raw HTML** snippet directly into any project — no framework required.

---

## Tech Stack

| Tool                                   | Version | Role                                 |
| -------------------------------------- | ------- | ------------------------------------ |
| [Vite](https://vitejs.dev)             | 7       | Build tool & dev server              |
| [TailwindCSS](https://tailwindcss.com) | 4       | Utility-first CSS (CSS-based config) |
| [DaisyUI](https://daisyui.com)         | 5       | Component plugin for Tailwind        |
| [pnpm](https://pnpm.io)                | 10      | Package manager                      |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** ≥ 9 — install with `npm i -g pnpm`

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start the development server

```bash
pnpm dev
```

Open **http://localhost:5173** in your browser. The page hot-reloads on every file save.

### 3. Build for production

```bash
pnpm build
```

Output goes to `dist/`. Serve it with any static host.

### 4. Preview the production build locally

```bash
pnpm preview
```

Opens a local server at **http://localhost:4173** serving the built `dist/` folder.

---

## How the Showcase Page Works

The app is a single-page component browser. Here is what you see when you open it:

```
┌─────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                              [☀ / ☾ theme toggle] │
│  ▣ Shared UI Library                                                     │
├─────────────────┬───────────────────────────────────────────────────────┤
│                 │                                                         │
│  SIDEBAR        │  MAIN CONTENT AREA                                      │
│  ─────────      │  ──────────────────────────────────────────────────    │
│  ● Button  ◄──  │  Button                                                 │
│    Badge        │  Displays a button or a component that looks like...   │
│                 │                                                         │
│                 │  ── Variants ───────────────────────────────────────   │
│                 │                                                         │
│                 │  ┌─────────────────────────────────────────────────┐  │
│                 │  │  Default / Primary              [Copy Code]      │  │
│                 │  ├─────────────────────────────────────────────────┤  │
│                 │  │  PREVIEW AREA                                    │  │
│                 │  │  [ Primary ]                                     │  │
│                 │  ├─────────────────────────────────────────────────┤  │
│                 │  │  CODE BLOCK (dark bg)                            │  │
│                 │  │  <button class="btn btn-primary">Primary</button>│  │
│                 │  └─────────────────────────────────────────────────┘  │
│                 │                                                         │
│                 │  ┌─────────────────────────────────────────────────┐  │
│  ─────────      │  │  Secondary                      [Copy Code]      │  │
│  How to use:    │  │  ...                                             │  │
│  Click "Copy    │  └─────────────────────────────────────────────────┘  │
│  Code" on any   │                                                         │
│  variant to     │  ── Sizes ──────────────────────────────────────────   │
│  copy the HTML. │                                                         │
│                 │  ...more sections and variants below...                │
└─────────────────┴───────────────────────────────────────────────────────┘
```

### Page Sections Explained

| Area                 | Description                                                                                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Navbar**           | Fixed top bar with the library logo and a light/dark theme toggle. Theme preference is saved in `localStorage`.                                                                                                   |
| **Sidebar**          | Lists every registered component. Click a name to jump to that component's page. Active item is highlighted in the brand primary colour. On mobile, the sidebar slides in from the left via the hamburger button. |
| **Component header** | Shows the component name and a short description (mirrors shadcn/ui's API docs style).                                                                                                                            |
| **Section heading**  | Groups related variants (e.g. _Variants_, _Sizes_, _States_).                                                                                                                                                     |
| **Preview card**     | Each variant has its own card with three rows: a label bar, a live rendered preview, and a dark code block.                                                                                                       |
| **Copy Code button** | Copies the raw HTML of that variant to your clipboard. A toast notification confirms the copy.                                                                                                                    |

### User Flow

```
Open http://localhost:5173
        │
        ▼
  Sidebar loads (Button selected by default)
        │
        ▼
  Browse sections: Variants → Sizes → States → Icon variants…
        │
        ▼
  Find the variant you want, read the live preview
        │
        ▼
  Click [ Copy Code ] → HTML is in your clipboard
        │
        ▼
  Paste directly into your project's HTML
```

---

## Project Structure

```
html-ui-library/
│
├── index.html                  # App shell — layout skeleton, Google Fonts link
├── vite.config.js              # Vite config — @tailwindcss/vite plugin
├── tailwind.config.js          # ★ Tailwind JS config (IDE intellisense + compat)
├── package.json
├── pnpm-lock.yaml
│
└── src/
    ├── main.js                 # App logic — render, routing, copy, theme toggle
    ├── styles.css              # Master CSS entry — imports all layers below
    │
    ├── theme/
    │   ├── tailwind-theme.css  # ★ @theme tokens: fonts, spacing, shadows, animations
    │   └── daisyui-theme.css   # ★ @plugin themes: shared-light + shared-dark
    │
    └── components/
        ├── index.js            # Registry — import components here to add to sidebar
        ├── button.js           # Button variants (25 variants across 7 sections)
        └── badge.js            # Badge variants (24 variants across 7 sections)
```

### CSS Import Chain

Understanding how the stylesheets connect helps when importing into another app:

```
src/styles.css
 ├── @import "tailwindcss"               ← Tailwind v4 base
 ├── @config "../tailwind.config.js"  ← JS config (IDE + plugin compat)
 ├── @import "./theme/tailwind-theme.css"  ← Custom @theme design tokens
 ├── @plugin "daisyui"                   ← DaisyUI component classes
 └── @import "./theme/daisyui-theme.css"  ← Custom light + dark brand themes
```

---

## Tailwind Configuration

TailwindCSS v4 uses **CSS-first configuration** — the `@theme` block inside [`src/theme/tailwind-theme.css`](./src/theme/tailwind-theme.css) is the runtime source of truth.

The [`tailwind.config.js`](./tailwind.config.js) at the project root **mirrors** those same values so that:

- **VS Code / WebStorm** can provide class-name intellisense
- **Legacy plugins** that read the JS config still work
- **Design-token exporters** (Style Dictionary, Theo, etc.) can read values programmatically

### Custom Design Tokens

#### Fonts

| Variable    | CSS token     | Value                               |
| ----------- | ------------- | ----------------------------------- |
| `font-sans` | `--font-sans` | Inter (+ system fallbacks)          |
| `font-mono` | `--font-mono` | JetBrains Mono (+ system fallbacks) |

#### Spacing

| Class             | CSS token       | Value    |
| ----------------- | --------------- | -------- |
| `w-18` / `h-18`   | `--spacing-18`  | `4.5rem` |
| `w-88` / `h-88`   | `--spacing-88`  | `22rem`  |
| `w-128` / `h-128` | `--spacing-128` | `32rem`  |

#### Box Shadows

| Class             | CSS token           | Use case             |
| ----------------- | ------------------- | -------------------- |
| `shadow-soft`     | `--shadow-soft`     | Subtle card lift     |
| `shadow-card`     | `--shadow-card`     | Standard card shadow |
| `shadow-elevated` | `--shadow-elevated` | Dropdowns, modals    |

#### Animations

| Class                | CSS token              | Effect                |
| -------------------- | ---------------------- | --------------------- |
| `animate-fade-in`    | `--animate-fade-in`    | Fade from transparent |
| `animate-slide-up`   | `--animate-slide-up`   | Slide up + fade in    |
| `animate-slide-down` | `--animate-slide-down` | Slide down + fade in  |

#### Breakpoints

| Name  | Value    | Usage         |
| ----- | -------- | ------------- |
| `xs`  | `475px`  | Small phones  |
| `3xl` | `1920px` | Wide displays |

---

## DaisyUI Themes

Two custom themes are defined in [`src/theme/daisyui-theme.css`](./src/theme/daisyui-theme.css):

| Theme name     | `data-theme` value          | Used when                                                            |
| -------------- | --------------------------- | -------------------------------------------------------------------- |
| `shared-light` | `data-theme="shared-light"` | Default / user selects light mode                                    |
| `shared-dark`  | `data-theme="shared-dark"`  | User selects dark mode (also auto with `prefers-color-scheme: dark`) |

### Brand Color Palette

| Token       | Light                               | Dark                     |
| ----------- | ----------------------------------- | ------------------------ |
| `primary`   | Deep charcoal `oklch(20.9% ...)`    | Blue-violet `oklch(65%)` |
| `secondary` | Medium gray `oklch(37.9% ...)`      | Soft blue `oklch(72.7%)` |
| `accent`    | Warm red-orange `oklch(49.65% ...)` | Amber `oklch(75.5%)`     |
| `neutral`   | Near-black `oklch(14% ...)`         | Light gray `oklch(82%)`  |
| `info`      | Blue                                | Blue                     |
| `success`   | Green                               | Green                    |
| `warning`   | Amber                               | Amber                    |
| `error`     | Red                                 | Red                      |

---

## Using the Theme in Another App

Copy the two theme files into your project, then import them:

### Step 1 — Copy theme files

```
your-app/
└── src/
    └── theme/
        ├── tailwind-theme.css   ← copy from this library
        └── daisyui-theme.css    ← copy from this library
```

### Step 2 — Install dependencies

```bash
pnpm add -D tailwindcss @tailwindcss/vite daisyui
```

### Step 3 — Create your main CSS

```css
/* your-app/src/styles.css */
@import "tailwindcss";
@import "./theme/tailwind-theme.css";
@plugin "daisyui";
@import "./theme/daisyui-theme.css";
```

### Step 4 — Set the theme on `<html>`

```html
<!-- light mode -->
<html data-theme="shared-light">
	<!-- dark mode -->
	<html data-theme="shared-dark"></html>
</html>
```

### Step 5 — Use components

Copy any HTML snippet from the showcase and paste it into your template:

```html
<!-- Copied directly from the Button showcase -->
<button class="btn btn-primary">Save changes</button>
<span class="badge badge-soft badge-success">Active</span>
```

---

## Adding New Components

1. Create `src/components/<name>.js` and export a component object:

```js
// src/components/input.js
export const inputComponent = {
	name: "Input",
	description: "A text input field with multiple variants and states.",
	sections: [
		{
			title: "Variants",
			description: "Different input styles.",
			variants: [
				{
					label: "Bordered (default)",
					html: `<input type="text" placeholder="Type here…" class="input input-bordered w-full max-w-xs" />`,
				},
				{
					label: "Ghost",
					html: `<input type="text" placeholder="Ghost input" class="input input-ghost w-full max-w-xs" />`,
				},
			],
		},
	],
};
```

2. Register it in `src/components/index.js`:

```js
import { buttonComponent } from "./button.js";
import { badgeComponent } from "./badge.js";
import { inputComponent } from "./input.js"; // ← add this

export const components = [buttonComponent, badgeComponent, inputComponent];
```

The new component appears automatically in the sidebar — no other changes needed.

---

## Available Scripts

| Command        | Description                                          |
| -------------- | ---------------------------------------------------- |
| `pnpm dev`     | Start dev server at `http://localhost:5173` with HMR |
| `pnpm build`   | Build production bundle to `dist/`                   |
| `pnpm preview` | Serve `dist/` locally at `http://localhost:4173`     |

---

## Roadmap (planned components)

- [ ] Input
- [ ] Select
- [ ] Textarea
- [ ] Checkbox & Radio
- [ ] Toggle / Switch
- [ ] Card
- [ ] Alert
- [ ] Modal / Dialog
- [ ] Dropdown / Menu
- [ ] Tabs
- [ ] Accordion
- [ ] Avatar
- [ ] Table
- [ ] Tooltip
- [ ] Progress
- [ ] Skeleton

---

## License

Private — Internal use only.
