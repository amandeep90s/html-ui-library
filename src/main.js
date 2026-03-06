/* ============================================================
   Shared UI Library — Showcase App
   ============================================================ */

import { components } from "./components/index.js";
import "./styles.css";

// ── State ────────────────────────────────────────────────────
let activeComponent = components[0]?.name || "";

// ── Utility: escape HTML for display ─────────────────────────
function escapeHtml(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ── Utility: format HTML for display (already dedented by parser) ──
function formatHtml(html) {
	return html.trim();
}

// ── Copy to clipboard ────────────────────────────────────────
async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
		showToast("Copied to clipboard!");
	} catch {
		// Fallback
		const textarea = document.createElement("textarea");
		textarea.value = text;
		textarea.style.cssText = "position:fixed;opacity:0";
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		showToast("Copied to clipboard!");
	}
}

// ── Toast notification ───────────────────────────────────────
let toastTimeout;
function showToast(message) {
	const toast = document.getElementById("toast");
	toast.textContent = message;
	toast.classList.add("show");
	clearTimeout(toastTimeout);
	toastTimeout = setTimeout(() => toast.classList.remove("show"), 2000);
}

// ── Render sidebar ───────────────────────────────────────────
function renderSidebar() {
	const sidebar = document.getElementById("sidebar-nav");
	sidebar.innerHTML = components
		.map(
			(comp) => `
      <button
        data-component="${comp.name}"
        class="sidebar-link w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors
          ${
						comp.name === activeComponent
							? "bg-primary text-primary-content"
							: "text-base-content/70 hover:bg-base-200 hover:text-base-content"
					}"
      >
        ${comp.name}
      </button>`,
		)
		.join("");

	// Attach listeners
	sidebar.querySelectorAll("[data-component]").forEach((btn) => {
		btn.addEventListener("click", () => {
			activeComponent = btn.dataset.component;
			renderSidebar();
			renderContent();
		});
	});
}

// ── Render main content ──────────────────────────────────────
function renderContent() {
	const main = document.getElementById("main-content");
	const comp = components.find((c) => c.name === activeComponent);

	if (!comp) {
		main.innerHTML = `<p class="text-base-content/50">Select a component from the sidebar.</p>`;
		return;
	}

	main.innerHTML = `
    <div class="animate-fade-in">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-base-content">${comp.name}</h1>
        <p class="mt-2 text-base-content/60 text-base">${comp.description}</p>
      </div>

      <!-- Sections -->
      ${comp.sections
				.map(
					(section, si) => `
        <div class="mb-10">
          <h2 class="text-xl font-semibold text-base-content mb-1">${section.title}</h2>
          <p class="text-sm text-base-content/50 mb-4">${section.description}</p>

          ${section.variants
						.map((variant, vi) => {
							const formatted = formatHtml(variant.html);
							const id = `code-${si}-${vi}`;
							return `
              <div class="preview-card mb-5 shadow-soft">
                <div class="flex items-center justify-between px-4 py-2 bg-base-200/50">
                  <span class="text-xs font-medium text-base-content/70">${variant.label}</span>
                  <button
                    class="copy-html-btn btn btn-ghost btn-xs gap-1"
                    data-code-id="${id}"
                    title="Copy HTML"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    Copy Code
                  </button>
                </div>
                <div class="preview-area">
                  ${variant.html}
                </div>
                <div class="code-block" id="${id}">${escapeHtml(formatted)}</div>
              </div>`;
						})
						.join("")}
        </div>`,
				)
				.join("")}
    </div>`;

	// Attach copy listeners
	main.querySelectorAll(".copy-html-btn").forEach((btn) => {
		btn.addEventListener("click", () => {
			const codeEl = document.getElementById(btn.dataset.codeId);
			copyToClipboard(codeEl.textContent);
		});
	});
}

// ── Theme toggle ─────────────────────────────────────────────
function initThemeToggle() {
	const html = document.documentElement;
	const btn = document.getElementById("theme-toggle");

	// Check saved preference or system preference
	const saved = localStorage.getItem("theme");
	if (saved) {
		html.setAttribute("data-theme", saved);
	}

	btn.addEventListener("click", () => {
		const current = html.getAttribute("data-theme");
		const next = current === "shared-dark" ? "shared-light" : "shared-dark";
		html.setAttribute("data-theme", next);
		localStorage.setItem("theme", next);
		updateThemeIcon(next);
	});

	updateThemeIcon(html.getAttribute("data-theme") || "shared-light");
}

function updateThemeIcon(theme) {
	const btn = document.getElementById("theme-toggle");
	const isDark = theme === "shared-dark";
	btn.innerHTML = isDark
		? `<svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
		: `<svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
}

// ── Mobile sidebar toggle ────────────────────────────────────
function initMobileSidebar() {
	const toggle = document.getElementById("mobile-menu-toggle");
	const sidebar = document.getElementById("sidebar");

	toggle?.addEventListener("click", () => {
		sidebar.classList.toggle("-translate-x-full");
	});

	// Close on component click (mobile)
	document.getElementById("sidebar-nav").addEventListener("click", (e) => {
		if (e.target.closest("[data-component]") && window.innerWidth < 1024) {
			sidebar.classList.add("-translate-x-full");
		}
	});
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
	renderSidebar();
	renderContent();
	initThemeToggle();
	initMobileSidebar();
});
