# Educa LMS — React Version

Learning Management System (LMS) Frontend built with React.js. It features a modern, responsive user interface with React Router for navigation, reusable components, course pages, authentication screens, dashboards, and a clean user experience. This project focuses on frontend development and can be integrated with a Node.js, Express.js, and MongoDB backend.
## 1. Install dependencies

```bash
npm install
```

## 2. Run the dev server

```bash
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

All original images (`pic-*.jpg`, `thumb-*.png`, `post-*.png`), videos (`vid-*.mp4`),
and SVG illustrations are already included in `public/images/` — nothing to copy over,
it works out of the box.

## What changed vs. the original

- **Routing**: 13 separate `.html` files → one React app with React Router routes
  (`/home`, `/about`, `/courses`, `/teachers`, `/teacher/:id`, `/contact`, `/login`,
  `/register`, `/profile`, `/update`, `/playlist/:id`, `/watch/:videoId`, `/search`).
- **Shared layout**: the header, sidebar, and footer that were copy-pasted into every
  HTML file are now a single `Layout` component wrapping all pages.
- **`script.js` → `UIContext`**: dark mode (still persisted to `localStorage`, same
  behavior), sidebar open/close, search-form toggle, and profile dropdown are now React
  state shared through a context, instead of global DOM manipulation.
- **`playlist.html` / `playlist-CSS.html` / `playlist-JS.html`** (three near-identical
  files) → one `Playlist` page driven by `/playlist/:id` and a shared data file.
- **Forms** (login, register, contact, update profile, add comment) are now controlled
  React inputs. They don't hit a real backend (the original didn't either — all `action=""`
  or pointed at non-existent pages), but they're wired up and ready for you to connect to
  a real API later.
- **Small functional upgrades** made possible by real state: the "like" button on the
  watch page actually toggles and updates the count, "save playlist" actually toggles,
  comments can be added/deleted, and the teacher search box actually filters.

## Project structure

```
public/
  images/       All original images, videos, and SVGs (unchanged filenames)
src/
  components/   Header, Sidebar, Footer, Layout
  context/      UIContext (dark mode, sidebar, search, profile dropdown)
  pages/        One component per route
  data.js       Centralized course/teacher/playlist/comment data
  style.css     Original stylesheet, unchanged
  App.jsx       Route definitions
  main.jsx      Entry point
```
