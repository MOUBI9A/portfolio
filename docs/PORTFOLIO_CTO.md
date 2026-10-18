# Autonomous Portfolio CTO Protocol

This repository is maintained as an evidence-backed professional portfolio for Hamza El Moueddane.

## Positioning

Primary positioning:

- Full-Stack Software Engineer
- AI Product Engineer
- Software / Solutions Architect
- Startup Product Builder

AI is presented as engineering leverage, not as a substitute for architecture, debugging, security, product judgment or release ownership.

## Start-of-cycle checklist

Every major cycle must:

1. inspect current `main` and open portfolio PRs;
2. rescan the full `MOUBI9A` GitHub account;
3. compare repositories against `docs/PORTFOLIO_REGISTRY.md`;
4. identify newly created repos and materially changed repos;
5. inspect serious candidates using repository, test, deployment and live-product evidence;
6. preserve project lineage so rewrites/renames do not create duplicate portfolio projects;
7. change public claims only when evidence supports the change.

## Evidence standard

Prefer, in order:

1. real public product screenshots;
2. repository/test/release evidence;
3. diagrams derived from inspected architecture;
4. verified live deployments;
5. clearly labeled user-confirmed context when repository/public proof cannot exist.

Never invent ownership, customer counts, revenue, test counts, production readiness, usage metrics or deployment status.

## Case-study standard

Flagship case studies should cover:

- Problem / context
- Hamza's role
- Solution
- Architecture
- Core features
- Engineering decisions
- AI / automation
- Security / reliability
- Testing / release evidence
- Technical challenges
- Outcomes / current maturity
- Stack
- Inspectable evidence
- Repository/live links when safe

## Portfolio inclusion classes

- **FLAGSHIP** — strongest proof of architecture + product engineering.
- **SUPPORTING** — real shipped/deployed work that adds range.
- **CLIENT** — real client work with contribution/ownership boundaries stated explicitly.
- **FOUNDATION** — systems/42 work grouped as engineering foundation.
- **EXPERIMENT** — technically interesting but not strong enough to feature yet.
- **ARCHIVE** — useful history that would dilute the current portfolio.

## Release process

For substantial modifications:

1. start from current `main`;
2. create a dedicated branch;
3. make evidence-backed changes;
4. run the repository's install/audit/typecheck/lint/test/build gates as applicable;
5. perform browser QA for public UI changes;
6. verify desktop/tablet/mobile and accessibility for layout changes;
7. open/update a PR;
8. merge only with green required gates;
9. verify the exact merged deployment before claiming production success.

Documentation-only audit cycles may merge after diff review and repository checks when no runtime code changes are present.

## Session resilience

After meaningful progress:

- commit/push durable state;
- update the registry/audit notes;
- avoid leaving completed work only in a transient session;
- leave explicit next actions if work stops before merge.

## Recruiter acceptance test

The portfolio should make these answers obvious:

- What does Hamza build?
- What is his strongest technical work?
- Can he design systems, not only screens?
- Can he build frontend + backend + data layers?
- Can he use AI responsibly in products and engineering?
- Can he test, secure and release software?
- What evidence supports each claim?
- How can a recruiter/client contact him?

## Durable state

- Registry: `docs/PORTFOLIO_REGISTRY.md`
- Evidence ledger: `docs/PROJECT_EVIDENCE_MATRIX.md`
- Release/audit history: `docs/FINAL_AUDIT_2026-10-18.md` and later cycle files
- Public portfolio data: `src/data/portfolio.ts`
