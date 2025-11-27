


## 1. Stack Definition

| **Project**       | **Description**                 | **Classification (Type)**      | **Framework** | **Build Strategy**       | **Single-File** | **SPA** |
| ----------------- | ------------------------------- | ------------------------------ | ------------- | ------------------------ | --------------- | ------- |
| **Root**          | Main landing page & entry point | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | No              | No      |
| **Linktree**      | Simple links hub & bio page     | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | No              | No      |
| **CV Web**        | Digital Resume/CV               | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | No              | No      |
| **Nexus**         | Company Business Website        | **Type 3** (Private Dashboard) | **Vue 3**     | Client-Side (CSR)        | Yes             | Yes     |
| **Cloud**         | Cloud resources monitor         | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | No              | No      |
| **MarketWatch**   | Financial market tracker        | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | No              | No      |
| **HealthTracker** | Personal health monitoring      | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | No              | No      |
| **Feed Yourself** | Calculator / Utility Tool       | **Type 2** (Browser Tool)      | **Vanilla**   | Client-Side (CSR)        | No              | No      |
| **Others**        | Python tools & scripts          | **Scripts**                    | **Python**    | Server-Side (Static SSG) | No              | No      |
| **MyFeed**        | Social feed aggregator          | **Type 3** (Private Dashboard) | **Vue 3**     | Client-Side (CSR)        | No              | Yes     |
| **MyProfile**     | Personal portfolio showcase     | **Type 4** (Public Platform)   | **SvelteKit** | Hybrid (SSR/Hydration)   | No              | Yes     |

---

## 2. Dev Environment

| Project           | Framework | CSS      | JS Variant |
| :---------------- | :-------- | :------- | :--------- |
| **Root**          | Vanilla   | Sass     | TypeScript |
| **Linktree**      | Vanilla   | Vanilla  | Vanilla    |
| **CV Web**        | Vanilla   | Sass     | Vanilla    |
| **MyFeed**        | Vue 3     | Sass     | TypeScript |
| **MyProfile**     | SvelteKit | Sass     | TypeScript |
| **Nexus**         | Vue 3     | Tailwind | TypeScript |
| **Cloud**         | Vanilla   | Sass     | TypeScript |
| **Feed Yourself** | Vanilla   | Vanilla  | Vanilla    |
| **Others**        | Vanilla   | Vanilla  | Python     |
| **HealthTracker** | Vanilla   | Tailwind | Vanilla    |
| **MarketWatch**   | Vanilla   | Sass     | TypeScript |

*> **Note:** Cloud and MarketWatch use Vanilla JS for performance, but utilize CSR patterns to fetch live data.*

## 3. Dev Servers

| Project       | Dev Server     | Watch    |
| ------------- | -------------- | -------- |
| Root          | npm-live :8000 | Sass, TS |
| Linktree      | npm-live :8001 | -        |
| CV Web        | npm-live :8002 | Sass     |
| MyFeed        | Vite :8003     | HMR      |
| MyProfile     | Vite :8004     | HMR      |
| Nexus         | Vite :8005     | HMR      |
| Cloud         | npm-live :8006 | Sass, TS |
| Feed Yourself | npm-live :8007 | -        |
| Others        | npm-live :8008 | -        |
| HealthTracker | npm-live :8009 | -        |
| MarketWatch   | npm-live :8010 | Sass, TS |



---

## I. Reference: Project Types

This reference guide dictates how new projects should be architected.

| Type  | Definition                                                   | Framework                               | Build Strategy                               | Output                          | Why?                                                                                                |
| :---- | :----------------------------------------------------------- | :-------------------------------------- | :------------------------------------------- | :------------------------------ | :-------------------------------------------------------------------------------------------------- |
| **1** | **The Digital Business Card**<br>(Resume, Landing, Linktree) | **Vanilla** or **Astro**                | **Static (SSG)**<br>No Hydration             | **Multi-Page**<br>(.html files) | Max SEO and 100/100 Google Speed. No complex state needed.                                          |
| **2** | **The Browser Tool**<br>(Calculators, Games, Utilities)      | **Svelte** or **Vanilla**               | **Client-Side (CSR)**<br>Browser renders all | **SPA**<br>(Single Entry)       | Fast DOM manipulation is required. SEO is secondary to interactivity.                               |
| **3** | **The Private Dashboard**<br>(SaaS Admin, Monitors)          | **Vue 3**, **React**, or **Vanilla**    | **Client-Side (CSR)**<br>Browser renders all | **SPA** or **Lazy Chunks**      | Complex state management (Pinia/Redux) required. Initial load time matters less than runtime speed. |
| **4** | **The Public Platform**<br>(eCommerce, Portfolio, Blog)      | **Nuxt**, **Next.js**, or **SvelteKit** | **Hybrid**<br>(SSR + Hydration)              | **Route-based Chunks**          | Needs the SEO of Type 1 but the interactivity of Type 3.                                            |

---

## II. Technology Glossary

### Frameworks
* **Vanilla:** Zero dependencies. Used for Type 1 (Static) or high-performance Type 3 (Dashboards).
* **Vue 3:** Used for robust Type 3 applications requiring state management.
* **SvelteKit:** Used for Type 4 Hybrid applications (Best of both worlds).

### CSS Strategy
* **Sass:** The default styling engine for custom designs.
* **Tailwind:** Used for rapid prototyping or utility-heavy dashboards (Nexus, HealthTracker).
* **Vanilla:** Used only for extremely simple tools (Linktree).

### Build Types
* **No Hydration (Static):** HTML is generated at build time. JS is only for sprinkles (menus, dark mode).
* **Client-Side (CSR):** The server sends an empty HTML shell. JS populates the DOM.
* **Hybrid (Hydrated):** The server sends populated HTML (for SEO), then JS "wakes up" the page.
