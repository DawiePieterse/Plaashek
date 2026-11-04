# plaashek.co.za: working notes for Claude

The marketing site for Plaashek, farm software sold as apps per farm. Two static pages and nothing else: no
build, no framework, no JavaScript beyond the few lines inline in each page.

- `index.html` is Afrikaans (`lang="af"`), the canonical page; `en.html` is the same page in English. They share
  every section id (`top`, `apps`, `insight`, `how`, `custom`, `pricing`, `faq`, `who`, `contact`), so the menu
  anchors and the language switch land on the same place. **A change to one page is a change to both**, in the
  other language, in the same commit.
- Styles are inline (`<style>` plus `style=""` attributes). The only outside asset is the Archivo font from Google
  Fonts; photos are `photos/*.webp` (one per app card, the hero, the founder, the quote), the icon `favicon.png`.
- `sitemap.xml` lists both pages with `hreflang`; bump its `lastmod` when the copy changes. `robots.txt` allows all.
- Contact is `info@plaashek.co.za` and WhatsApp `wa.me/27834565646`; nothing else collects anything (no forms,
  no analytics, no cookies).

## Hosting

GitHub Pages serves `main` at `plaashek.co.za` (`CNAME`; the A record points at Pages). There is no deploy step:
a push to `main` is the release. The Afrihost FTP workflow was removed on purpose (it published to a copy nobody
saw); the farms' own installs live on Afrihost, not this site.

## What the copy may promise

The apps are built in `DawiePieterse/plaashek-app` (Laravel, one install per farm) and that repo's `docs/PLAN.md`
is the truth about what exists, what is paid and what is free. The site's cards (Eienaar, Veldnotas, Boord, Kudde,
Stoor, Water, Bespuitings, Werkswinkel, Oudit, Span) describe the apps in broad terms; sharpen a card only to
match what PLAN.md says is built. The owner's summary (Eienaar) and AI analytics stay in broad terms until PLAN.md
scopes them. Prices and the order process are the owner's call: change them only when told to.

## Checks

Open both pages in a browser at phone width (320 px) and desktop before committing: no horizontal scroll, the
sticky header not covering an anchor's heading, every photo with alt text, the language switch pointing at the
other page's matching section.
