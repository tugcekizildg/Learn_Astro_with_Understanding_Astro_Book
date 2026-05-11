# Personal Website with Astro

A personal website built with Astro while learning from the book _Understanding Astro_ written by Ohans Emmanuel.

---

## Project Structure

```bash
src
├── components
│   ├── Footer.astro
│   ├── NavigationBar.astro
│   └── ThemeToggler.astro
│
├── layouts
│   ├── Blog.astro
│   └── Main.astro
│
├── pages
│   ├── about.astro
│   ├── beyond-tech.md
│   ├── index.astro
│   └── philosophies.md
│
└── styles
    └── global.css
```

---

## Features

- Personal homepage
- About page
- Markdown blog pages
- Reusable layouts
- Reusable Astro components
- Theme toggle functionality
- Global styling
- File-based routing

---

## Technologies Used

- Astro
- HTML5
- CSS3
- JavaScript
- Markdown

---

## Learning Goals

This project focuses on learning:

- Astro fundamentals
- Component-based architecture
- Layout composition
- Markdown integration
- Styling in Astro
- Theme switching
- File-based routing

---

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
