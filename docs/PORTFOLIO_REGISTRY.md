# Portfolio Registry

Last full GitHub + Vercel account scan: **2026-11-09**
Primary account: `MOUBI9A`
Primary portfolio: `MOUBI9A/portfolio`

This file is the durable source-of-truth for portfolio inclusion decisions. Repositories do not earn public placement merely by existing.

## Current portfolio hierarchy

### Flagships

| Portfolio project | Repository lineage | Visibility | Live evidence | Status | Current action |
|---|---|---|---|---|---|
| CarHub OS / Fider | `carhub-os`, `carhubos`, `carhub-infinity` | Private | `https://carhub.codes` | Active product / pilot hardening | KEEP FLAGSHIP. One evolving product lineage. |
| Creator Revenue OS | `creator-revenue-os`, `creator-revenue-os-v2` | Private | Legacy Vercel/release evidence; v2 not deployed | Active v2 rebuild / release-candidate lineage | KEEP FLAGSHIP as one lineage. Do not claim v2 production readiness yet. |
| LeadForge | `leadforge` | Private | Repository/release evidence | Late-beta engineering system | KEEP FLAGSHIP. |
| NOOR | `NOOR` | Private | Repository/runtime evidence | Long-running private agent system | KEEP FLAGSHIP. |

### Strong supporting / client work

| Portfolio project | Repository lineage | Visibility | Live evidence | Status | Current action |
|---|---|---|---|---|---|
| Labgenz / HighLevelSync | Operational/client work + `labgenz-content-production` | Mixed/private | `https://labgenz.com` | Live client systems + production operations | KEEP + dedicated case study; preserve client-work boundary. |
| Interactive Product Experience Lab | `MOUBI9A.github.io` | Public | Multiple Vercel deployments | Active multi-experience lineage | KEEP SUPPORTING as one lineage; do not create duplicate cards. |
| Pulse / Instagram Analytics | `instagram-analytics` | Public | `https://instagram-analytics-omega.vercel.app` | Deployed | KEEP SUPPORTING. |
| ArtifactOS | `art-porfolio` | Public | `https://art-porfolio-one.vercel.app` | Deployed | KEEP SUPPORTING. |
| FoodEx | `foodex`, `new_foodex`, `foodex-future-fusion` | Mixed | Repo/build evidence | Evolving marketplace lineage | KEEP SUPPORTING as one lineage. |
| CIG Car | `cigcar-casablanca-landing` | Private | Client/internship evidence | Shipped client work | KEEP IN MORE SHIPPED WORK. |

## Full repository inventory

Legend: `FLAGSHIP`, `SUPPORTING`, `CLIENT`, `FOUNDATION`, `EXPERIMENT`, `ARCHIVE`, `INFRA/PROFILE`.

| Repository | Visibility | Portfolio class | Included publicly? | Decision / relationship |
|---|---|---|---|---|
| `42_Projects` | Public | FOUNDATION | Yes, grouped | Systems-programming foundation. |
| `arabesque-print-atelier` | Private | ARCHIVE | No | Insufficient product evidence. |
| `art-porfolio` | Public | SUPPORTING | Yes | ArtifactOS deployed creator-portfolio product. |
| `bali-landry` | Private | EXPERIMENT | No | Effectively empty; not portfolio-ready. |
| `carhub-infinity` | Private | FLAGSHIP LINEAGE | Via CarHub | Historical/adjacent CarHub lineage. |
| `carhub-os` | Private | FLAGSHIP LINEAGE | Via CarHub | Enterprise mobility ERP/Fider lineage. |
| `carhubos` | Private | FLAGSHIP LINEAGE | Via CarHub | Current pilot/readiness lineage. |
| `casastitch-shop` | Private | ARCHIVE | No | Keep archived absent stronger evidence. |
| `chahid-vite` | Private | EXPERIMENT | No | React/Vite/Supabase driving-school/rental app; auth/schema/RLS evidence exists, but no verified deployment/test release evidence yet. |
| `cigcar-casablanca-landing` | Private | CLIENT | Yes, compact | CIG Car client/internship work. |
| `consumer-transformation-blueprint` | Private | EXPERIMENT | No | Insufficient substantive implementation/release evidence. |
| `creator-revenue-os` | Private | FLAGSHIP LINEAGE | Yes, via Creator Revenue OS | Legacy deployed/release lineage. |
| `creator-revenue-os-v2` | Private | FLAGSHIP LINEAGE | Via Creator Revenue OS | Active rebuild. `work` is 50 commits ahead of `main`; Checkpoints 12–14 and launch-gate hardening merged with documented exact-SHA local release evidence and independently verified successful PR #21 CI. No v2 production deployment or completed live-social integrations; preserve launch boundaries. |
| `CTF_helper` | Public | ARCHIVE | No | Small utility. |
| `Cub3d` | Private | FOUNDATION | Grouped only | 42 systems history. |
| `E-com-web` | Public | ARCHIVE | No | Earlier ecommerce/learning work. |
| `e-com-web-hoodies` | Public | ARCHIVE | No | Earlier ecommerce work. |
| `foodex` | Public | SUPPORTING LINEAGE | Yes, via FoodEx | Public canonical evidence. |
| `foodex-future-fusion` | Private | SUPPORTING LINEAGE | Via FoodEx | Later FoodEx evolution. |
| `ft_irc` | Private | FOUNDATION | Grouped only | 42 networking lineage. |
| `game-hub-spa` | Private | ARCHIVE | No | Learning/older product work. |
| `instagram-analytics` | Public | SUPPORTING | Yes | Pulse deployed analytics product. |
| `IRC_42` | Public | FOUNDATION | Grouped | C++ networking evidence. |
| `labgenz-content-production` | Private | CLIENT/OPERATIONS LINEAGE | Via Labgenz | Structured production/QA workspace; preserve inside Labgenz rather than a separate software card. |
| `leadforge` | Private | FLAGSHIP | Yes | Agentic B2B revenue system. |
| `Libft` | Private | FOUNDATION | No separate card | Duplicate/private lineage. |
| `LIBFT_42` | Public | FOUNDATION | Grouped | Foundational C library work. |
| `microservice-logscape` | Public | EXPERIMENT | No | Generic/scaffold-level evidence. |
| `MINITALK_42` | Public | FOUNDATION | Grouped | Signals/process IPC exercise. |
| `MOUBI9A` | Public | INFRA/PROFILE | Indirect | GitHub profile repository. |
| `MOUBI9A.github.io` | Public | SUPPORTING | Yes, via Experience Lab | Multi-app interactive product experience lineage with deployed experiences and CI/accessibility/performance evidence. |
| `moub_locker_macos` | Public | ARCHIVE | No | Small utility. |
| `new_foodex` | Private | SUPPORTING LINEAGE | Via FoodEx | Later FoodEx evolution. |
| `new_trns` | Public | ARCHIVE | No | Learning/history. |
| `nextjs-saleor-1337store` | Public | ARCHIVE | No | Ecommerce/learning work. |
| `NOOR` | Private | FLAGSHIP | Yes | Agent / second-brain / MCP platform. |
| `portfolio` | Public | INFRA/PROFILE | N/A | Primary portfolio application. |
| `Printf` | Private | FOUNDATION | No separate card | Duplicate/private lineage. |
| `PRINTF_42` | Public | FOUNDATION | Grouped | 42 foundation. |
| `push_swap` | Private | FOUNDATION | Grouped only | 42 algorithmic foundation. |
| `Some_scripts` | Public | ARCHIVE | No | Utilities; low recruiter signal. |
| `tech-path-spotlight` | Private | EXPERIMENT | No | Vite/React experiment. |
| `trns` | Private | ARCHIVE | No | Older/learning lineage. |
| `web` | Public | ARCHIVE | No | Older web work. |
| `xx` | Public | ARCHIVE | No | Insufficient signal / unclear identity. |

## 2026-11-02 material delta

### Creator Revenue OS v2

The v2 rebuild materially progressed since the 2026-10-26 audit. Canonical `work` is now 38 commits ahead of `main`, and Checkpoint 11 merged through PR #16. Verified evidence covers media-generation provenance, provider-operation reconciliation/idempotency, deterministic composition truth, PostgreSQL invariants and expanded integration testing. The final PR records 18/18 migrations from zero, 137 generic tests, 45/45 database persistence/invariant tests plus auth/campaign/rights/finance/provider/AI/content/media integration suites, clean typecheck/lint/schema-diff/npm-audit gates, and independent review with no HIGH/MEDIUM blockers.

Boundaries remain explicit: API/web/mobile/render-worker application build scripts are placeholders, remote GitHub Actions continues to fail before executing job steps, and no connected Vercel deployment exists for v2. Decision: strengthen the durable FLAGSHIP lineage evidence, but make no new public production/deployment claim.

### Account and deployment reconciliation

No new repository was detected since the prior audit. The connected Vercel team still lists 22 projects and no new deployment changes the portfolio hierarchy. No public portfolio content change is justified this cycle.

## 2026-11-09 material delta

The full 45-repository GitHub inventory and 22-project Vercel inventory are unchanged. Portfolio main had no open PRs at scan time. Creator Revenue OS v2 advanced from 38 to **50** commits ahead of main on canonical `work`. Checkpoints 13–14 add durable render storage and publishing orchestration with immutable publication snapshots, approval checks, at-most-once provider dispatch, durable PostgreSQL outbox/reconciliation and authenticated publishing routes. Exact local release evidence documents 22 migrations, 356 passing combined integration tests plus separately executed real-media tests, real workspace builds and dependency audit. PR #21 remote CI run 41773598016 independently reports success. Social OAuth/live adapters, analytics, CRM, agents, production UX/mobile and golden-journey deployment are still missing; do not claim production readiness. Recent Vercel preview records for legacy Creator Revenue OS and CarHub include BLOCKED states, not verified successful releases. No public portfolio promotion or UI change is justified. See [dated audit](PORTFOLIO_CTO_AUDIT_2026-11-09.md).

## Promotion rules

A project may be promoted only when it materially strengthens at least two of: product completeness, architecture/backend depth, AI/system-design depth, production/deployment evidence, test/reliability/security evidence, client/real-world usage, originality/relevance. A repository name alone is never sufficient.

## Next audit protocol

1. Rescan all `MOUBI9A` repositories and connected Vercel projects.
2. Compare names against this inventory and preserve lineages.
3. Inspect repos changed since the previous audit.
4. Verify serious candidates using code, docs, tests, CI and deployments.
5. Promote only evidence-backed work.
6. Record the audit date and meaningful deltas here and in a dated audit file.
