# Portfolio Registry

Last full GitHub account scan: **2026-10-18**
Primary account: `MOUBI9A`
Primary portfolio: `MOUBI9A/portfolio`

This file is the durable source-of-truth for portfolio inclusion decisions. It is intentionally conservative: repositories do not earn public placement merely by existing.

## Current portfolio hierarchy

### Flagships

| Portfolio project | Repository lineage | Visibility | Live evidence | Status | Current action |
|---|---|---|---|---|---|
| CarHub OS / Fider | `carhub-os`, `carhubos`, `carhub-infinity` | Private | `https://carhub.codes` | Active product / pilot hardening | KEEP FLAGSHIP. Treat the three repos as one evolving product lineage, not three projects. |
| Creator Revenue OS | `creator-revenue-os` | Private | Private/release evidence | Active canonical release line | KEEP FLAGSHIP. Refresh case-study AI/media evidence from current main. |
| LeadForge | `leadforge` | Private | Repository/release evidence | Late-beta engineering system | KEEP FLAGSHIP. No newer October code detected in this cycle. |
| NOOR | `NOOR` | Private | Repository/runtime evidence | Long-running private agent system | KEEP FLAGSHIP. No newer October code detected in this cycle. |

### Strong supporting / client work

| Portfolio project | Repository lineage | Visibility | Live evidence | Status | Current action |
|---|---|---|---|---|---|
| Labgenz / HighLevelSync | Operational/client work; no single canonical public repo | Mixed/private | `https://labgenz.com` | Live client systems | KEEP + dedicated case study. Maintain explicit client-work boundary. |
| Pulse / Instagram Analytics | `instagram-analytics` | Public | `https://instagram-analytics-omega.vercel.app` | Deployed | KEEP SUPPORTING |
| ArtifactOS | `art-porfolio` | Public | `https://art-porfolio-one.vercel.app` | Deployed | KEEP SUPPORTING |
| FoodEx | `foodex`, `new_foodex`, `foodex-future-fusion` | Mixed | Repo/build evidence | Evolving marketplace lineage | KEEP SUPPORTING. Treat variants as one product lineage. |
| IMAGE Skincare Interactive Ritual | `MOUBI9A.github.io` current campaign work | Public | `https://image-skincare-five-star.vercel.app` | Deployed campaign | KEEP SUPPORTING |
| CIG Car | `cigcar-casablanca-landing` | Private | Client/internship evidence | Shipped client work | KEEP IN MORE SHIPPED WORK |

## Full repository inventory

Legend: `FLAGSHIP`, `SUPPORTING`, `CLIENT`, `FOUNDATION`, `EXPERIMENT`, `ARCHIVE`, `INFRA/PROFILE`.

| Repository | Visibility | Portfolio class | Included publicly? | Decision / relationship |
|---|---|---|---|---|
| `42_Projects` | Public | FOUNDATION | Yes, grouped | Systems-programming foundation; do not promote over flagships. |
| `CTF_helper` | Public | ARCHIVE | No | Small utility; insufficient portfolio signal. |
| `Cub3d` | Private | FOUNDATION | Grouped only | 42 systems history. |
| `E-com-web` | Public | ARCHIVE | No | Earlier ecommerce/learning work. |
| `IRC_42` | Public | FOUNDATION | Grouped | Strong C++ networking evidence; keep as foundation. |
| `LIBFT_42` | Public | FOUNDATION | Grouped | Foundational C library work. |
| `Libft` | Private | FOUNDATION | No separate card | Duplicate/private lineage. |
| `MINITALK_42` | Public | FOUNDATION | Grouped | Signals/process IPC exercise. |
| `MOUBI9A` | Public | INFRA/PROFILE | Indirect | GitHub profile repository. |
| `MOUBI9A.github.io` | Public | SUPPORTING | Yes, via IMAGE project | Current October work is IMAGE Skincare campaign; not a separate flagship. |
| `NOOR` | Private | FLAGSHIP | Yes | Long-running agent / second-brain / MCP platform. |
| `PRINTF_42` | Public | FOUNDATION | Grouped | 42 foundation. |
| `Printf` | Private | FOUNDATION | No separate card | Duplicate/private lineage. |
| `Some_scripts` | Public | ARCHIVE | No | Utilities; low recruiter signal. |
| `arabesque-print-atelier` | Private | ARCHIVE | No | Do not promote without stronger product evidence. |
| `art-porfolio` | Public | SUPPORTING | Yes | ArtifactOS deployed creator-portfolio product. |
| `bali-landry` | Private | EXPERIMENT | No | Current repository is effectively empty; not portfolio-ready. |
| `carhub-infinity` | Private | FLAGSHIP LINEAGE | Via CarHub | Historical/adjacent CarHub lineage; no duplicate card. |
| `carhub-os` | Private | FLAGSHIP LINEAGE | Via CarHub | Enterprise mobility ERP/Fider lineage. |
| `carhubos` | Private | FLAGSHIP LINEAGE | Via CarHub | Current pilot/readiness lineage. |
| `casastitch-shop` | Private | ARCHIVE | No | Keep archived unless new evidence materially improves it. |
| `cigcar-casablanca-landing` | Private | CLIENT | Yes, compact | CIG Car client/internship work. |
| `creator-revenue-os` | Private | FLAGSHIP | Yes | Creator commerce / campaign / finance / AI-media platform. |
| `e-com-web-hoodies` | Public | ARCHIVE | No | Earlier ecommerce work. |
| `foodex` | Public | SUPPORTING LINEAGE | Yes, via FoodEx | Public canonical evidence. |
| `foodex-future-fusion` | Private | SUPPORTING LINEAGE | Via FoodEx | Later FoodEx evolution; no duplicate card. |
| `ft_irc` | Private | FOUNDATION | Grouped only | 42 networking lineage. |
| `game-hub-spa` | Private | ARCHIVE | No | Learning/older product work. |
| `instagram-analytics` | Public | SUPPORTING | Yes | Pulse deployed analytics product. |
| `leadforge` | Private | FLAGSHIP | Yes | Agentic B2B revenue system. |
| `microservice-logscape` | Public | EXPERIMENT | No | Generic/scaffold-level evidence; do not feature yet. |
| `moub_locker_macos` | Public | ARCHIVE | No | Small utility; preserve in GitHub history. |
| `new_foodex` | Private | SUPPORTING LINEAGE | Via FoodEx | Later FoodEx evolution; no duplicate card. |
| `new_trns` | Public | ARCHIVE | No | Learning/history. |
| `nextjs-saleor-1337store` | Public | ARCHIVE | No | Ecommerce/learning work; weaker than current products. |
| `portfolio` | Public | INFRA/PROFILE | N/A | Primary portfolio application. |
| `push_swap` | Private | FOUNDATION | Grouped only | 42 algorithmic foundation. |
| `tech-path-spotlight` | Private | EXPERIMENT | No | Vite/React experiment; not portfolio-ready. |
| `trns` | Private | ARCHIVE | No | Older/learning lineage. |
| `web` | Public | ARCHIVE | No | Older web work. |
| `xx` | Public | ARCHIVE | No | Insufficient signal / unclear product identity. |

## Recent-change watch — October 2026

A GitHub query for repositories pushed since `2026-10-01` returned only:

- `portfolio`
- `creator-revenue-os`
- `carhub-os`
- `carhubos`
- `MOUBI9A.github.io`
- `bali-landry`

### Meaningful deltas

**Creator Revenue OS** — meaningful portfolio evidence delta. Current main includes connected-user AI routing, encrypted/user-owned provider credentials for generation, multi-provider media generation, Gemini Omni video integration, and automatic provider selection/fallback behavior. This should strengthen the AI product-systems section of the case study, without replacing the finance/release evidence that makes the project credible.

**CarHub OS / Fider** — October work remains within the existing flagship lineage: role-scoped command palette/navigation, trust/fleet hardening, adversarial live HTTP/PostgreSQL testing, and Morocco-specific operational modules. No separate CarHub project should be created.

**IMAGE Skincare** — October activity in `MOUBI9A.github.io` is the already-featured interactive skincare campaign. Keep it as supporting work rather than creating a new repository-branded project.

**Bali Laundry** — repository currently has no meaningful code evidence. Do not add.

## Promotion rules

A project may be promoted only when it materially strengthens at least two of these dimensions:

1. product completeness / real user flow;
2. architecture or backend depth;
3. AI/system-design depth;
4. production/deployment evidence;
5. test/reliability/security evidence;
6. client or real-world usage;
7. originality and relevance to target roles.

A new repository name alone is never sufficient.

## Next audit protocol

On every cycle:

1. Rescan all `MOUBI9A` repositories.
2. Compare names against this inventory.
3. Query repos pushed since the previous audit date.
4. Inspect serious deltas in README/docs/commits/tests/deployments.
5. Update lineage instead of duplicating renamed/rebuilt versions.
6. Promote only evidence-backed work.
7. Record the new audit date and meaningful deltas here.
