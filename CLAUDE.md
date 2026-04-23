# MintWorks Project

## About
MintWorks is an independent crypto builder studio launching meme coins and crypto tools, targeted at the US/global market. The site is a hub showcasing all projects under the MintWorks brand.

- **Domain:** mintworks.fun
- **Hosting:** Cloudflare Pages (auto-deploys from this GitHub repo)
- **Twitter/X:** @lovesickboy24 (handle may change)
- **Audience:** English-speaking crypto community
- **Tone:** Playful, transparent, memeable — "memecoin factory" theme

## Project Structure
- `index.html` — main site (all HTML, CSS, JS in one file)
- `projects.js` — project data array (edit this to add/remove projects)
- `mascot.png` — MintWorks mascot logo

## Design System
- **Colors:** Orange (#F97316) and blue (#2563EB) as equal accents on sky-blue background (#B9E0F5)
- **Fonts:** Bangers (brand/MintWorks wordmark), Fredoka (display), Nunito (body)
- **Style:** Playful factory/cartoon aesthetic with the mascot, rounded corners, drop shadows for depth

## Content Language
- **Site content:** ALWAYS in English (target audience is US/global)
- **User instructions to you:** Portuguese is fine
- Never translate UI text to Portuguese

## Automatic Deployment
After making changes, always commit and push automatically unless the user says otherwise:
```
git add .
git commit -m "descriptive message in english"
git push
```
Cloudflare auto-deploys to mintworks.fun in 1-2 minutes.

## Important Behaviors
- Always show the diff and ask for confirmation before major changes
- Keep the single-file HTML structure — don't split into separate CSS/JS files
- When adding projects, edit `projects.js` not `index.html`

## Adding a New Project
In `projects.js`, add an object to the `PROJECTS` array with:
- `name`, `ticker`, `description`
- `logo` (image URL or empty string)
- `pairAddress` (DexScreener pair address for live data)
- `chain` ("solana", "ethereum", etc.)
- `status` ("live", "dev", or "soon")
- `twitter`, `website`, `dexscreener` (URLs)
- `ath` (number, manually updated market cap ATH in USD)
- `tags` (array of strings)

Live metrics (price, 24h change, volume, market cap) are fetched automatically from the DexScreener API via pairAddress.

## Legal / Compliance Notes
- Site must always display NFA (Not Financial Advice) disclaimers
- Never make promises about returns, ATH, or financial performance
- Keep the transparency section intact on all updates
