# Focus — Responsive Frontend Interface

Project 1 (Industrial Training Kit) for the DecodeLabs Full Stack internship: a responsive frontend built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks.

## What it is

A minimal task-board interface ("Focus") demonstrating:
- **Semantic HTML5** landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **Mobile-first CSS**, single column by default, expanding at `768px` (tablet) and `1024px` (desktop)
- **CSS Grid** for macro page layout, **Flexbox** for the nav bar and micro-components
- **`clamp()`** for fluid typography
- Basic **JavaScript state management**: add tasks, check them off, mobile menu toggle
- Accessible by default: visible focus states, `aria-live` task list, labelled controls

## Files

```
index.html   – structure & content
style.css    – all styling, mobile-first with two breakpoints
script.js    – nav toggle + task list interactivity
```

## Running it locally

No build step needed. Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Palette

| Name | Hex |
|---|---|
| Mocha Mousse | `#A5A56F` |
| Ethereal Blue | `#A0D4E0` |
| Moonlit Grey | `#F2F0EA` |
