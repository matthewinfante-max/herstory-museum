# HERSTORY — Offline Interactive Museum

The museum can be opened as a local HTML website **without Wi-Fi, a server, or a database**.

## Open it offline

1. Extract the entire ZIP. Do not move `index.html` outside its folder.
2. Open `herstory-museum/index.html` in Chrome, Edge, or Firefox (double-click).
3. You can disconnect Wi-Fi. The museum's layout, images, five exhibits, interactive timeline, filters, pop-up source annotations, mobile menu, and quiz run locally.
4. Keep `index.html`, `styles.css`, `script.js` and the `assets/images/` folder together.

### What works without an internet connection?

- All six galleries, navigation, and local text and images
- The local previews of the five archive objects (using **three provided local images**; some objects share a context image)
- Timeline, wartime/postwar archive filters, pop-up annotations, and quiz
- Responsive design, with system fonts (no Google Fonts dependency)

### What still needs internet?

- **Original source / archive links** open their publisher's website (Google Arts & Culture, Filipinas Heritage Library, National Archives). They are kept as proper citations and will only open if you are online. This is not required to browse the museum itself.
- The original files supplied only three images for five objects. Two source cards therefore reuse context images and are described as such; **this offline package does not include missing original scans or claim their reproduction rights**.

## What's changed in this edition

- Removed the Google Fonts network import and switched to reliable system fonts so the site renders offline.
- Kept all images on relative local file paths.
- Kept online source citations, with a note explaining that those links require internet.
- No external scripts, libraries, API calls, database, or background network requests for the museum's core experience.

## Optional: publish online later

This same directory can be uploaded to a static host like GitHub Pages. Upload the full folder contents, including the `assets` directory, to the publication root.

## Original source references (online only)

- Filipinas Heritage Library, *Women and War*: https://artsandculture.google.com/story/KAWxk5CtcXJIJw
- *First Lieutenant — Marking's Guerrillas*: https://artsandculture.google.com/asset/first-lieutenant-marking-s-guerrillas/KwEmNZ5uuIyiYw?hl=en
- *Mammy*: https://artsandculture.google.com/asset/mammy/zAFlhK3OLRkZMw?hl=en
- Filipinas Heritage Library, *Lydia Arguilla: Mothering Modern Art*: https://www.filipinaslibrary.org.ph/articles/lydia-arguilla-mothering-modern-art/
- U.S. National Archives, *Philippine Archives Collection*: https://www.archives.gov/research/military/ww2/philippine

## Historical and rights reminder

Check the archival metadata, date, rights, and exact object citation when preparing the scholarly submission. The offline website is a student educational exhibit and does not substitute for original scans or verified reproduction permissions.
