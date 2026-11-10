# OneClick World

Central hub for the OneClick diaspora sites (one-click-world.com). Static site on GitHub Pages.

## Checklist for every new country site

1. Add the site to `data/sites.json` and a flag to `FLAGS` in `js/main.js`.
2. In the new site's footer (`js/layout.js`, `footer-bottom`), include a link to this hub:
   `<a href="https://one-click-world.com" target="_blank" rel="noopener">Part of OneClick World</a>`
   (already in the France and Singapore templates, which new sites should be copied from).
3. Set up DNS (4 A records + `www` CNAME), `CNAME` file, mailbox `info@<domain>` and leave the itinerary webhook blank until a Make scenario exists.
