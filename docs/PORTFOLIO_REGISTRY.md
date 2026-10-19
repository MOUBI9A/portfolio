# Portfolio Registry

Last full GitHub + Vercel account scan: **2026-10-19**
Primary account: `MOUBI9A`
Primary portfolio: `MOUBI9A/portfolio`

This file is the durable source-of-truth for portfolio inclusion decisions. Repositories do not earn public placement merely by existing.

## Current portfolio hierarchy

### Flagships

| Portfolio project | Repository lineage | Visibility | Live evidence | Status | Current action |
|---|---|---|---|---|---|
| CarHub OS / Fider | `carhub-os`, `carhubos`, `carhub-infinity` | Private | `https://carhub.codes` | Active product / pilot hardening | KEEP FLAGSHIP. One evolving product lineage. |
| Creator Revenue OS | `creator-revenue-os` | Private | Vercel/release evidence | Active canonical release line | KEEP FLAGSHIP. |
| LeadForge | `leadforge` | Private | Repository/release evidence | Late-beta engineering system | KEEP FLAGSHIP. |
| NOOR | `NOOR` | Private | Repository/runtime evidence | Long-running private agent system | KEEP FLAGSHIP. |

### Strong supporting / client work

| Portfolio project | Repository lineage | Visibility | Live evidence | Status | Current action |
|---|---|---|---|---|---|
| Labgenz / HighLevelSync | Operational/client work; no single canonical public repo | Mixed/private | `https://labgenz.com` | Live client systems | KEEP + dedicated case study; preserve client-work boundary. |
| Interactive Product Experience Lab | `MOUBI9A.github.io` | Public | Multiple Vercel deployments | Active multi-experience lineage | PROMOTE TO SUPPORTING as one lineage. Includes IMAGE Skincare plus ten product-experience apps; do not create duplicate cards. |
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
| `chahid-vite` | Private | EXPERIMENT | No | New 2026-10-18 React/Vite/Supabase driving-school/rental app; auth/schema/RLS evidence exists, but no verified deployment/test release evidence yet. Re-evaluate later. |
| `cigcar-casablanca-landing` | Private | CLIENT | Yes, compact | CIG Car client/internship work. |
| `creator-revenue-os` | Private | FLAGSHIP | Yes | Creator commerce / campaign / finance / AI-media platform. |
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
| `leadforge` | Private | FLAGSHIP | Yes | Agentic B2B revenue system. |
| `Libft` | Private | FOUNDATION | No separate card | Duplicate/private lineage. |
| `LIBFT_42` | Public | FOUNDATION | Grouped | Foundational C library work. |
| `microservice-logscape` | Public | EXPERIMENT | No | Generic/scaffold-level evidence. |
| `MINITALK_42` | Public | FOUNDATION | Grouped | Signals/process IPC exercise. |
| `MOUBI9A` | Public | INFRA/PROFILE | Indirect | GitHub profile repository. |
| `MOUBI9A.github.io` | Public | SUPPORTING | Yes, via Experience Lab | Multi-app interactive product experience lineage: IMAGE plus ten deployed product experiences with CI/accessibility/performance evidence. |
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

## 2026-10-19 material deltas

### Interactive Product Experience Lab

`MOUBI9A.github.io` materially changed after the prior registry scan. Verified commits added/extended a production build CI gate across ten experience apps, accessibility and keyboard hardening, reduced-motion behavior, an Alphafly telemetry API, and Orphéon progressive WebGL hydration. The Orphéon performance commit reports initial JavaScript reduced from 120.8 KB gzip to 4.3 KB gzip by deferring Three.js, with all ten experience CI gates passing.

The connected Vercel account shows dedicated projects for Garmin Fenix 8 Pro, Sony A1 II, RIMOWA Original, Beosound A9, Linea Mini, Orphéon, Alphafly 3, Taycan Turbo GT, Beoplay H100 and Speedmaster 38. Decision: this is strong enough to become one supporting portfolio lineage. Public UI promotion should still pass normal portfolio build/browser/accessibility gates before merge.

### Chahid Auto-École

`chahid-vite` is a newly detected private repository. Current evidence supports React 18 + Vite + Supabase, authentication, `profiles`/`cars`/`car_rentals` schema, RLS policies and multilingual setup documentation. No connected Vercel project or verified test suite was found in this cycle. Decision: track as EXPERIMENT, not public portfolio content yet.

### Existing lineages

CarHub, Creator Revenue OS, LeadForge, NOOR, FoodEx, Pulse and ArtifactOS remain in their existing hierarchy. Bali Laundry remains non-promotable. No new repository name is treated as a new portfolio project when it belongs to an existing lineage.

## Promotion rules

A project may be promoted only when it materially strengthens at least two of: product completeness, architecture/backend depth, AI/system-design depth, production/deployment evidence, test/reliability/security evidence, client/real-world usage, originality/relevance. A repository name alone is never sufficient.

## Next audit protocol

1. Rescan all `MOUBI9A` repositories and connected Vercel projects.
2. Compare names against this inventory and preserve lineages.
3. Inspect repos changed since the previous audit.
4. Verify serious candidates using code, docs, tests, CI and deployments.
5. Promote only evidence-backed work.
6. Record the audit date and meaningful deltas here and in a dated audit file.
