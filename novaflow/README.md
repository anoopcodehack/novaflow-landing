# NovaFlow AI — Landing Page (Phase 1 Submission)

Next.js + Tailwind landing page. Feature 1 (zero-rerender pricing matrix)
and Feature 2 (bento→accordion with context lock) are fully built and working.

## 0. What's already done for you
- Full semantic page (header/main/section/footer) — `app/page.js`
- SEO metadata + OG tags — `app/layout.js`
- Feature 1: multi-currency/multi-cycle pricing engine, zero global re-renders — `components/PricingMatrix.jsx`
- Feature 2: bento grid ↔ accordion with hover-context transferred on resize — `components/BentoAccordion.jsx`
- Motion timings matching the spec (150-200ms hover, 300-400ms structural) — `app/globals.css`
- Placeholder SVGs + Google Fonts fallback so it builds immediately with zero setup

## 1. Install & run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## 2. Swap in YOUR actual hackathon assets (do this — it's 15 scoring points)

**SVGs:** Unzip `asset_package.zip`, copy the real SVGs into `public/assets/svg/`,
replacing the placeholder files (same names referenced in `components/Hero.jsx`
and `components/SocialProof.jsx`, or just edit those two files to point at your
real filenames).

**Fonts:** Copy the two provided font files into `public/fonts/`. Open `app/fonts.js`
and follow the commented instructions at the bottom of that file to switch from
the Google Fonts fallback to your local provided fonts.

**Color palette:** Open `app/globals.css`, find the `:root { }` block at the top,
replace the placeholder hex values with your provided palette.

## 3. Edit copy / feature content
- Hero headline/subtext: `components/Hero.jsx`
- Bento/accordion feature cards: `FEATURES` array in `components/BentoAccordion.jsx`
- Pricing tiers, base rates, tariffs: `MATRIX` object in `components/PricingMatrix.jsx`

## 4. Verify the zero-re-render requirement (15 pts — do this before submitting)
1. Install React DevTools browser extension
2. Open DevTools → Components tab → enable "Highlight updates when components render"
3. Toggle the Monthly/Annual switch and the currency dropdown
4. Confirm only the price `<span>` text flashes — nothing else on the page should highlight

## 5. Test the context-lock (Feature 2 — do this before submitting)
1. On desktop width, hover over one bento card (e.g. "Live Inference") and, while
   still hovering, shrink the browser window below 768px
2. Confirm the accordion opens with the SAME card ("Live Inference") expanded automatically

## 6. Build check
```bash
npm run build
```
Fix any errors before deploying — a broken build = instant disqualification.

## 7. Deploy
```bash
git init
git add .
git commit -m "novaflow landing page"
gh repo create novaflow-landing --public --source=. --push
```
Then go to vercel.com → Add New Project → import the repo → Deploy.
Update the `metadataBase` URL and OG `url` in `app/layout.js` to your real deployed URL,
commit, and redeploy (Vercel auto-redeploys on push).

## 8. Record demo video
Screen-record:
- Desktop: hover bento cards, toggle currency + billing cycle
- Resize while hovering a bento card → show accordion opens the matching panel
- Quick resize sweep across desktop/tablet/mobile for breakpoint check
Keep under 100MB, upload to Drive, set sharing to "Anyone with the link."

## 9. Submit
- Public GitHub repo link
- Live Vercel link (test it loads with no 404/500 right before submitting)
- Drive demo video link
