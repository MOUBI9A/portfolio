# Portfolio Project Evidence Matrix

Last research pass: October 18, 2026.

This is a **safe portfolio research ledger**, not a source-code inventory. Private implementation details, secrets, internal URLs, credentials and customer data are intentionally excluded.

| Project | Evidence status | Repository status | Live/deployment evidence | Portfolio decision |
|---|---|---|---|---|
| CarHub OS / Fider | VERIFIED / SUPPORTED | Private current repos | `carhub.codes` plus Vercel deployment lineage; older CarHub V2 public deployment currently stalls on loading | FLAGSHIP |
| Creator Revenue OS | VERIFIED | Private | Vercel release-candidate deployment history; canonical release evidence with automated test gates | FLAGSHIP |
| LeadForge | VERIFIED / SUPPORTED | Private | Repo engineering evidence; Evaluator-Optimizer / Superbrain architecture | FLAGSHIP |
| NOOR | VERIFIED | Private | Long-running runtime architecture documented in repo | FLAGSHIP |
| Labgenz / HighLevelSync | VERIFIED / SUPPORTED | Mixed/private operational material | `labgenz.com` inspected; Outreach Orbit and live marketplace UI visible | STRONG CLIENT WORK |
| Pulse / Instagram Analytics | VERIFIED | Public | `instagram-analytics-omega.vercel.app` inspected and public README audited | STRONG SUPPORTING |
| ArtifactOS | VERIFIED | Public | `art-porfolio-one.vercel.app` inspected; Next.js/Supabase package evidence | STRONG SUPPORTING |
| FoodEx | VERIFIED / SUPPORTED | Public + later private evolution | Cross-platform repository/build evidence | SUPPORTING |
| IMAGE Skincare Interactive Ritual | VERIFIED | Deployment-backed | `image-skincare-five-star.vercel.app` inspected; real product photography visible | STRONG FRONTEND / CAMPAIGN |
| CIG Car | SUPPORTED | Private | Landing/product repo + client/internship context | SUPPORTING |
| MLMFUN Creator Journey | VERIFIED AS REVIEW BUILD | Deployment-backed | `mlmfun-creator-webinar.vercel.app` inspected; explicitly marked draft/demo review journey | CLIENT FUNNEL UX |
| MLMFUN Partner Briefing | VERIFIED | Deployment-backed | `mlmfun-partner-briefing.vercel.app` inspected | CLIENT LANDING PAGE |
| Soul Flower Somatics | VERIFIED AS PRE-LAUNCH | Deployment-backed | `soul-flower-sky.vercel.app` inspected; photo/booking placeholders remain | PRE-LAUNCH BRAND EXPERIENCE |
| 42 / 1337 systems work | VERIFIED | Public archive + mixed repos | GitHub code evidence | SYSTEMS FOUNDATION |
| IRC_42 | VERIFIED | Public | C++ implementation present | SYSTEMS FOUNDATION |
| CasaStitch | SUPPORTED | Private | Repository documentation | SMALL PRODUCT / ARCHIVE |
| microservice-logscape | SUPPORTED | Public | Repository exists; generic scaffold evidence | DO NOT FEATURE YET |
| tech-path-spotlight | SUPPORTED | Private | Vite/React scaffold | ARCHIVE / EXPERIMENT |
| new_trns / game hub | SUPPORTED | Mixed | Repository evidence | ARCHIVE / LEARNING |
| Bali Laundry / AquaDrop direction | IDEA / PROTOTYPE | Private/early | Early repository/product concept | NOT YET FEATURED |

## Flagship rationale

### CarHub OS / Fider
Strong product and architecture depth: multi-tenancy, RBAC, booking/fleet operations, finance/compliance boundaries, multi-role surfaces, test and production-readiness documentation. The older CarHub V2 / Infinity deployment is treated as product lineage rather than a separate flagship because the public V2 URL currently does not render beyond its loading state.

### Creator Revenue OS
Strong release evidence: canonical branch consolidation, database migrations, lint/typecheck gates, unit and integration suites, financial/security adversarial tests, responsive browser QA and accessibility checks.

### LeadForge
Demonstrates agent architecture beyond simple LLM calls: Evaluator-Optimizer loops, durable queues, deterministic lead scoring, integration ports, nurture/reply workflows, MCP and opportunity/revenue operating-system evolution.

### NOOR
Demonstrates long-running agent infrastructure: multi-provider routing, memory, approval rails, audit/safety boundaries, desktop cockpit and a fleet of MCP services.

## Vercel audit decisions

- **Pulse** is promoted because the public deployment and repository both substantiate the product: public-account lookup, watchlists, comparisons, local caching/export and an optional AI Concept Studio.
- **ArtifactOS** is promoted because its deployed product communicates a complete creator-SaaS story and its repository confirms a Next.js, Supabase and Framer Motion implementation.
- **IMAGE Skincare** remains visible as a high-quality interactive campaign/front-end example.
- **MLMFUN Creator Journey** is shown only as funnel/review UX because the deployment explicitly identifies demo/draft behavior.
- **MLMFUN Partner Briefing** is shown as client/event landing-page work.
- **Soul Flower Somatics** is explicitly labeled pre-launch because the current deployment still contains photography and booking placeholders.
- The portfolio's own Vercel projects are not listed as separate portfolio projects.

## Public-link policy

Only expose a GitHub button when repository visibility has been verified as public. A private repository may still appear as a case study with a `Private repository` label and safe high-level architecture.

Only expose a live URL when there is evidence the destination is suitable for portfolio visitors. Internal/admin URLs and unverified private previews must not be linked.

## Evidence interpretation

- **VERIFIED** — directly supported by source/release/test/deployment evidence inspected during research.
- **SUPPORTED** — multiple credible sources support the claim, but not every detail has an executed release gate.
- **CANDIDATE** — technically interesting and worth preserving, but not strong enough to displace a flagship project yet.
- **ARCHIVE / LEARNING** — useful history; omitted from the main page to keep the signal high.
