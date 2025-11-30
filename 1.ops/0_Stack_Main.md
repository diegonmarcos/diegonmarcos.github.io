

## 1. Stack Definition

| **Project**       | **Description**                 | **Classification (Type)**      | **Framework** | Build Strategy           | **Single-File** | **SPA** |
| ----------------- | ------------------------------- | ------------------------------ | ------------- | ------------------------ | --------------- | ------- |
| **CentralBank**   | Central bank modeling tool      | **Type 2** (Browser Tool)      | **Vanilla**   | Client-Side (CSR)        | Yes             | Yes     |
| **Cloud**         | Cloud resources monitor         | **Type 3** (Private Dashboard) | **Vanilla**   | Client-Side (CSR)        | Yes             | Yes     |
| **CV PDF**        | PDF Resume generator            | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **CV Web**        | Digital Resume/CV               | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **Feed Yourself** | Calculator / Utility Tool       | **Type 2** (Browser Tool)      | **Vanilla**   | Client-Side (CSR)        | Yes             | No      |
| **HealthTracker** | Personal health monitoring      | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **Landpage**      | Main landing page & entry point | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **Linktree**      | Simple links hub & bio page     | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | No      |
| **MarketWatch**   | Financial market tracker        | **Type 3** (Private Dashboard) | **Vanilla**   | Client-Side (CSR)        | Yes             | Yes     |
| **MyFeed**        | Social feed aggregator          | **Type 3** (Private Dashboard) | **Vue 3**     | Client-Side (CSR)        | Yes             | Yes     |
| **MyGames**       | Retro games collection          | **Type 2** (Browser Tool)      | **SvelteKit** | Hybrid (SSR/Hydration)   | No              | Yes     |
| **MyMaps**        | Strategic map viewer            | **Type 4** (Public Platform)   | **Next.js**   | Hybrid (SSR/Hydration)   | No              | Yes     |
| **MyProfile**     | Personal portfolio showcase     | **Type 4** (Public Platform)   | **SvelteKit** | Hybrid (SSR/Hydration)   | No              | Yes     |
| **Nexus**         | Company Business Website        | **Type 1** (Digital Card)      | **Vanilla**   | Server-Side (Static SSG) | Yes             | Yes     |
| **Others**        | Python tools & scripts          | **Scripts**                    | **Python**    | Server-Side (Static SSG) | Yes             | No      |

---

## 2. Dev Environment

| **Project**       | **Framework** | **CSS**  | **JS Variant** |
| ----------------- | ------------- | -------- | -------------- |
| **CentralBank**   | Vanilla       | Sass+TW  | TypeScript     |
| **Cloud**         | Vanilla       | Sass     | TypeScript     |
| **CV PDF**        | Vanilla       | Sass     | TypeScript     |
| **CV Web**        | Vanilla       | Sass     | TypeScript     |
| **Feed Yourself** | Vanilla       | Sass     | TypeScript     |
| **HealthTracker** | Vanilla       | Tailwind | -              |
| **Landpage**      | Vanilla       | Sass     | TypeScript     |
| **Linktree**      | Vanilla       | Sass     | TypeScript     |
| **MarketWatch**   | Vanilla       | Sass     | TypeScript     |
| **MyFeed**        | Vue 3         | Sass     | TypeScript     |
| **MyGames**       | SvelteKit     | Sass     | TypeScript     |
| **MyMaps**        | Next.js       | Sass     | TypeScript     |
| **MyProfile**     | SvelteKit     | Sass     | TypeScript     |
| **Nexus**         | Vanilla       | Sass+TW  | TypeScript     |
| **Others**        | Python 3.11+  | -        | -              |

---

## 3. Dev Servers

| **Project**       | **Dev Server (Port)** | **Watch**  |
| ----------------- | --------------------- | ---------- |
| **CentralBank**   | Vite :8011            | HMR        |
| **Cloud**         | npm-live :8006        | Sass, TS   |
| **CV PDF**        | npm-live :8012        | Sass, TS   |
| **CV Web**        | npm-live :8002        | Sass, TS   |
| **Feed Yourself** | npm-live :8007        | Sass, TS   |
| **HealthTracker** | npm-live :8009        | -          |
| **Landpage**      | npm-live :8000        | Sass, TS   |
| **Linktree**      | npm-live :8001        | Sass, TS   |
| **MarketWatch**   | npm-live :8010        | Sass, TS   |
| **MyFeed**        | Vite :8003            | HMR        |
| **MyGames**       | Vite :8013            | HMR        |
| **MyMaps**        | Next :8014            | HMR        |
| **MyProfile**     | Vite :8004            | HMR        |
| **Nexus**         | npm-live :8005        | Sass, TS   |
| **Others**        | npm-live :8008        | -          |

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
* **SvelteKit:** Used for Type 2/4 Hybrid applications needing SEO + interactivity (MyGames, MyProfile).
* **Next.js:** React-based framework for Type 4 applications with SSR/SSG capabilities (MyMaps).

### CSS Strategy
* **Sass:** The default styling engine for custom designs. (Landpage, Linktree, CV Web, CV PDF, Cloud, MarketWatch, Feed Yourself, MyFeed, MyGames, MyMaps, MyProfile)
* **Tailwind:** Pure utility-first approach. (HealthTracker)
* **Sass+Tailwind:** Hybrid - Sass for custom styles, Tailwind for utilities. (CentralBank, Nexus)

### Build Types
* **No Hydration (Static):** HTML is generated at build time. JS is only for sprinkles (menus, dark mode).
* **Client-Side (CSR):** The server sends an empty HTML shell. JS populates the DOM.
* **Hybrid (Hydrated):** The server sends populated HTML (for SEO), then JS "wakes up" the page.

---


