# Live Site Audit — Release Status Update — 2026-10-19

This document is a reconciliation layer for `docs/LIVE_SITE_AUDIT_2026-10-19.md`.

The original audit remains unchanged as historical measurement evidence. This update records what was subsequently released, validated, fixed, or left intentionally gated during the autonomous Portfolio CTO cycle.

## Executive status

| Track | Current state | Evidence / gate |
| --- | --- | --- |
| ArtifactOS P0 retired-Supabase latency fix | **Released** | Current `main` `5c1016c84de6823b7067392f1b75dc4a6cc966c9` is a descendant of required `5ff77fc7ab5488e04b598afd8ced3a3640999bf0` and has an existing READY production deployment. Canonical `/` returns 200 and account routes resolve to the static account-unavailable experience while auth is disabled. No new retired-host runtime-error pattern was found in retained logs. The requested three-run Asia warm-TTFB remeasurement is still an evidence gap and must not be inferred from older measurements. |
| Creator Revenue OS proxy timeout | **Released / source gate satisfied** | Required `main` SHA `3d0df5650a1a17b8468e7d1d3d0ca64d0e5f63ee` is READY in production. The released proxy sets Vercel `maxDuration = 30`, aborts the upstream request at 25 seconds, and converts timeout/abort failures to controlled HTTP 504 JSON. A safe deterministic live slow-upstream fixture is not present, so no synthetic production delay was introduced merely to prove the branch. |
| CarHub public-entry / container reliability | **Released / monitor recurrence** | Required SHA `c89dd6023de7ac5a151713b382f2a3b6fe88003e` is READY in production. Unauthenticated `/` is handled as the `/landing` public entry without a client `/api/auth/me` round trip in retained runtime evidence. No new `/container` `exit code 1` recurrence was found, so crash code remains untouched pending an actionable recurrence. |
| Pulse Tailwind runtime removal | **Code + exact preview complete; browser parity gate remains** | Draft PR `MOUBI9A/instagram-analytics#3`, final SHA `9ca6102dcbb3f3f2b539e197d342f3ff531aee48`. Static Tailwind 3.4.17 output is 33,071 B raw / 6,467 B gzip. Exact-SHA Vercel preview is READY and serves `/`, `/pricing`, and `/tailwind.generated.css` without the Tailwind runtime CDN. Final exact-SHA browser automation was blocked by external `ERR_TUNNEL_CONNECTION_FAILED`, so the PR remains draft. |
| Pulse Lucide UMD removal | **Code complete; deployment/browser gate remains** | Stacked draft PR `MOUBI9A/instagram-analytics#4`, final SHA `79c6de5d4547cb3af9cfe74ca5145011471c81e2`. Reproducible source scan resolves 85 icons with zero unresolved dynamic references and zero missing exports. Generated bundle is 18,252 B raw / 6,017 B gzip versus the audit baseline of roughly 444 KB for the full UMD resource. No exact-SHA Vercel deployment exists yet. |
| ArtifactOS dependency security | **Code/CI complete; exact-preview gate remains** | Draft PR `MOUBI9A/art-porfolio#10`, final SHA `198c699f24ab6003ae83ac0803080980f1c776e9`. Clean production audit is 0 critical / 0 high / 0 moderate / 0 low; lint, typecheck, and production build pass. Exact-SHA preview creation was attempted only after confirming zero matching deployments, but Vercel Hobby returned `api-deployments-free-per-day`; no deployment was created and no retry/force was issued. |
| ArtifactOS backend restoration | **Explicitly blocked by product/cost decision** | Issue `MOUBI9A/art-porfolio#5` must not proceed until the user explicitly selects the Supabase organization and approves any nonzero cost. Security and build-safety fixes do not enable or restore the retired backend. |

## Release hygiene applied

- Reused existing Git-connected Vercel projects.
- Exact SHA deployment lists were checked before manual deployment creation.
- No forced deployment was used for these release gates.
- No duplicate deployment was created for an SHA already building or READY.
- When the Hobby daily deployment cap returned, work moved to GitHub/CI/documentation tasks rather than repeated deployment retries.
- Production was not used as a synthetic failure laboratory merely to prove timeout or crash handling.

## ArtifactOS P0 follow-up

The original audit recorded production requests waiting on retired Supabase host `zvhvvxoaeskaxldoxsrs.supabase.co`. The released descendant now serves the public experience without requiring that retired backend, and account routes are intentionally unavailable while `NEXT_PUBLIC_AUTH_ENABLED` remains disabled.

Retained Vercel logs no longer showed the previous ENOTFOUND/auth-retry pattern during the verification window. This is evidence for the runtime-error stop condition, but it is not a substitute for the still-open three-request Asia warm-TTFB measurement requirement.

## Creator Revenue OS timeout follow-up

The released route `apps/web/app/api/creator-api/[...path]/route.ts` now keeps the 30-second Vercel limit as an outer boundary and uses a 25-second upstream abort. Timeout or abort errors return a controlled 504 response.

The implementation satisfies the code-path requirement. A live test that deliberately holds a production upstream request open was not fabricated because no safe deterministic delay fixture exists in the product. If a non-destructive delay fixture is added later, it should assert response completion before 30 seconds and status 504.

## CarHub follow-up

The required `main` SHA is now in production. Public navigation no longer depends on a browser-side auth round trip before reaching the landing experience. Runtime inspection did not find a new `/container` exit-code recurrence; therefore the reliability rule remains: capture logs immediately when it recurs, then fix the concrete startup/runtime exception rather than guessing.

## Pulse optimization follow-up

### Phase 1 — Tailwind

The static Tailwind phase generated CSS from the real HTML/JS source plus the required dynamic safelist and removed the browser Tailwind compiler from the HTML entry points.

Final generated artifact:

- raw: 33,071 bytes
- gzip: 6,467 bytes
- previous runtime Tailwind baseline: ~398 KB
- direct Tailwind resource reduction: ~391.5 KB

The exact final SHA has a READY Vercel preview. Deterministic HTTP checks passed. Browser automation against the exact preview failed before document load because the external browser tunnel failed, so desktop/mobile interaction parity remains a release gate rather than an assumed pass.

### Phase 2 — Lucide

The Lucide phase is stacked on top of the Tailwind branch. It scans actual source files, captures object-literal command icons, explicitly safelists verified dynamic icon sources, fails on unresolved references, and tree-shakes only the used exports.

Final generated artifact:

- resolved icons: 85
- unresolved dynamic references: 0
- missing exports: 0
- raw: 18,252 bytes
- gzip: 6,017 bytes
- previous full UMD baseline: ~444 KB
- direct raw reduction: ~426 KB (~95.9%)

The Instagram brand glyph is represented locally because Lucide does not provide brand logos. The current application-facing `window.lucide.createIcons()` contract is preserved to avoid an unrelated broad UI rewrite.

The Lucide PR remains draft until one exact-SHA Vercel preview and browser parity are available. Chart.js and JSZip lazy loading remains a later optimization and should not be stacked until the current UI-preservation gates are complete.

## ArtifactOS dependency-security follow-up

The original 21-advisory backlog was remediated on a dedicated branch without forcing a Tailwind 4 migration and without restoring Supabase.

Final branch validation:

- production audit: 0 critical / 0 high / 0 moderate / 0 low
- lint: pass (one non-blocking `no-img-element` performance warning in the OG route)
- TypeScript: pass
- Next.js production build: pass
- disabled auth routes build without constructing a Supabase client during render

The PR remains draft only because the exact final SHA has not received the required Vercel preview; the Hobby daily cap rejected the non-forced request before a deployment was created.

## Remaining blockers / evidence gaps

1. **ArtifactOS:** capture at least three Asia-region requests on the current production descendant and require warm TTFB < 1 second.
2. **Pulse Tailwind PR #3:** complete exact-SHA desktop/mobile browser parity when browser infrastructure is available.
3. **Pulse Lucide PR #4:** obtain one exact-SHA preview without duplicate/forced deployment, then complete browser parity.
4. **ArtifactOS security PR #10:** obtain one exact-SHA preview, then smoke `/` and the disabled account routes before making the PR ready.
5. **CarHub:** keep issue #17 evidence-only until `/container` exit code 1 actually recurs; capture retained logs before changing crash code.
6. **ArtifactOS backend #5:** remain blocked until explicit Supabase organization selection and approval of any nonzero cost.
7. **Creator Revenue OS:** if a safe deterministic slow-upstream fixture becomes available, verify the live 504 completes before the 30-second platform limit.

## Next execution order

1. When Vercel Hobby capacity is available, check for automatic exact-SHA deployments first; create at most one non-forced preview only if none exists.
2. Validate ArtifactOS security PR #10 exact preview.
3. Validate Pulse Lucide PR #4 exact preview, then repeat the browser parity pass for the complete Tailwind + Lucide stack.
4. Finish the ArtifactOS three-run Asia TTFB evidence gap.
5. Only after the UI-preservation gates are green, consider Chart.js / JSZip interaction-triggered loading.
6. Keep CarHub crash monitoring evidence-driven and keep ArtifactOS backend restoration product/cost-gated.
