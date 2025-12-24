Here’s the step-by-step guide using the recommended modern way:
Option 1: SvelteKit (Recommended — Full App Framework)

```bash
# 1. Create a new SvelteKit project
npm create svelte@latest my-svelte-app

# 2. Enter the project directory
cd my-svelte-app

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```
Open `http://localhost:5173` in your browser.

Option 2: Vite + Svelte (Lightweight, no framework)

```bash
# 1. Create a Vite + Svelte project
npm create vite@latest my-svelte-app -- --template svelte

# 2. Go into the folder
cd my-svelte-app

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```
Visit `http://localhost:5173` in your browser.

Prerequisites (Make sure you have these)
--Tool--Install Command
Node.js (v18+)          Download from nodejs.org
npm (comes with Node.js)        npm -v to check

### Optional: Use pnpm or bun (faster)

```bash
# With pnpm
pnpm create svelte@latest my-app
cd my-app
pnpm install
pnpm dev

# With bun
bun create svelte my-app
cd my-app
bun install
bun run dev
```

Project Structure (SvelteKit)
```text
my-svelte-app/
├── src/
│   ├── routes/
│   │   └── +page.svelte   ← Your first page
│   └── lib/
├── static/
├── svelte.config.js
└── package.json
```
Edit `src/routes/+page.svelte` to start building!
TL;DR (One-liner)
```bash
npm create svelte@latest my-app && cd my-app && npm install && npm run dev
```
You’re now running Svelte!
Start coding in .svelte files with HTML, CSS, and JS — all in one file.
Let me know if you want TypeScript, Tailwind, or SSR setup next!
nodejs.orgnodejs.org
Node.js — Run JavaScript Everywhere
Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.



3:57
Svelte Installation Guide (Terminal)
You can set up Svelte in seconds using the terminal. The recommended way is SvelteKit — the official full-stack framework.