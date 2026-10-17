# Hamza El Moueddane — Engineering Portfolio

Evidence-backed professional portfolio for **Hamza El Moueddane**, positioned around AI-native product engineering, full-stack systems architecture, SaaS, automation and production-focused release work.

## Portfolio strategy

The site is intentionally not a repository dump. Projects are ranked by technical depth, product complexity, implementation evidence and current maturity.

### Flagship systems

- **CarHub OS / Fider** — multi-tenant automotive SaaS / ERP and trust layer
- **Creator Revenue OS** — creator commerce, AI characters, campaign operations and finance-grade settlement workflows
- **LeadForge** — Evaluator-Optimizer multi-agent revenue operating system
- **NOOR** — private long-running personal AI agent / second-brain platform

Each flagship has a dedicated, privacy-safe internal case study covering the problem, architecture, engineering decisions, evidence, maturity and confidentiality boundary without exposing private source or credentials.

### Supporting work

HighLevelSync / LabGenz, FoodEx, IMAGE Skincare interactive frontend, CIG Car and a compact 1337 / 42 systems-programming foundation.

## Evidence policy

- Public claims should be supported by repository documentation, release reports, CI/test output, deployments or other inspectable evidence.
- Private repositories may be described at a safe architectural level but must not expose source, credentials, internal URLs or proprietary data.
- Prototype, preview and release-candidate work must not be presented as production simply because it builds.
- AI tooling is presented as engineering leverage, not a substitute for architecture, debugging, review, testing or release responsibility.

## Stack

- React 18
- TypeScript 5.9
- Vite 8
- React Router 7
- lucide-react
- Hand-built responsive CSS design system

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm audit --audit-level=moderate
npm run typecheck
npm run build
```

The repository includes a GitHub Actions workflow at `.github/workflows/portfolio-ci.yml` that uses a locked dependency install, dependency-audit gate, TypeScript project check and production build on the redesign branch and pull requests to `main`.

## Main routes

- `/` — portfolio
- `/resume` — current evidence-aligned web résumé
- `/work/carhub` — CarHub OS / Fider case study
- `/work/creator-revenue-os` — Creator Revenue OS case study
- `/work/leadforge` — LeadForge case study
- `/work/noor` — NOOR case study

## Release process

1. Work on a dedicated branch.
2. Verify locked dependencies, audit, TypeScript and production build in CI.
3. Review preview behavior on desktop, tablet and mobile.
4. Check external project links, privacy boundaries and accessibility.
5. Merge only after portfolio claims and UI are both reviewed.
