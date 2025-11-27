

## 1. Stack Definition

| **Project**       | **Description**                 | **Classification (Type)**      | **Framework** | Build Strategy           | **Single-File** | **SPA** |
| ----------------- | ------------------------------- | ------------------------------ | ------------- | ------------------------ | --------------- | ------- |
| **Landpage**      | Main landing page & entry point | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **Linktree**      | Simple links hub & bio page     | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **CV Web**        | Digital Resume/CV               | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **Nexus**         | Company Business Website        | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | Yes     |
| **Cloud**         | Cloud resources monitor         | **Type 3** (Private Dashboard) | **Vanilla**   | Client-Side (CSR)        | Yes             | Yes     |
| **MarketWatch**   | Financial market tracker        | **Type 3** (Private Dashboard) | **Vanilla**   | Client-Side (CSR)        | Yes             | Yes     |
| **HealthTracker** | Personal health monitoring      | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **Feed Yourself** | Calculator / Utility Tool       | **Type 2** (Browser Tool)      | **Vanilla**   | Client-Side (CSR)        | Yes             | No      |
| **Others**        | Python tools & scripts          | **Scripts**                    | **Python**    | Server-Side (Static SSG) | Yes             | No      |
| **MyFeed**        | Social feed aggregator          | **Type 3** (Private Dashboard) | **Vue 3**     | Client-Side (CSR)        | Yes             | Yes     |
| **MyProfile**     | Personal portfolio showcase     | **Type 4** (Public Platform)   | **SvelteKit** | Hybrid (SSR/Hydration)   | No              | Yes     |

---

## 2. Dev Environment

| **Project**       | **Framework** | **CSS**  | **JS Variant** |
| ----------------- | ------------- | -------- | -------------- |
| **Landpage**      | Vanilla       | Sass     | TypeScript     |
| **Linktree**      | Vanilla       | Sass     | Vanilla        |
| **CV Web**        | Vanilla       | Sass     | Vanilla        |
| **Nexus**         | Vanilla       | Sass+TW  | TypeScript     |
| **Cloud**         | Vanilla       | Sass     | TypeScript     |
| **MarketWatch**   | Vanilla       | Sass     | TypeScript     |
| **HealthTracker** | Vanilla       | Tailwind | Vanilla        |
| **Feed Yourself** | Vanilla       | Sass     | Vanilla        |
| **Others**        | Python 3.11+  | -        | -              |
| **MyFeed**        | Vue 3         | Sass     | TypeScript     |
| **MyProfile**     | SvelteKit     | Sass     | TypeScript     |

---

## 3. Dev Servers

| **Project**       | **Dev Server (Port)** | **Watch**  |
| ----------------- | --------------------- | ---------- |
| **Landpage**      | npm-live :8000        | Sass, TS   |
| **Linktree**      | npm-live :8001        | -          |
| **CV Web**        | npm-live :8002        | Sass       |
| **Nexus**         | npm-live :8005        | Sass, TS   |
| **Cloud**         | npm-live :8006        | Sass, TS   |
| **MarketWatch**   | npm-live :8010        | Sass, TS   |
| **HealthTracker** | npm-live :8009        | -          |
| **Feed Yourself** | npm-live :8007        | -          |
| **Others**        | npm-live :8008        | -          |
| **MyFeed**        | Vite :8003            | HMR        |
| **MyProfile**     | Vite :8004            | HMR        |

---

## I. Reference: Project Types

| Type  | Definition                                                   | Framework                               | Build Strategy                               | Output                          | Why?                                                                                                |
| :---- | :----------------------------------------------------------- | :-------------------------------------- | :------------------------------------------- | :------------------------------ | :-------------------------------------------------------------------------------------------------- |
| **1** | **The Digital Business Card**<br>(Resume, Landing, Linktree) | **Vanilla** or **Astro**                | **Static (SSG)**<br>No Hydration             | **Multi-Page**<br>(.html files) | Max SEO and 100/100 Google Speed. No complex state needed.                                          |
| **2** | **The Browser Tool**<br>(Calculators, Games, Utilities)      | **Svelte** or **Vanilla**               | **Client-Side (CSR)**<br>Browser renders all | **SPA**<br>(Single Entry)       | Fast DOM manipulation is required. SEO is secondary to interactivity.                               |
| **3** | **The Private Dashboard**<br>(SaaS Admin, Monitors)          | **Vue 3**, **React**, or **Vanilla**    | **Client-Side (CSR)**<br>Browser renders all | **SPA** or **Lazy Chunks**      | Complex state management (Pinia/Redux) required. Initial load time matters less than runtime speed. |
| **4** | **The Public Platform**<br>(eCommerce, Portfolio, Blog)      | **Nuxt**, **Next.js**, or **SvelteKit** | **Hybrid**<br>(SSR + Hydration)              | **Route-based Chunks**          | Needs the SEO of Type 1 but the interactivity of Type 3.                                            |

---

## II. Technology Glossary

### Frameworks
* **Vanilla:** Zero dependencies. Used for Type 1 (Static) or high-performance dashboards. Default choice.
* **Vue 3:** Used for complex Type 3 applications requiring state management (MyFeed).
* **SvelteKit:** Used for Type 4 Hybrid applications needing SEO + interactivity (MyProfile).

### CSS Strategy
* **Sass:** The default styling engine for custom designs. (Landpage, Linktree, CV Web, Cloud, MarketWatch, Feed Yourself)
* **Tailwind:** Pure utility-first approach. (HealthTracker)
* **Sass+Tailwind:** Hybrid - Sass for custom styles, Tailwind for utilities. (Nexus)

### Build Types
* **No Hydration (Static):** HTML is generated at build time. JS is only for sprinkles (menus, dark mode).
* **Client-Side (CSR):** The server sends an empty HTML shell. JS populates the DOM.
* **Hybrid (Hydrated):** The server sends populated HTML (for SEO), then JS "wakes up" the page.

---

## III. Migration Notes (Today → New)

| Project         | Change                          | Reason                                           |
| --------------- | ------------------------------- | ------------------------------------------------ |
| **Nexus**       | Vue 3 → Vanilla + SPA           | Overkill for 4 pages. Keep SPA routing.          |
| **Nexus**       | Tailwind → Sass+Tailwind        | Learn hybrid approach (Sass + Tailwind together) |
| **Cloud**       | Add SPA (history routing)       | Back-button support for tab navigation           |
| **MarketWatch** | Add SPA (history routing)       | Back-button support for tab navigation           |
| **Linktree**    | Vanilla CSS → Sass              | Consistency with other projects                  |
| **Feed Yourself** | Vanilla CSS → Sass            | Consistency with other projects                  |
| **All Vanilla** | Add Single-File build           | Portable, offline-ready output                   |
| **MyFeed**      | Add Single-File build           | Portable output via vite-plugin-singlefile       |

### Keep As-Is (Correct Choice)
- **MyFeed** - Vue 3 justified (complex state, multiple sources, search)
- **MyProfile** - SvelteKit justified (SEO + dynamic portfolio), Route Chunks
- **All others** - Vanilla is the right choice
