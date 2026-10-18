# Live Site Performance & Reliability Audit — 2026-10-19

Scope: current portfolio site, every production Vercel project on the connected `hel-moue's projects` team, plus the externally hosted Labgenz site.

Measurement origin: Vercel Sandbox in `sin1` (Singapore), chosen as a nearby Asia-region approximation for Bali. Each homepage timing uses three compressed `curl` requests under the same conditions. Payload checks include initial HTML plus directly referenced scripts, stylesheets, preloads/icons and images. Functional browser automation was unavailable during this cycle because the browser-audit service had no remaining credits, so no claim is made for exhaustive click/mobile visual QA.

## Executive result

- **Main portfolio:** healthy; no runtime errors found; warm TTFB around **0.28 s**; initial payload around **297 KB**.
- **P0 found — ArtifactOS:** production homepage TTFB was consistently **7.34–8.98 s**. Root cause: public requests and homepage data were waiting on a retired Supabase hostname. Source hotfix merged to `MOUBI9A/art-porfolio` main at `f61a821c4e9c26e567052f575563f539503b1e65`. Production deployment is pending because the Vercel Hobby account hit its daily deployment limit.
- **P1 found — Creator Revenue OS:** one Vercel 30-second hard timeout on `/api/creator-api/[...path]`. PR #90 adds a 25-second upstream timeout and controlled 504 response. Merge only after CI is green.
- **P1 evidence — CarHub:** current production is healthy and DB-ready, but Vercel grouped 19 historical `/container` `exit code 1` events across 9 users. No speculative code change is approved without the next actionable stack/startup error.
- **P1 performance — Pulse / Instagram Analytics:** homepage is fast at the edge but ships roughly **1.70 MB** initially. Around **842 KB** comes from the Tailwind browser runtime (~398 KB) plus full Lucide UMD (~444 KB). A static Tailwind build generated from the real source is only **33 KB raw / ~6.5 KB gzip**, so replacing the runtime CDN is the next highest-confidence bundle optimization.
- No broken directly referenced homepage assets/internal links were detected in the HTTP audit across the tested sites.

## Homepage baseline

| Site | Production URL | HTTP | Approx TTFB (3 runs) | Initial referenced payload | Runtime error signal | Decision |
|---|---|---:|---|---:|---|---|
| Main portfolio | `https://hamza-portfolio-2026-preview.vercel.app/` | 200 | 0.558 / 0.275 / 0.279 s | ~297 KB | None found | Healthy |
| CarHub / Fider | `https://www.carhub.codes/` | 200 | 0.486 / 0.326 / 0.294 s | ~1.27 MB | 19 historical container exits | Keep live; investigate recurrence |
| Creator Revenue OS | `https://creator-revenue-os-xi.vercel.app/` | 200 | 0.731 / 0.318 / 0.041 s | ~658 KB | One 30 s proxy timeout | PR #90 |
| Pulse / Instagram Analytics | `https://instagram-analytics-omega.vercel.app/` | 200 | ~0.023 / 0.023 / 0.025 s | ~1.70 MB | None found | Reduce blocking/runtime CDN JS |
| ArtifactOS | `https://art-porfolio-one.vercel.app/` | 200 | **8.983 / 7.342 / 7.342 s** | ~855 KB | Retired-Supabase DNS/auth failures | Source fixed; deploy pending quota |
| IMAGE Skincare | `https://image-skincare-five-star.vercel.app/` | 200 | 0.109 / 0.022 / 0.018 s | ~64 KB | None found | Healthy |
| MLMFUN Creator Journey | `https://mlmfun-creator-webinar.vercel.app/` | 200 | 0.022 / 0.298 / 0.020 s | ~11 KB | None found | Healthy |
| MLMFUN Partner Briefing | `https://mlmfun-partner-briefing.vercel.app/` | 200 | 0.315 / 0.276 / 0.316 s | ~18 KB | None found | Healthy |
| Soul Flower | `https://soul-flower-sky.vercel.app/` | 200 | 0.318 / 0.017 / 0.017 s | ~76 KB | None found | Healthy |
| Legacy portfolio | `https://hamza-portfolio-flax.vercel.app/` | 200 | 0.620 / 0.319 / 0.020 s | ~1.31 MB | None found | Legacy; not a current priority |
| CarHub V2 lineage | `https://carhub-v2.vercel.app/` | 200 | 0.872 / 0.296 / 0.284 s | ~1.04 MB | None found | Legacy lineage; do not duplicate portfolio story |
| AirPods Max 2 4K | `https://airpods-max2-4k.vercel.app/` | 200 | 0.273 / 0.023 / 0.248 s | ~350 KB | None found | Healthy enough; hero image is dominant asset |
| Labgenz | `https://labgenz.com/` | 200 | 0.627 / 0.603 / 0.588 s | ~1.25 MB | External hosting; Vercel logs unavailable | Stable but heavier; needs source/hosting access for fixes |

## ArtifactOS P0 — source fix merged

Production error evidence showed repeated failures against retired host `zvhvvxoaeskaxldoxsrs.supabase.co`, including hundreds of `fetch failed` events and auth retry failures. The public landing page had two blocking paths:

1. middleware refreshed Supabase auth for public requests; and
2. `/` synchronously queried featured profiles with no timeout.

Merged source changes:

- public/system/public-profile routes no longer wait for Supabase auth;
- only auth-dependent dashboard/login routes refresh the session;
- optional featured-profile data has a 750 ms timeout and empty-state fallback;
- auth requests have a 1.2 s fail-fast timeout;
- signed-out state is kept distinct from provider outage state.

Release gate on exact fix branch before merge:

- `npm ci` completed;
- Next.js optimized production compile passed;
- TypeScript passed;
- 19/19 static generation steps completed;
- `npm run build` exited 0.

**Production status:** not yet verified because Vercel returned `api-deployments-free-per-day` after the Hobby account exceeded its daily API deployment quota. The Night Portfolio Upgrade task is instructed to deploy and re-benchmark this exact fix when quota becomes available.

## ArtifactOS security follow-up

The clean install also exposed a separate dependency-security backlog: 21 npm audit findings (3 moderate, 16 high, 2 critical). Direct packages include a critical advisory affecting the current Next.js range plus advisories involving `eslint-config-next`, `postcss`, Supabase CLI and Tailwind. This must be handled on a separate security branch so the latency hotfix is not mixed with a framework/tooling migration.

Priority order:

1. patch Next.js to a fixed compatible 16.x release and align `eslint-config-next`;
2. apply safe lockfile/transitive fixes;
3. patch PostCSS/Supabase CLI where compatible;
4. treat any Tailwind 3→4 migration as its own compatibility change rather than `npm audit fix --force`.

## CarHub reliability + latency

Current live checks from Singapore:

- `/api/health`: 200; warm ~0.27–0.32 s; a cold/service-wakeup sample reached ~2.68 s.
- `/api/ready`: 200 with `database: reachable`; samples ~0.61–3.63 s.

The production backend is a Vercel Service currently reported in `iad1`. The current app is available and ready, so no blind restart/startup patch is justified. Capture the next `/container` exit with detailed logs and fix the concrete exception.

## Creator Revenue OS reliability

The web proxy had `maxDuration = 30` and no upstream abort, so a slow external backend could consume the full Vercel window and be killed by the platform. PR #90 changes the upstream fetch to a 25-second abort window and returns HTTP 504 for upstream timeout, leaving the Vercel 30-second limit as an outer safety boundary.

Release rule: CI must complete successfully before merge. Production deployment may remain delayed by the same Vercel daily deployment quota.

## Pulse / Instagram Analytics optimization plan

Largest currently referenced resources:

- Lucide full UMD: ~444 KB
- Tailwind CDN browser runtime: ~398 KB
- local `app.js`: ~362 KB
- Chart.js: ~201 KB
- JSZip: ~95 KB

A Tailwind 3.4.17 production build using the actual `index.html`, `app.js`, `pricing.html`, `privacy.html`, and `terms.html` content produced only **33,038 bytes raw / 6,497 bytes gzip**. The safe next implementation is:

1. commit generated static Tailwind CSS;
2. replace `cdn.tailwindcss.com` in `index.html` and `pricing.html` with the static stylesheet;
3. verify all dynamically emitted class names are in the generated output/safelist;
4. then replace full Lucide UMD with a curated icon bundle or generated SVGs;
5. lazy-load Chart.js and JSZip only when analytics/export features are opened if interaction tests prove it safe.

The current GitHub connector only supports full-file replacement and these files are very large, so this patch is queued for a workspace-capable coding run rather than risking a manual 140 KB whole-file rewrite.

## External Labgenz

Labgenz is stable but heavier than the portfolio targets: ~0.59–0.63 s TTFB from Singapore and ~1.25 MB of directly referenced initial resources. Largest observed resources include ~281 KB CSS and ~209 KB + ~186 KB JS bundles. No writable canonical Labgenz source/hosting project is connected in this audit, so no production mutation was attempted.

## Release/monitoring blockers

- Vercel Hobby daily deployment quota is currently exhausted (>100 API deployments/day). Do not misclassify the quota failure as a code/build failure.
- Browser visual/mobile/click audit service had no remaining credits in this cycle. HTTP, Vercel runtime evidence and repository/source checks were used instead.
- Detailed old CarHub container stack logs are outside the current Hobby retention window; wait for a recurrence and capture it immediately.

## Ranked next actions

1. Deploy ArtifactOS fixed main when quota resets; require three-run TTFB verification and runtime-error recheck.
2. Finish Creator Revenue OS PR #90 CI; merge only when green; deploy and verify controlled timeout behavior when quota allows.
3. Patch ArtifactOS dependency-security advisories on a separate branch.
4. Implement the precompiled-Tailwind Pulse optimization, then remeasure initial payload.
5. Capture and resolve the next CarHub `/container` exit with stack evidence; do not guess.
6. Run browser visual/mobile/accessibility interaction QA once browser-audit capacity is available again.
7. Obtain writable Labgenz source/hosting access before attempting bundle-level fixes there.
