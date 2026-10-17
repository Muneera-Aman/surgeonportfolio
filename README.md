# Neurosurgeon Portfolio — React + Tailwind + Motion

A student frontend demonstration for Dr. Khalid Khan Zadran. It is not a verified clinic website. Appointment forms are demos only and do not submit patient information.

## Run locally

1. Install Node.js 20.19+ (or compatible version for Vite 7).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Run `npm run build` to check production output.

## Tech

React 19, Vite 7, Tailwind CSS 4, Motion, React Router, Lucide React.

## Pages

Home, About, Services, Appointments, Contact, Departments, Gallery, News.

## Photos

Add the six medical images to `public/images/` using the exact filenames in `public/images/README.txt`. The original photo files were not available in the supplied archive, so a local SVG placeholder is used when images are missing. Replace illustrative stock images with authorized clinic imagery before publishing.

## Responsive hero

The animated hero uses percentages of the image corridor for movement. Photos scale up as they move outward, and are clipped at the corridor edges. The number of cards and timing are controlled in `src/components/Hero.jsx`. As cards grow, some overlap is still possible at narrower widths. Reduced-motion preferences display static photos.

## Deployment

For hosts serving a single-page app, configure all routes to fall back to `index.html` (Netlify `_redirects` is included).
