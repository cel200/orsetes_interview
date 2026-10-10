# LESGO – Landing Page

React rebuild of the [LESGO Framer design](https://lesgowebsite.framer.website/), done as a 2-hour development test.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Stack

- React 18 + Vite
- Framer Motion for load and in-view animations
- Plain CSS per component (BEM-style class names), Figtree from Google Fonts

## Sections completed

1. **Navbar + Hero**: background video, staggered blur-in headline, letter-roll hover on nav links and buttons, animated mobile menu
2. **Choose your flavor**: letter-by-letter heading reveal, infinite card marquee (pauses on hover), glow + lift on card hover
3. **Footer**: newsletter form with a "joined" state, three link columns, social links, an oversized faded LESGO logo that rises into view, and letter-roll hover on links

There's also a custom cursor (a white dot with a fading tail that turns into a ring over links and buttons). It's turned off on touch devices.

Breakpoints follow Framer's defaults: desktop ≥ 1200px, tablet 810–1199px, mobile < 810px.
`prefers-reduced-motion` is respected.

## Structure

```
src/
  components/
    Navbar/  Hero/  Flavors/  Footer/          page sections
    CustomCursor/  RollText/                shared UI + animation helpers
  styles/global.css     tokens, reset, shared button styles
```
