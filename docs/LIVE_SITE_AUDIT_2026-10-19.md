# Live Site Performance & Reliability Audit — 2026-10-19

> Status reconciliation: 2026-10-22. This document preserves the original 2026-10-19 measurements and records which release blockers were subsequently cleared. Historical measurements below remain useful as the before-state; they must not be read as current production status where a closure note supersedes them.

Scope: current portfolio site, every production Vercel project on the connected `hel-moue's projects` team, plus the externally hosted Labgenz site.

Measurement origin: Vercel Sandbox in `sin1` (Singapore), chosen as a nearby Asia-region approximation for Bali. Each homepage timing uses compressed `curl` requests under the same conditions. Payload checks include initial HTML plus directly referenced scripts, stylesheets, preloads/icons and images. Functional browser automation was unavailable during the original cycle because the browser-audit service had no remaining credits, so no claim is made for exhaustive click/mobile visual QA from that cycle.

## 2026-10-22 closure checkpoint

- **ArtifactOS release + performance blocker cleared:** current production includes the required public-path latency hotfix lineage (`5ff77fc7ab5488e04b598afd8ced3a3640999bf0` or descendant) and the later dependency-security remediation. Production `/` was rechecked at HTTP 200; `/auth/login` resolves to the static account-unavailable experience while public auth remains disabled. The returned public root did not expose the retired Supabase hostname, and the retained production runtime-log window checked after release had no matching `zvhvvxoaeskaxldoxsrs.supabase.co` error signal. Dependency-security issue #4 is closed. A fresh Singapore (`sin1`) rebaseline subsequently returned HTTP 200 on all four requests: first/cold **0.993 s TTFB**, followed by warm samples **0.051 s / 0.034 s / 0.036 s**. All three warm samples are below the required 1-second gate. The original 7–9 second ArtifactOS timing below is therefore retained only as historical pre-fix evidence.
- **Creator Revenue OS release blocker cleared:** production includes required commit `3d0df5650a1a17b8468e7d1d3d0ca64d0e5f63ee`; the proxy timeout remediation is released with a 25-second upstream abort / controlled 504 boundary ahead of the platform's 30-second outer limit.
- **CarHub release blocker cleared for current evidence:** production includes required commit `c89dd6023de7ac5a151713b382f2a3b6fe88003e`; unauthenticated entry resolves server-side to `/landing` without an observed client `/auth/me` round-trip in the checked production window. No new `/container` exit-code-1 recurrence was present in the retained log window, so no speculative crash patch was made. Issue #17 remains an evidence-triggered watch: capture logs first if it recurs.
- **Pulse / Instagram Analytics optimization completed:** issue #1 is closed after production acceptance of static Tailwind CSS and a curated Lucide bundle, replacing the previous runtime Tailwind/full-Lucide delivery described below.
- **ArtifactOS backend restoration remains intentionally gated:** issue #5 must not proceed until the user explicitly selects the Supabase organization and approves any nonzero cost.
- **Portfolio optimization advanced:** current `main` includes lazy-loaded `/resume` and `/work/:slug` route modules at `49ba04990a910c6d6398511d6d4e10aa73652402`. The earlier CI evidence for the change passed clean install/audit, TypeScript and production build with route-specific chunks. Anonymous preview-browser QA was blocked by deployment protection, so no claim of exhaustive preview interaction QA is added here.

## Executive result — original 2026-10-19 snapshot

- **Main portfolio:** healthy; no runtime errors found; warm TTFB around **0.28 s**; initial payload around **297 KB**.
- **P0 found — ArtifactOS:** production homepage TTFB was consistently **7.34–8.98 s**. Root cause: public requests and homepage data were waiting on a retired Supabase hostname. Source hotfix merged to `MOUBI9A/art-porfolio` main at `f61a821c4e9c26e567052f575563f539503b1e65`. Production deployment was pending at the time because the Vercel Hobby account hit its daily deployment limit. **Superseded by the 2026-10-22 closure checkpoint above.**
- **P1 found — Creator Revenue OS:** one Vercel 30-second hard timeout on `/api/creator-api/[...path]`. PR #90 added a 25-second upstream timeout and controlled 504 response. **Superseded by the released closure checkpoint above.**
- **P1 evidence — CarHub:** production was healthy and DB-ready, with historical `/container` `exit code 1` events. Continue evidence-triggered monitoring only.
- **P1 performance — Pulse / Instagram Analytics:** homepage was fast at the edge but shipped roughly **1.70 MB** initially, including runtime Tailwind and full Lucide. **The Tailwind/Lucide portion of this finding is now remediated and issue #1 is closed.**
- No broken directly referenced homepage assets/internal links were detected in the original HTTP audit across the tested sites.

## Homepage baseline — original 2026-10-19 measurements

| Site | Production URL | HTTP | Approx TTFB (3 runs) | Initial referenced payload | Runtime error signal | 2026-10-22 disposition |
|---|---|---:|---|---:|---|---|
| Main portfolio | `https://hamza-portfolio-2026-preview.vercel.app/` | 200 | 0.558 / 0.275 / 0.279 s | ~297 KB | None found | Healthy; route splitting subsequently merged |
| CarHub / Fider | `https://www.carhub.codes/` | 200 | 0.486 / 0.326 / 0.294 s | ~1.27 MB | Historical container exits | Required release present; watch recurrence |
| Creator Revenue OS | `https://creator-revenue-os-xi.vercel.app/` | 200 | 0.731 / 0.318 / 0.041 s | ~658 KB | One historical 30 s proxy timeout | Timeout remediation released |
| Pulse / Instagram Analytics | `https://instagram-analytics-omega.vercel.app/` | 200 | ~0.023 / 0.023 / 0.025 s | ~1.70 MB before optimization | None found | Tailwind/Lucide optimization completed |
| ArtifactOS | `https://art-porfolio-one.vercel.app/` | 200 | **8.983 / 7.342 / 7.342 s before fix** | ~855 KB before fix | Retired-Supabase DNS/auth failures | Release + security remediation deployed; Asia warm rebaseline now 0.051 / 0.034 / 0.036 s |
| IMAGE Skincare | `https://image-skincare-five-star.vercel.app/` | 200 | 0.109 / 0.022 / 0.018 s | ~64 KB | None found | Healthy |
| MLMFUN Creator Journey | `https://mlmfun-creator-webinar.vercel.app/` | 200 | 0.022 / 0.298 / 0.020 s | ~11 KB | None found | Healthy |
| MLMFUN Partner Briefing | `https://mlmfun-partner-briefing.vercel.app/` | 200 | 0.315 / 0.276 / 0.316 s | ~18 KB | None found | Healthy |
| Soul Flower | `https://soul-flower-sky.vercel.app/` | 200 | 0.318 / 0.017 / 0.017 s | ~76 KB | None found | Healthy |
| Legacy portfolio | `https://hamza-portfolio-flax.vercel.app/` | 200 | 0.620 / 0.319 / 0.020 s | ~1.31 MB | None found | Legacy; not a current priority |
| CarHub V2 lineage | `https://carhub-v2.vercel.app/` | 200 | 0.872 / 0.296 / 0.284 s | ~1.04 MB | None found | Legacy lineage; do not duplicate portfolio story |
| AirPods Max 2 4K | `https://airpods-max2-4k.vercel.app/` | 200 | 0.273 / 0.023 / 0.248 s | ~350 KB | None found | Healthy enough; hero image is dominant asset |
| Labgenz | `https://labgenz.com/` | 200 | 0.627 / 0.603 / 0.588 s | ~1.25 MB | External hosting; Vercel logs unavailable | Stable but heavier; needs source/hosting access for fixes |

## ArtifactOS P0 — historical root cause and release closure

Production error evidence on 2026-10-19 showed repeated failures against retired host `zvhvvxoaeskaxldoxsrs.supabase.co`. The public landing page had two blocking paths: middleware refreshed Supabase auth for public requests, and `/` synchronously queried featured profiles with no timeout.

The source remediation moved public/system/public-profile routes off blocking auth refresh, added fail-fast/fallback behavior for optional data/auth, and preserved signed-out versus provider-outage state. Its pre-merge release gate completed clean install, optimized production compile, TypeScript, static generation and production build.

**2026-10-22 status:** released to production through the existing Git-connected project. Public `/` and paused-account routing were rechecked after release, and the retained runtime-log window had no retired-host match. Dependency-security remediation was subsequently merged and released as well. The Singapore rebaseline returned a 0.993 s first request and 0.051 / 0.034 / 0.036 s warm TTFB, closing the explicit Asia warm-performance gate. Do not redeploy merely to reproduce this historical incident.

## ArtifactOS security follow-up — completed

The original clean install exposed 21 npm audit findings (3 moderate, 16 high, 2 critical). The remediation was isolated from the latency hotfix, validated, merged and released. Issue #4 is closed. Tailwind major-version migration was not forced into the security patch.

## CarHub reliability + latency

Original Singapore checks:

- `/api/health`: 200; warm ~0.27–0.32 s; a cold/service-wakeup sample reached ~2.68 s.
- `/api/ready`: 200 with `database: reachable`; samples ~0.61–3.63 s.

Current rule is unchanged: the app is available and the required release lineage is live. Do not blind-restart or patch startup code. Capture the next `/container` exit with detailed logs first, then fix the concrete exception.

## Creator Revenue OS reliability — released

The web proxy previously had `maxDuration = 30` and no upstream abort. The released remediation adds a 25-second upstream abort and controlled HTTP 504 behavior, leaving the 30-second platform limit as an outer safety boundary. Do not create a duplicate deployment for the already released required commit/descendant.

## Pulse / Instagram Analytics optimization — completed

The 2026-10-19 baseline identified full Lucide UMD and Tailwind's browser runtime as two of the largest blocking resources. The static Tailwind / curated Lucide optimization has since passed production acceptance and issue #1 is closed. The original ~1.70 MB figure is therefore a historical before-state and should be remeasured before being reused as a current payload claim.

## External Labgenz

Labgenz was stable but heavier than the portfolio targets: ~0.59–0.63 s TTFB from Singapore and ~1.25 MB of directly referenced initial resources. No writable canonical Labgenz source/hosting project was connected in the original audit, so no production mutation was attempted.

## Remaining gates after reconciliation

1. Keep CarHub issue #17 evidence-triggered: capture detailed logs immediately on the next `/container` exit-code-1 recurrence before editing crash/startup code.
2. Keep ArtifactOS backend restoration issue #5 gated on explicit Supabase organization selection and approval of any nonzero cost.
3. Continue Portfolio browser/accessibility/link QA on publicly auditable production routes; protected previews must not be treated as failed application behavior.
4. Rebaseline optimized Pulse initial payload before making a new current-size claim.
5. Obtain writable Labgenz source/hosting access before bundle-level fixes.

## Deployment hygiene

- Prefer existing Git-triggered deployments and inspect exact/descendant SHA deployments before creating anything.
- Never force or duplicate a deployment for an SHA already building or deployed.
- Treat Hobby deployment-rate-limit statuses as quota signals, not code/build failures.
- Preserve historical measurements as evidence; add dated closure/rebaseline evidence rather than silently rewriting the incident history.
