# Shared UI Library

A shared HTML/CSS component library built with **TailwindCSS v4** and **DaisyUI v5**, featuring custom brand themes. Teams can browse rendered components and **copy the HTML code** directly into their projects.

## Tech Stack

- **Vite 7** — Build tool & dev server
- **TailwindCSS 4** — Utility-first CSS framework (CSS-based config)
- **DaisyUI 5** — Component library plugin for Tailwind
- **pnpm** — Package manager

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
html-ui-library/
├── index.html                         # Showcase app shell
├── vite.config.js                     # Vite + TailwindCSS plugin config
├── package.json
├── src/
│   ├── main.js                        # Showcase app logic (render, copy, theme toggle)
│   ├── styles.css                     # Main stylesheet (imports everything)
│   ├── theme/
│   │   ├── daisyui-theme.css          # ★ Custom DaisyUI theme (importable)
│   │   └── tailwind-theme.css         # ★ Custom Tailwind design tokens (importable)
│   └── components/
│       ├── index.js                   # Component registry
│       ├── button.js                  # Button component variants
│       └── badge.js                   # Badge component variants
```

## Using Theme Files in Other Apps

The theme is split into two standalone CSS files that any app can import:

### 1. Install dependencies in your app

```bash
pnpm add -D tailwindcss @tailwindcss/vite daisyui
```

### 2. Copy theme files

Copy these files into your project:

- `src/theme/daisyui-theme.css` — Custom DaisyUI color themes (light + dark)
- `src/theme/tailwind-theme.css` — Extended Tailwind design tokens (fonts, shadows, animations)

### 3. Import in your app's main CSS

```css
/* your-app/src/styles.css */
@import "tailwindcss";
@import "./theme/tailwind-theme.css";
@plugin "daisyui";
@import "./theme/daisyui-theme.css";
```

### 4. Set the theme in your HTML

```html
<html data-theme="shared-light">
	<!-- or data-theme="shared-dark" -->
</html>
```

## Custom Theme Colors

| Token       | Light            | Dark                |
| ----------- | ---------------- | ------------------- |
| `primary`   | Deep blue-violet | Lighter blue-violet |
| `secondary` | Soft blue        | Lighter blue        |
| `accent`    | Warm amber       | Lighter amber       |
| `neutral`   | Dark charcoal    | Light gray          |
| `info`      | Blue             | Blue                |
| `success`   | Green            | Green               |
| `warning`   | Orange           | Orange              |
| `error`     | Red              | Red                 |

## Adding New Components

1. Create a new file in `src/components/` (e.g., `input.js`)
2. Export a component object with `name`, `description`, and `sections` array
3. Import and add it to the `components` array in `src/components/index.js`

Example:

```js
// src/components/input.js
export const inputComponent = {
	name: "Input",
	description: "Text input field component.",
	sections: [
		{
			title: "Variants",
			description: "Different input styles.",
			variants: [
				{
					label: "Default",
					html: `<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />`,
				},
			],
		},
	],
};
```

```js
// src/components/index.js
import { inputComponent } from "./input.js";
export const components = [buttonComponent, badgeComponent, inputComponent];
```

The new component will automatically appear in the sidebar.

## License

Private — Internal use only.
