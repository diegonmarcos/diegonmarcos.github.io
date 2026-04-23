
# CODE PRATICES FOR FRONT WEB DEVS

---

# INDEX

0. Global Context Rules (.rules)
1. HTML
1.0 HTML
1.1 ANALYTICS (MATOMO)
2.CSS/Sass(SCSS)
2 JS/TS
2.0 Vanilla
2.1 Vue
2.2 SvelteKit


---



# Rules

A JS script create this Global markdwon report that will be in the folder as: .rules and also should be in the header of the index file as comments

# 🚀 Global Project Context & Rules

## 1. Tech Stack & Environment
- **Framework:** SvelteKit (Svelte 5 Runes Mode).
- **Language:** TypeScript (Strict Mode).
- **Styling:** SCSS (Sass) with "Golden Mixins".
- **Analytics:** Matomo (Self-Hosted) via custom component.
- **Rendering:** Hybrid (SSR + SPA Client-Side Navigation).

---

## 2. Svelte 5 & TypeScript Rules
**CRITICAL:** Do NOT use Svelte 4 syntax.
- **Props:** Use `let { propName }: { propName: Type } = $props();` (Never use `export let`).
- **State:** Use `$state(initial)` (Never use `let var = val`).
- **Computed:** Use `$derived(calculation)` (Never use `$: var = val`).
- **Effects:** Use `$effect(() => { ... })` (Never use `onMount` for reactive side effects).
- **Events:** Use standard HTML attributes `onclick`, `oninput` (Never use `on:click`).
- **Typing:**
  - Always import `PageData` and `PageServerLoad` from `./$types`.
  - Use `HTMLInputElement`, `HTMLButtonElement`, etc., for DOM refs.

---

## 3. HTML & Accessibility (The Structure)
**Goal:** Semantic, accessible, and clean HTML.

- **No Div Soup:**
  - ❌ `div class="nav"` → ✅ `<nav>`
  - ❌ `div class="card"` → ✅ `<article class="card">`
  - ❌ `div class="footer"` → ✅ `<footer>`
- **Buttons vs Links:**
  - Use `<a href="...">` ONLY for navigation (changing URLs).
  - Use `<button type="button">` for actions (toggles, modals, API calls).
- **Forms:**
  - Every `<input>` must have a linked `<label>` (via `for` attribute or wrapping).
- **Images:**
  - All `<img>` tags MUST have an `alt` attribute.

---

## 4. SCSS & Styling Rules (The "Golden Mixins")
**Goal:** Consistent, mobile-first responsive design without CSS hacks.

- **Global Logic:**
  - Use **Flexbox** or **Grid** for all layouts.
  - **FORBIDDEN:** `float`, `clear`, or `position: absolute` (unless strictly for UI overlays).
  - Use `rem` for spacing/fonts, `%` for widths.

- **The Golden Mixins (Reference):**
  *Assume these are available globally. Do not redefine them, just use them.*
  - `@include flex-row(justify, align, gap)` → For horizontal layouts.
  - `@include flex-col(justify, align, gap)` → For vertical stacks.
  - `@include grid-auto-fit(min-size, gap)` → For responsive card grids.
  - `@include mq(md)` → For mobile-first breakpoints.

---

## 5. Analytics & Matomo Rules
**Goal:** Accurate tracking in a SvelteKit SPA environment.

- **Environment Safety:**
  - ALWAYS wrap analytics code in `if (browser) { ... }` (Import `browser` from `$app/environment`).
  - Never run tracking code during SSR.

- **SPA Tracking (Navigation):**
  - Do NOT rely on the script tag alone (it only fires on hard reload).
  - You MUST hook into `$app/navigation`.
  - On `afterNavigate`, strictly follow this order:
    1. `_paq.push(['setCustomUrl', $page.url.href]);` (Fixes URL tracking)
    2. `_paq.push(['setDocumentTitle', document.title]);` (Fixes Title tracking)
    3. `_paq.push(['trackPageView']);` (Fires the ping)

- **Interaction Tracking:**
  - Use the custom helper: `trackEvent(category, action, name)`.
  - Do NOT put `_paq.push` directly in HTML `onclick` attributes.

---

## 6. Code Generation Style
- **Brevity:** Do not explain standard Svelte concepts. Just write the code.
- **Imports:** Group imports: Svelte specific -> SvelteKit specific -> Local Components -> Types.
- **Safety:** Always handle `null` / `undefined` for server data (`data.user?.name`).




# HTML

You need to be very specific with AI about **HTML** (for accessibility) and **Analytics** (because modern frameworks like SvelteKit/Vue don't track page views automatically).

Here is the breakdown for both.

-----

### Part 1: HTML & Accessibility (The "Invisible" Code)

AI defaults to "visual" code (lots of `<div>` tags). You must force it to write "semantic" code so your site ranks on Google (SEO) and works for blind users (Screen Readers).

#### 1\. The Core Rules to Teach AI

  * **No "Div Soup":** Stop it from using `<div class="nav">`. It must use `<nav>`, `<header>`, `<main>`, `<footer>`, and `<section>`.
  * **Buttons vs. Links:** AI often gets this wrong.
      * Goes to a new page? Use `<a href="...">`.
      * Perform an action (like "Open Menu")? Use `<button>`.
  * **Images:** Always require `alt` text.

#### 📋 The "Golden HTML" Prompt

Paste this in your system instructions to ensure professional-grade HTML:

> **"HTML & Accessibility Rules:**
>
> 1.  **Semantic Structure:** Use `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, and `<footer>` appropriately. Never use a `<div>` if a semantic tag exists.
> 2.  **Accessibility (a11y):**
>       * All `<img>` tags MUST have an `alt` attribute.
>       * Interactive elements (buttons/inputs) must have `aria-label` if they contain only icons (no text).
>       * Use `aria-expanded="true/false"` for dropdowns/menus.
> 3.  **Forms:** Every `<input>` must be linked to a `<label>` via `for/id` or nesting."

-----

### Part 2: Analytics (The "SPA" Problem)

In frameworks like SvelteKit or Vue (Single Page Apps), **analytics tools do not work automatically.**

  * **The Problem:** When a user clicks a link in SvelteKit, the page doesn't "reload" (it just swaps content). Google Analytics thinks the user is still on the first page forever.
  * **The Solution:** You must manually tell the analytics tool: *"Hey, the user just moved to a new URL\!"*

#### Option A: The "Modern & Easy" Choice (PostHog / Plausible)

If you are a developer, avoid Google Analytics if you can. Tools like **PostHog** or **Plausible** are much easier to integrate with SvelteKit.

**Prompt for AI (PostHog example):**

> "I am using PostHog for analytics in SvelteKit.
>
> 1.  Create a component `Analytics.svelte` that uses the `afterNavigate` lifecycle function from `$app/navigation`.
> 2.  Inside `afterNavigate`, call `posthog.capture('$pageview')`.
> 3.  Mount this component in `+layout.svelte` so it runs on every page change."

#### Option B: The "Corporate" Choice (Google Analytics 4)

If you must use GA4, you have to be very careful with TypeScript because `window.gtag` doesn't exist by default.

**Prompt for AI (GA4 + TypeScript):**

> "I am integrating Google Analytics 4 (GA4) into SvelteKit with TypeScript.
>
> 1.  **Type Definition:** Extend the `Window` interface to include `gtag` and `dataLayer`.
> 2.  **Tracking:** Use `afterNavigate` in `+layout.svelte`.
> 3.  **Logic:** On navigation, manually trigger a config update:
>     `gtag('config', 'G-XXXXXX', { page_path: $page.url.pathname });`"

-----

### Summary: The "Copy-Paste" Analytics Component

Since AI often messes this up, here is the correct way to handle Analytics in SvelteKit (works for GA4, PostHog, etc.).

**File:** `src/lib/components/Analytics.svelte`

```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';

  // Example: Google Analytics 4
  const GA_MEASUREMENT_ID = 'G-XXXXXXX';

  onMount(() => {
    // 1. Load the script once on first load
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) { window.dataLayer.push(args); }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  });

  // 2. Track page views on every navigation (The "SPA" Fix)
  afterNavigate(() => {
    if (typeof window.gtag !== 'undefined') {
       window.gtag('config', GA_MEASUREMENT_ID, {
         page_path: $page.url.pathname,
         page_title: document.title
       });
    }
  });
</script>

<svelte:head>
  <script>
    window.dataLayer = window.dataLayer || [];
  </script>
</svelte:head>
```

**Instruction to AI:**

> "When building the layout, please include an `Analytics.svelte` component that uses `afterNavigate` to track page views, otherwise the analytics will break."

Here is the consolidated **"Master Prompt"** you can paste into your AI tool. It covers both the HTML/SCSS design standards and the complex Analytics logic for modern rendering (SSR/SPA).

-----

### Part 1: HTML & SCSS Instructions

*Use this section to ensure the AI draws the design correctly, regardless of whether you are using Vanilla JS, Vue, or Svelte.*

> **System Instruction: HTML & SCSS Standards**
>
> **1. HTML & Accessibility (The Structure)**
>
>   * **Semantic Tags:** Never use `<div>` for layout if a better tag exists. Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
>   * **Interactive Elements:**
>       * **Links (`<a>`):** Use only for navigation (changing URL).
>       * **Buttons (`<button>`):** Use for actions (submit, toggle, modal).
>       * **Forms:** All inputs must have an associated `<label>`.
>   * **Accessibility:** All images must have `alt` text. Use `aria-expanded` for dropdowns.
>
> **2. SCSS & Layout (The Styling)**
>
>   * **Layout Engine:** Use **Flexbox** and **CSS Grid** exclusively. Do NOT use `float` or `absolute` positioning for structural layout.
>   * **Responsive Design:** Mobile-first. Write base styles for mobile, then use `@media (min-width: ...)` for larger screens.
>   * **Units:** Use `rem` for font-sizes and spacing. Use `%` or `fr` for widths. Avoid fixed `px` heights.
>   * **Naming:** Use BEM (Block Element Modifier) or a consistent class naming convention (e.g., `.card__title`).

-----

### Part 2: Analytics Instructions (The "Universal" Tracker)

*This is the critical section. It handles the confusion between Server-Side Rendering (SSR), Client-Side hydration, and Single Page Application (SPA) navigation.*

> **System Instruction: Analytics Implementation**
>
> **Context:** I need an analytics component that handles **Hybrid Rendering** (SSR + SPA).
>
> **1. The "Environment" Check (SSR vs. Client)**
>
>   * **Rule:** Analytics code MUST be wrapped in a check for `browser` or `window`.
>   * *Reason:* Do not run analytics code during Server-Side Rendering (SSR) or Prerendering build times, as `window` does not exist and it will crash the build.
>
> **2. The "Initial Load" (Hydration/Prerender)**
>
>   * **Rule:** Trigger the initial page view inside `onMount` (Svelte) or `mounted` (Vue).
>   * *Reason:* Even if the HTML is prerendered (static), the analytics script only runs once the JavaScript "hydrates" in the user's browser.
>
> **3. The "SPA Navigation" (The Route Change)**
>
>   * **Rule:** You MUST listen to the router's navigation event (e.g., `afterNavigate` in SvelteKit, `afterEach` in Vue Router).
>   * **Action:** On every route change, you must manually:
>     1.  Update the URL (e.g., `setCustomUrl` in Matomo).
>     2.  Update the Document Title.
>     3.  Fire the `trackPageView` event.
>   * *Reason:* In an SPA, the browser does not reload, so analytics tools will not record new page views unless forced.
>
> **4. Logic Flow Summary:**
>
>   * `if (server)` -\> Do nothing.
>   * `if (client_load)` -\> Initialize tracker -\> Track Initial View.
>   * `if (route_change)` -\> Update URL -\> Track Virtual View.

-----

### How to apply this logic in code

Here is how the AI should interpret those instructions for your specific stack (SvelteKit example, since it handles all these rendering modes):

#### The "Universal" Analytics Component (SvelteKit)

*Paste this code snippet to the AI if it gets stuck, asking it to adapt this pattern.*

```typescript
// src/lib/components/Analytics.svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import { browser } from '$app/environment'; // Check for SSR

  // Matomo Setup
  const MATOMO_URL = "https://your-analytics.com";
  const SITE_ID = "1";

  // Helper to push to Matomo safely
  function track(action: any[]) {
    if (browser && window._paq) {
      window._paq.push(action);
    }
  }

  // 1. INITIAL LOAD (Runs once on hydration, handles Prerendered pages too)
  onMount(() => {
    window._paq = window._paq || [];

    // Inject Script
    const script = document.createElement('script');
    script.src = `${MATOMO_URL}/matomo.js`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Init Config
    track(['setTrackerUrl', `${MATOMO_URL}/matomo.php`]);
    track(['setSiteId', SITE_ID]);
    track(['enableLinkTracking']);

    // Track the FIRST view (the one you opened)
    track(['trackPageView']);
  });

  // 2. SPA NAVIGATION (Runs on every subsequent click)
  afterNavigate((navigation) => {
    // Avoid double-counting the initial load (since onMount handles that)
    if (navigation.type === 'enter') return;

    // Tell Matomo the URL changed
    track(['setCustomUrl', $page.url.href]);
    track(['setDocumentTitle', document.title]);
    track(['trackPageView']);
  });
</script>
```





# CSS

This is a **"Golden Sass Mixin"** set designed specifically to guide AI (and you) into writing clean, responsive, and modern layout code.

You can paste this entire block at the top of your chat with the AI and say:

> *"Here are the Sass mixins I use. Please use them for all layouts instead of writing raw CSS or hardcoding styles."*

### The Golden Sass Mixins

*(Copy and paste this into your project)*

```scss
// ==========================================
// 1. BREAKPOINTS (Mobile-First Strategy)
// ==========================================
// AI often forgets mobile. This forces it to think "small screen first".
$breakpoints: (
  'sm': 480px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px
);

@mixin mq($size) {
  @if map-has-key($breakpoints, $size) {
    @media (min-width: map-get($breakpoints, $size)) {
      @content;
    }
  } @else {
    @error "Unknown breakpoint: #{$size}. Available: sm, md, lg, xl";
  }
}

// ==========================================
// 2. FLEXBOX LAYOUTS (The "Magic" Helpers)
// ==========================================

// CENTER ANYTHING
// Usage: @include flex-center;
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// FLEX ROW (Standard Layout)
// Usage: @include flex-row(space-between, center);
@mixin flex-row($justify: flex-start, $align: stretch, $gap: 0) {
  display: flex;
  flex-direction: row;
  justify-content: $justify;
  align-items: $align;
  gap: $gap;
  flex-wrap: wrap; // Prevent breaking on small screens
}

// FLEX COLUMN (Standard Stack)
// Usage: @include flex-col(flex-start, center);
@mixin flex-col($justify: flex-start, $align: stretch, $gap: 0) {
  display: flex;
  flex-direction: column;
  justify-content: $justify;
  align-items: $align;
  gap: $gap;
}

// ==========================================
// 3. CSS GRID (For "Real" 2D Layouts)
// ==========================================
// Forces AI to use Grid for complex grids instead of hacking Flexbox
@mixin grid-layout($columns: 1fr, $gap: 1rem) {
  display: grid;
  grid-template-columns: $columns;
  gap: $gap;
}

// Auto-responsive grid (No media queries needed!)
// Usage: @include grid-auto-fit(300px);
@mixin grid-auto-fit($min-size: 250px, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min-size, 1fr));
  gap: $gap;
}
```

-----

### How to use this with AI

When you are asking the AI to generate code from your drawing, append this instruction to your prompt:

> **"Use the `@include flex-row` and `@include flex-col` mixins for layout structure. Use `@include mq(md)` for responsive changes. Do NOT use floats or absolute positioning for layout."**

#### Example of the difference:

**Without Mixins (AI often outputs messy code):**

```css
/* AI often does this */
.card-container {
  width: 100%;
  float: left; /* ❌ Old school */
  margin-right: 10px;
}
.card {
  display: inline-block; /* ❌ Hard to align */
  vertical-align: top;
}
```

**With Your Mixins (Clean & Modern):**

```scss
/* With your Golden Mixins */
.card-container {
  // ✅ Instantly responsive grid
  @include grid-auto-fit(300px, 20px);
}

.card {
  // ✅ Perfectly centered content
  @include flex-col(center, center, 10px);
  padding: 20px;
}
```



# JS/TS




## Vanilla

When you are using AI to generate TypeScript code for **Vanilla JS (No Framework)** or **Vue.js**, you need to give very specific constraints. Otherwise, AI tends to write "loose" TypeScript that defeats the purpose of using it (like using `any` everywhere or ignoring `null` values).

Here is the guide on what to instruct the AI for each scenario.

-----

### Scenario 1: Vanilla TypeScript (No Framework)

When using TypeScript without a framework, the biggest challenge is **DOM manipulation safety**. AI often assumes elements exist when they might not.

#### Key Instructions to give the AI:

1.  **"Strict Null Checks for DOM Elements":** Tell the AI to verify that an element exists before using it.
      * *Bad:* `document.querySelector('.btn').addEventListener(...)` (Error: Object is possibly null)
      * *Good:* `const btn = document.querySelector('.btn'); if (btn) { ... }`
2.  **"Explicit Type Casting":** Instruct it to cast elements to their specific HTML type, not just `HTMLElement`.
      * *Why:* `HTMLElement` doesn't have `.value` (only `HTMLInputElement` does).
3.  **"Use ES Modules":** Ensure it splits code into small files (`import`/`export`) rather than writing one giant script or using global variables.

#### 📋 The Prompt Template for Vanilla TS

> "I am building a vanilla TypeScript project.
>
> 1.  Use **Strict Mode** best practices (no `any`, handle `null`/`undefined`).
> 2.  When selecting DOM elements, explicitly cast them (e.g., `as HTMLInputElement`) and check if they are not null before using them.
> 3.  Use **ES Modules** syntax.
> 4.  Keep logic separate from DOM manipulation functions where possible."

-----






## VUE

### Scenario 2: Vue.js + TypeScript

Vue 3 has excellent TypeScript support, but only if you use the **Composition API**. If the AI tries to use the old "Options API" (data, methods, mounted), the TypeScript support is terrible.

#### Key Instructions to give the AI:

1.  **"Use Script Setup":** This is non-negotiable. You must ask for `<script setup lang="ts">`. It reduces boilerplate and handles types automatically.
2.  **"Type your Props and Emits":** Don't let the AI use the array syntax for props (`props: ['title']`). It must use the generic syntax: `defineProps<{ title: string }>()`.
3.  **"Type Refs Explicitly":** If a value starts as `null` but will become a string later, the AI needs to type it manually.
      * *Bad:* `const user = ref(null)` (Inferred as `any` or `null`)
      * *Good:* `const user = ref<User | null>(null)`
4.  **"Use `defineModel`":** (For Vue 3.4+) If you are creating custom inputs, instruct the AI to use the new `defineModel` macro instead of manually handling `props` and `emit`.

#### 📋 The Prompt Template for Vue + TS

> "I am using Vue 3 with TypeScript.
>
> 1.  Use **Composition API** with `<script setup lang='ts'>`.
> 2.  Use TypeScript interfaces for all data models.
> 3.  Type `defineProps` and `defineEmits` using the **generic type argument syntax** (e.g., `defineProps<{ id: number }>()`).
> 4.  Avoid `any`. If a ref is nullable, type it like `ref<Type | null>(null)`."

-----

### Comparison: What "Good Code" Looks Like

Here is a visual comparison of what the AI *might* give you vs. what you should *ask* it for.

#### 1\. DOM Interaction (Vanilla)

| Bad AI Output (Lazy TS) | Good AI Output (Strict TS) |
| :--- | :--- |
| `const input = document.getElementById('name');`<br>`console.log(input.value);` | `const input = document.getElementById('name') as HTMLInputElement;`<br>`if (input) console.log(input.value);` |
| **Problem:** TS will yell that `input` might be null, and `HTMLElement` has no `value`. | **Solution:** Correct casting and safety check. |

#### 2\. Vue Props

| Bad AI Output (Runtime Props) | Good AI Output (Type-only Props) |
| :--- | :--- |
| `defineProps({ name: String, age: Number })` | `defineProps<{ name: string; age: number }>()` |
| **Problem:** This uses runtime validation. You lose compile-time checking in complex objects. | **Solution:** Pure TS syntax. Easier to read and strictly checked by your IDE. |

### Summary: Your "Copy-Paste" System Instruction

If you have a "Custom Instructions" or "System Prompt" area in your AI tool, paste this in to cover both cases:

> **Global TypeScript Rules:**
>
>   * **Strictness:** Never use `any`. Always define an `interface` or `type` for data objects.
>   * **Variables:** Prefer `const` over `let`.
>
> **If Context is Vanilla TS:**
>
>   * Always handle `null` checks for DOM queries.
>   * Cast DOM elements to their specific class (e.g., `HTMLButtonElement`).
>
> **If Context is Vue:**
>
>   * Always use `<script setup lang="ts">`.
>   * Use generic typing for `defineProps` and `defineEmits`.
>   * Use `ref` and `computed` with explicit types when inference isn't obvious.





---





## SVELTE KIT
When using **SvelteKit** with TypeScript, the stakes are higher because SvelteKit has a very specific "magic" way of handling types (auto-generated types) that most general-purpose AI models (like ChatGPT or Claude) often get wrong or outdated.

Here are the specific instructions to ensure the AI generates modern, type-safe SvelteKit code.

### The Big Shift: Svelte 4 vs. Svelte 5

Svelte recently introduced "Runes" (Svelte 5), which completely changes how you write components. AI models might still default to Svelte 4. You must be explicit about which version you want.

-----

### 1\. Key Instructions for the AI

Use these bullet points to force the AI into "SvelteKit Mode."

  * **"Use Svelte 5 Runes":** Explicitly tell it to use `$state`, `$derived`, `$props`, and `$effect`. (Stop it from using `export let` or ` $:  `).
  * \*\*"Use Generated Types ($types)":** SvelteKit auto-generates types for your data loaders. Tell the AI to import them from `./$types\`.
      * *Bad:* `export let data: any;`
      * *Good:* `let { data }: { data: PageData } = $props();`
  * **"Type the Load Functions":** Ensure `load` functions in `+page.server.ts` or `+page.ts` use the correct JSDoc or TS types.
  * **"No standard `<a>` tags":** Remind it to use `<a href="/path">` (standard HTML) but warn it that SvelteKit handles the routing. (AI sometimes tries to import a `Link` component like in React).

-----

### 2\. The "Golden Prompt" for SvelteKit

Copy and paste this into your AI instructions (System Prompt or at the start of a chat).

> **Context:** I am building a **SvelteKit** app using **TypeScript** and **Svelte 5**.
>
> **Rules for Code Generation:**
>
> 1.  **Component Logic:** Use **Svelte 5 Runes** syntax exclusively.
>       * Use `$state(val)` instead of `let var = val`.
>       * Use `$derived(val)` instead of `$: var = val`.
>       * Use `let { propName } = $props()` instead of `export let propName`.
> 2.  **Data Loading Types:**
>       * In `+page.svelte` or `+layout.svelte`, ALWAYS import types from the generated folder: `import type { PageData } from './$types';`
>       * In `+page.server.ts`, type the load function using `import type { PageServerLoad } from './$types';`
> 3.  **Forms:** Use SvelteKit's standard `form` actions and `use:enhance` for progressive enhancement.
> 4.  **Strict Typing:** Do not use `any`. If a server response might be null, handle it (e.g., `user: User | null`).

-----

### 3\. "Bad vs Good" AI Code Examples

#### A. Receiving Data in a Page (+page.svelte)

AI often messes this up by mixing Svelte 4 syntax with SvelteKit types.

**❌ Bad AI Output (Svelte 4 style):**

```svelte
<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData; // ❌ Old syntax
</script>

<h1>{data.user.name}</h1>
```

**✅ Good AI Output (Svelte 5 Runes):**

```svelte
<script lang="ts">
  import type { PageData } from './$types';

  // ✅ New Props Syntax
  let { data }: { data: PageData } = $props();

  // ✅ Derived state if you need to manipulate it
  let upperCaseName = $derived(data.user.name.toUpperCase());
</script>

<h1>{upperCaseName}</h1>
```

#### B. The Server Load Function (+page.server.ts)

AI often forgets to type the `event` or the return type.

**❌ Bad AI Output:**

```typescript
export async function load({ params }) { // ❌ Implicit 'any'
  return { post: "text" };
}
```

**✅ Good AI Output:**

```typescript
import type { PageServerLoad } from './$types'; // ✅ Auto-generated types

export const load: PageServerLoad = async ({ params }) => {
  return {
    post: "text"
  };
};
```

### Summary Checklist for You

When you copy code from the AI, verify these three things quickly:

1.  **Did it use `$props()`?** (If you see `export let data`, tell it "Update this to Svelte 5 syntax").
2.  **Is it importing from `./$types`?** (If not, the types won't sync with your backend code).
3.  **Is it using `<a href>`?** (SvelteKit uses standard anchor tags, unlike React/Next.js which use `<Link>`).




