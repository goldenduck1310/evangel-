# EVANGEL LEARNING INSTITUTE

A lightweight, dependency-free HTML/CSS/JavaScript website built from the five supplied design references. All artwork is original SVG; no reference screenshots or invented institute facts are published.

## Run

Use `node server.mjs` (or `npm run dev` if npm is installed), then open http://127.0.0.1:5173.
The `dist` directory can be served directly by any static host.

## Files

- `dist/index.html`: document, metadata, replaceable text logo and hero.
- `dist/app.js`: hero artwork and header navigation.
- `dist/sections.js`: reusable course/icon/heading/gallery renderers, dialogs, contact adapter and section interactions.
- `dist/styles.css`, `dist/sections.css`: design tokens, responsive layouts, reduced-motion support.
- `dist/config.js`: owner-editable contact details, social URLs, canonical URL, gallery and enquiry endpoint.

## Before accepting enquiries

Set `contactEndpoint` to a real HTTPS service accepting JSON with `name`, `email`, `phone`, `interest` and `message`. It must validate inputs on the server, enforce rate limits/spam controls, handle CORS for the deployed origin, and return a 2xx response only when the enquiry has actually been accepted. Keep service secrets on the server, never in config.js. Update the privacy notice to match the chosen provider and retention practices.

The current unconfigured form validates entries but explicitly reports that nothing has been sent. It never fabricates successful delivery. It retains input on errors, disables duplicate submissions while waiting, and has a 15-second timeout. The success state is implemented for a connected endpoint.

## Replace gallery illustrations

Place optimised photos in `dist/images/` and add objects to the `gallery` array:

    { src: '/images/class-session.webp', alt: 'An accurate description of the photograph', category: 'Class sessions' }

Only publish photos for which the institute has permission. Configured photos replace the illustration collection automatically. Gallery labels and lightbox descriptions are generated from this data. Six items show initially; additional items appear using View more photos.

## Content to supply

Verified contact details, actual gallery photos, enrolment information, full privacy/terms text, and a submission service. Empty contact/social values are intentionally hidden. A canonical URL can be configured without changing the HTML.

## Validation

Run `node --check dist/app.js`, `node --check dist/sections.js`, and `node adapter-check.mjs` (or `npm run check` if npm is installed). Browser validation covers navigation targets, course dialogs, gallery, required-field/email errors, unconfigured submission, and mobile/desktop overflow. Illustrations are embedded SVG with fixed aspect ratios; uploaded images are lazy-loaded below the fold.


