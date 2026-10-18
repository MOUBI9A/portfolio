# Portfolio Project Evidence Matrix

Last research pass: October 18, 2026.

This is a **safe portfolio research ledger**, not a source-code inventory. Private implementation details, secrets, internal URLs, credentials and customer data are intentionally excluded.

| Project | Evidence status | Repository status | Live/deployment evidence | Portfolio decision |
|---|---|---|---|---|
| CarHub OS / Fider | VERIFIED / SUPPORTED | Private current repos | `carhub.codes`; current repo pilot-readiness + live-PostgreSQL E2E evidence; older V2 deployment lineage | FLAGSHIP |
| Creator Revenue OS | VERIFIED | Private | Current-main release docs: 453 automated tests (316 unit + 137 DB integration across 23 suites), CI quality/readiness gates | FLAGSHIP |
| LeadForge | VERIFIED / SUPPORTED | Private | Repo engineering evidence; Evaluator-Optimizer / Superbrain architecture | FLAGSHIP |
| NOOR | VERIFIED | Private | Long-running runtime architecture documented in repo | FLAGSHIP |
| Labgenz / HighLevelSync | VERIFIED / SUPPORTED | Mixed/private operational material | `labgenz.com` inspected; live site publicly describes CRM + WordPress integration and HighLevelSync products | STRONG CLIENT WORK + CASE STUDY |
| Pulse / Instagram Analytics | VERIFIED | Public | `instagram-analytics-omega.vercel.app` + public repo | STRONG SUPPORTING |
| ArtifactOS | VERIFIED | Public | `art-porfolio-one.vercel.app`; public Next.js/Supabase repo | STRONG SUPPORTING |
| FoodEx | VERIFIED / SUPPORTED | Public + later private evolution | Cross-platform repository/build evidence | STRONG SUPPORTING |
| IMAGE Skincare Interactive Ritual | VERIFIED | Deployment-backed | `image-skincare-five-star.vercel.app`; interactive frontend | STRONG SUPPORTING |
| CIG Car | SUPPORTED | Private | Landing/product repo + client/internship context | MORE SHIPPED WORK |
| MLMFUN Creator Journey | VERIFIED AS REVIEW BUILD | Deployment-backed | `mlmfun-creator-webinar.vercel.app`; review/demo behavior disclosed | MORE SHIPPED WORK |
| MLMFUN Partner Briefing | VERIFIED | Deployment-backed | `mlmfun-partner-briefing.vercel.app` | MORE SHIPPED WORK |
| Soul Flower Somatics | VERIFIED AS PRE-LAUNCH | Deployment-backed | `soul-flower-sky.vercel.app`; placeholders disclosed | MORE SHIPPED WORK |
| 42 / 1337 systems work | VERIFIED | Public archive + mixed repos | GitHub code evidence | SYSTEMS FOUNDATION |
| IRC_42 | VERIFIED | Public | C++ implementation present | SYSTEMS FOUNDATION |
| CasaStitch | SUPPORTED | Private | Repository documentation | ARCHIVE |
| microservice-logscape | SUPPORTED | Public | Repository exists; generic scaffold evidence | DO NOT FEATURE YET |
| tech-path-spotlight | SUPPORTED | Private | Vite/React scaffold | ARCHIVE / EXPERIMENT |
| new_trns / game hub | SUPPORTED | Mixed | Repository evidence | ARCHIVE / LEARNING |
| Bali Laundry / AquaDrop direction | IDEA / PROTOTYPE | Private/early | Early repository/product concept | NOT YET FEATURED |

## Fresh evidence corrections

### CarHub OS / Fider

The previous portfolio copy said **398 backend tests**. A fresh search of the current `MOUBI9A/carhubos` main branch does not substantiate that number, so it has been removed.

Current evidence used publicly instead:
- authentication and cross-tenant access remain covered by a live-PostgreSQL backend E2E gate in CI;
- the documented project gate includes backend typecheck, unit tests, lint, production build and live-PostgreSQL E2E;
- role-specific product surfaces and explicit inspection/work-order domains are present;
- the current pilot-readiness report says payments are disabled in production rather than simulated and does not claim accounting certification;
- an older `PRODUCTION_READINESS_REPORT.md` is explicitly marked **SUPERSEDED**, so the portfolio keeps the conservative **pilot hardening** maturity label.

### Creator Revenue OS

The previous portfolio copy used a **740 automated tests** figure. A current-main documentation pass instead supports the release evidence recorded as **453 automated tests**: 316 unit + 137 database-integration tests across 23 suites. The current production-readiness documentation also records passing lint, unit tests, typecheck, database integration and API readiness/health gates. The public portfolio now uses the current documented figure.

## Flagship rationale

### CarHub OS / Fider
Strong product and architecture depth: multi-tenancy, RBAC, booking/fleet operations, inspection evidence, work orders and current pilot-readiness discipline. Older CarHub V2 / Infinity deployment is treated as lineage rather than a separate flagship.

### Creator Revenue OS
Strong release evidence: immutable campaign terms, provider-truth boundaries, database-backed finance invariants, current multi-layer test/CI evidence and adversarial security regression coverage.

### LeadForge
Demonstrates agent architecture beyond simple LLM calls: Evaluator-Optimizer loops, durable queues, deterministic lead scoring, integration ports, nurture/reply workflows, MCP and opportunity/revenue operating-system evolution.

### NOOR
Demonstrates long-running agent infrastructure: multi-provider routing, memory, approval rails, audit/safety boundaries, desktop cockpit and connected MCP services.

## Supporting-work decisions

- **Labgenz / HighLevelSync** is promoted to a dedicated case study because it gives the portfolio an inspectable external/client production environment. The case study is explicitly scoped to Hamza's client systems-engineering contribution and does **not** claim company ownership.
- **Pulse**, **ArtifactOS**, **FoodEx** and **IMAGE Skincare** remain prominent supporting work.
- **CIG Car**, **MLMFUN Creator Journey**, **MLMFUN Partner Briefing** and **Soul Flower Somatics** move to a compact “more shipped work” tier so they demonstrate range without diluting the flagships.
- **MLMFUN Creator Journey** remains labeled review/demo UX.
- **Soul Flower Somatics** remains explicitly pre-launch because public placeholders remain.

## Public-link policy

Only expose a GitHub button when repository visibility has been verified as public. Private repositories may appear as case studies with a `Private source` label and safe high-level architecture.

Only expose a live URL when the destination is suitable for portfolio visitors. Internal/admin URLs and unverified private previews are not linked.

Public-site visual captures are used only for real public deployments. Private projects use architecture/system maps clearly labeled as evidence maps, not fabricated product screenshots.

## Evidence interpretation

- **VERIFIED** — directly supported by source/release/test/deployment evidence inspected during research.
- **SUPPORTED** — multiple credible sources support the claim, but not every detail has an executed release gate.
- **CANDIDATE** — technically interesting and worth preserving, but not strong enough to displace a flagship project yet.
- **ARCHIVE / LEARNING** — useful history; omitted from the main page to keep the signal high.
