# itis3135-react

The Home, Introduction, Contract and About pages of my ITIS3135 course site
(Aaron Reyes's Ambitious Rhino), rebuilt in React with Vite for assignment M16.

- Shared header and footer live in `src/components`, the same way the regular
  site loads `components/header.html` and `components/footer.html`.
- `src/hooks/usePageTitle.js` updates the browser tab title on every page.
- React Router gives each page its own address; `vercel.json` sends every
  address to `index.html` so refreshing `/about` on Vercel still works.

## Run it

```
npm install
npm run dev
```

## Deploy

Import this repo on Vercel (framework preset: Vite). Build command `npm run build`,
output directory `dist`.
