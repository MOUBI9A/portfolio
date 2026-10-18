import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, LockKeyhole } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../case-study.css";

type CaseStudy = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  role: string;
  status: string;
  stack: string[];
  problem: string;
  architecture: { label: string; detail: string }[];
  decisions: string[];
  evidence: string[];
  currentState: string;
  confidentiality: string;
  live?: string;
};

const flagshipSequence = ["carhub", "creator-revenue-os", "leadforge", "noor"];

const caseStudies: Record<string, CaseStudy> = {
  carhub: {
    slug: "carhub",
    name: "CarHub OS / Fider",
    kicker: "Automotive SaaS · Multi-tenant ERP · Trust layer",
    summary:
      "A multi-tenant operating system for car-rental and mobility businesses, designed to unify fleet operations, digital inspections, bookings, maintenance work orders, customer trust and role-specific workflows without collapsing tenant or permission boundaries.",
    role: "Product architecture, full-stack systems engineering, platform design, QA and release engineering",
    status: "Active product · pilot hardening",
    stack: ["Next.js 16", "React", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    problem:
      "Rental operations tend to fragment across booking tools, spreadsheets, messaging, payment records and staff-specific processes. The product direction is a single operational layer that gives each agency its own isolated workspace while preserving clear roles, auditable business state and room for AI-assisted workflows.",
    architecture: [
      { label: "Trust & inspections", detail: "Digital check-in/check-out walkarounds, timestamped condition logs, damage intake and audit trails." },
      { label: "Fleet & work orders", detail: "Asset lifecycle, maintenance dispatch, parts inventory, diagnostics and expense reconciliation." },
      { label: "Role workspaces", detail: "Separate owner, manager, desk agent, renter and platform-admin surfaces rather than one overloaded dashboard." },
      { label: "API boundary", detail: "NestJS request pipeline with authentication, role checks, validation and service-level tenant logic before persistence." },
      { label: "Data layer", detail: "Prisma-backed PostgreSQL models for fleet, bookings, customers, payments, staff and operational records." },
      { label: "Operations & runtime", detail: "Containerized local/runtime tooling, migration discipline, test gates and production-readiness documentation." },
    ],
    decisions: [
      "Enforce tenant isolation and role permissions as database and service invariants rather than presentation-layer filters (preventing multi-tenant data leaks).",
      "Decouple vehicle inspection and condition evidence from general booking CRUD to create tamper-evident check-in/check-out audit trails.",
      "Model maintenance work orders as an explicit finite-state machine (scheduled, in-progress, completed, reconciled) to prevent untracked fleet expenses.",
      "Isolate financial, billing and compliance pathways from generic CRUD operations to maintain verifiable accounting and auditability.",
      "Deploy AI vision condition scanning strictly as an assistive layer over deterministic operational state—preventing model hallucination from corrupting fleet scheduling.",
    ],
    evidence: [
      "398 backend tests are documented across authentication, tenancy, bookings, fleet and work orders.",
      "Dedicated multi-role surfaces implemented for agency owner, fleet manager, desk agent, renter and platform administration.",
      "Inspection walkaround, damage intake and maintenance lifecycle models backed by auditable state machines.",
      "Explicit tenant, authentication, finance and audit boundaries enforced before database persistence.",
      "The public product domain is deployed at carhub.codes while the active source repositories remain private.",
    ],
    currentState:
      "The product is presented as an active system in pilot hardening—not as a finished mass-market deployment. The portfolio deliberately separates implemented architecture and test evidence from future product ambition.",
    confidentiality:
      "Current CarHub/Fider source repositories are private. This case study exposes only safe high-level product and architecture information; no internal source, secrets, customer records, credentials or private infrastructure URLs are published.",
    live: "https://carhub.codes",
  },
  "creator-revenue-os": {
    slug: "creator-revenue-os",
    name: "Creator Revenue OS",
    kicker: "Creator commerce · AI characters · Revenue operations",
    summary:
      "A model-agnostic creator-commerce platform for human creators, AI characters, brands, agencies and campaign agents, built around immutable campaign terms, explainable review, verified outcomes and finance-grade settlement rules.",
    role: "Release CTO, principal architecture, product engineering, QA, security and integration supervision",
    status: "Canonical v1 release candidate · private preview",
    stack: ["Next.js 16", "NestJS", "React Native", "PostgreSQL", "Redis", "Prisma"],
    problem:
      "Creator campaigns combine contracts, content review, attribution, provider APIs and money movement. If those concerns are treated as loose CRUD, the system can silently rewrite terms, invent provider success, double-pay, leak tenant state or make irreversible actions without enough evidence.",
    architecture: [
      { label: "Web + mobile", detail: "Next.js brand/creator workspaces plus a React Native creator surface sharing domain contracts." },
      { label: "Domain API", detail: "NestJS modular-monolith API with explicit transition rules and server-side membership/tenant checks." },
      { label: "Source of truth", detail: "PostgreSQL for durable business state, migrations and finance/domain records." },
      { label: "Async foundation", detail: "Redis plus transactional-outbox patterns for durable handoff, queues, locks and rate-limit evolution." },
      { label: "Provider edge", detail: "Social, attribution, AI and payment providers sit behind adapters so provider claims do not leak into core truth." },
    ],
    decisions: [
      "Campaign terms are strictly immutable upon creator acceptance; accepted terms cannot be silently rewritten by subsequent revisions.",
      "Financial accounting adheres to double-entry ledger invariants, escrow holds, reversals and idempotent payout execution.",
      "Provider truth boundary: external social and payment outcomes are only marked verified when external providers authoritatively confirm them.",
      "High-risk agentic actions (fund movements, contract closures) enforce mandatory human approval gates.",
      "Consolidated historical branches into one canonical release candidate verified by 740 automated tests rather than speculative merging.",
    ],
    evidence: [
      "740 / 740 automated tests passed in the canonical release gate: 583 unit and 157 database-integration tests.",
      "34 database migrations applied cleanly in release verification.",
      "Static quality/typecheck gates completed with zero reported errors in the release report.",
      "27 / 27 security red-team tests and 12 / 12 financial adversarial tests passed in release verification.",
      "Desktop, tablet, mobile and accessibility QA were completed on the canonical v1 release line.",
    ],
    currentState:
      "The canonical v1 line has strong automated/release evidence, but the public portfolio still labels it a release candidate. Private provider configuration and final production rollout remain separate from the code-quality claim.",
    confidentiality:
      "The repository and active preview are private. This page intentionally omits private URLs, source code, secrets, provider credentials, customer data and proprietary implementation detail.",
  },
  leadforge: {
    slug: "leadforge",
    name: "LeadForge",
    kicker: "AI revenue operating system · Evaluator-Optimizer agents",
    summary:
      "An autonomous B2B revenue system where specialized producing agents are evaluated by an independent critic before work advances, with durable queues, deterministic scoring, provider adapters, nurture flows and human approval boundaries.",
    role: "System architecture, agent design, backend/frontend engineering and integration architecture",
    status: "Late-beta engineering system",
    stack: ["Next.js 16", "NestJS", "Prisma 7", "PostgreSQL", "BullMQ", "Redis", "MCP"],
    problem:
      "Most outbound automation stacks stitch together sourcing, enrichment, copy generation and sending without a consistent quality gate. That makes bad ICP assumptions, weak data and poor messaging compound downstream. LeadForge makes evaluation and retry behavior part of the system rather than an afterthought.",
    architecture: [
      { label: "Operator console", detail: "Next.js surfaces for planning, runs, leads, inbox, integrations and live pipeline state." },
      { label: "Agent core", detail: "Consultant, Analyst, Extractor, Strategist and Responder operate behind an independent Critic/Evaluator loop." },
      { label: "Durable execution", detail: "BullMQ and Redis coordinate pipeline and nurture jobs instead of relying on request-lifetime work." },
      { label: "Revenue data", detail: "Prisma/PostgreSQL stores niches, runs, leads, iterations, messages, replies and evolving opportunity/evidence models." },
      { label: "Integration edge", detail: "Explicit adapters connect sourcing, enrichment, sending, automation and verification providers; MCP exposes controlled external-agent access." },
    ],
    decisions: [
      "Deterministic lead scoring executes before LLM inference, filtering invalid prospects without burning model token budget.",
      "Evaluator-Optimizer loop bounds agent retries and yields actionable structured critique rather than unbounded self-reflection loops.",
      "Provider credentials remain isolated server-side behind a secure proxy; client components never touch downstream API secrets.",
      "Instant nurture suppression upon prospect reply, backed by permanent deliverability safeguards to preserve sender reputation.",
      "System evolution from a simple outreach pipeline to an Opportunity Graph with explicit evidence, signals, revenue plays and spend guards.",
    ],
    evidence: [
      "The repository documents the full Critic-gated Evaluator-Optimizer pipeline and bounded retry behavior.",
      "BullMQ/Redis queueing, SSE run streaming, suppression and deliverability logic are implemented architectural components.",
      "The Superbrain evolution commit adds Opportunity Graph models, Evidence, Signals, Revenue Plays, Agent Factory/Lab, Meeting/Outcome learning and spend guards.",
      "The integration model covers multiple sourcing, enrichment, sending and automation providers behind explicit interfaces.",
    ],
    currentState:
      "LeadForge is treated as a late-beta engineering system with substantial implemented architecture. The portfolio avoids claiming a public commercial production rollout that has not been independently verified.",
    confidentiality:
      "The active repository is private. Only high-level architecture and verified engineering characteristics are exposed here; no provider keys, customer/prospect data, private endpoints or source are published.",
  },
  noor: {
    slug: "noor",
    name: "NOOR",
    kicker: "Personal AI agent · Second brain · MCP platform",
    summary:
      "A long-running personal AI agent and second-brain system with a TypeScript runtime, desktop cockpit, durable memory, multi-provider routing, specialized directors and a fleet of MCP connectors protected by approval and audit rails.",
    role: "Agent architecture, orchestration, safety model and full-stack implementation",
    status: "Private long-running agent system",
    stack: ["TypeScript", "Node.js", "React", "Tauri", "FastAPI", "SQLite", "MCP"],
    problem:
      "A useful personal agent needs continuity, tools and connected apps—but the same capabilities create risk if the agent can send messages, change systems or expose personal context without clear authorization. NOOR is designed around persistent context plus controlled action boundaries.",
    architecture: [
      { label: "Desktop cockpit", detail: "React/Tauri interface talks to a local HTTP/SSE bridge for chat, status, approvals, vault and system visibility." },
      { label: "Agent brain", detail: "TypeScript orchestration handles context, history, tool loops, learning and provider routing." },
      { label: "Model routing", detail: "Claude, OpenAI, Gemini and optional local Ollama participate in fallback/cooldown routing with usage accounting." },
      { label: "Specialists", detail: "Python FastAPI directors handle work, life-ops and alignment-style delegation without bypassing the main safety surface." },
      { label: "Connected tools", detail: "MCP services cover email, calendar, Slack, Notion, Drive and GitHub behind authenticated delegation endpoints." },
      { label: "Memory", detail: "SQLite conversation/fact/task state works alongside an Obsidian vault for durable human-readable knowledge." },
    ],
    decisions: [
      "Strict draft-and-approve security model: every outbound action (email, message, commit, API write) requires explicit user confirmation.",
      "Provider-agnostic routing layer with automated fallback, circuit breakers, cooldown tracking, prompt caching and token accounting.",
      "Centralized MCP execution gateway with request validation, permission checks and audit logging before running tool handlers.",
      "Personal knowledge vault is treated as a sensitive local asset—never restructured, indexed externally, or modified without user oversight.",
      "Support for local models (Ollama) ensures offline resilience without conflating local capability with frontier reasoning requirements.",
    ],
    evidence: [
      "The documented production runtime is TypeScript/Node with a React/Tauri desktop cockpit.",
      "Nine Python FastAPI services are documented: three directors plus six MCP connectors.",
      "The HTTP bridge exposes authenticated chat, SSE, memory, approval, metrics and delegation surfaces.",
      "The provider layer documents fallback/circuit-breaker behavior, prompt caching, cooldowns and token usage accounting.",
      "Outbound-action approval and audit requirements are explicit system invariants.",
    ],
    currentState:
      "NOOR is a private long-running agent system rather than a public SaaS product. Its portfolio value is the orchestration, safety, memory and connected-tool architecture—not a claim of public user scale.",
    confidentiality:
      "NOOR contains personal memory and connected-app context, so the repository is private by design. This case study never exposes the vault, secrets, private data, tool credentials or personal content.",
  },
};

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = slug ? caseStudies[slug] : undefined;

  useEffect(() => {
    document.title = project ? `${project.name} — Case Study · Hamza El Moueddane` : "Case study not found — Hamza El Moueddane";
  }, [project]);

  if (!project) {
    return (
      <main className="case-page">
        <div className="case-shell case-missing">
          <p className="case-kicker">Case study / not found</p>
          <h1>This project case study doesn’t exist.</h1>
          <Link className="case-back" to="/"><ArrowLeft size={15} /> Back to portfolio</Link>
        </div>
      </main>
    );
  }

  const currentIndex = flagshipSequence.indexOf(project.slug);
  const nextSlug = flagshipSequence[(currentIndex + 1) % flagshipSequence.length];
  const nextProject = caseStudies[nextSlug];
  const nextNumber = ((currentIndex + 1) % flagshipSequence.length) + 1;

  return (
    <main className="case-page">
      <div className="case-shell">
        <header className="case-topbar">
          <Link className="case-back" to="/#work"><ArrowLeft size={15} /> Flagship work</Link>
          <span className="case-private"><LockKeyhole size={14} /> Safe public case study</span>
        </header>

        <section className="case-hero">
          <p className="case-kicker">{project.kicker}</p>
          <h1>{project.name}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-meta-grid">
            <div><span>Role</span><strong>{project.role}</strong></div>
            <div><span>Status</span><strong>{project.status}</strong></div>
          </div>
          <div className="case-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          {project.live && <a className="case-live" href={project.live} target="_blank" rel="noreferrer">Visit public product <ExternalLink size={15} /></a>}
        </section>

        <nav className="case-jump-nav" aria-label="Case study sections">
          <a href="#problem">01 / Problem</a>
          <a href="#architecture">02 / Architecture</a>
          <a href="#decisions">03 / Decisions</a>
          <a href="#evidence">04 / Evidence</a>
          <a href="#maturity">05 / Maturity</a>
        </nav>

        <section id="problem" className="case-section case-two-column">
          <div><p className="case-section-index">01 / Problem</p><h2>The system problem behind the product.</h2></div>
          <p className="case-body-large">{project.problem}</p>
        </section>

        <section id="architecture" className="case-section">
          <div className="case-section-heading"><p className="case-section-index">02 / Architecture</p><h2>System shape.</h2></div>
          <div className="architecture-flow">
            {project.architecture.map((layer, index) => (
              <article key={layer.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{layer.label}</h3>
                <p>{layer.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="decisions" className="case-section case-two-column">
          <div><p className="case-section-index">03 / Decisions & Tradeoffs</p><h2>What I optimized for.</h2></div>
          <ol className="case-decision-list">
            {project.decisions.map((decision, index) => <li key={decision}><span>{String(index + 1).padStart(2, "0")}</span>{decision}</li>)}
          </ol>
        </section>

        <section id="evidence" className="case-section evidence-section">
          <div className="case-section-heading"><p className="case-section-index">04 / Evidence</p><h2>Claims with a boundary.</h2></div>
          <div className="case-evidence-grid">
            {project.evidence.map((item) => <div key={item}><CheckCircle2 size={17} /><span>{item}</span></div>)}
          </div>
        </section>

        <section id="maturity" className="case-section case-two-column">
          <div><p className="case-section-index">05 / Maturity</p><h2>Where it actually stands.</h2></div>
          <div>
            <p className="case-body-large">{project.currentState}</p>
            <div className="case-confidentiality"><LockKeyhole size={18} /><p>{project.confidentiality}</p></div>
          </div>
        </section>

        <section className="case-next">
          <div className="case-next-info">
            <p className="case-section-index">NEXT FLAGSHIP ({String(nextNumber).padStart(2, "0")} / 04)</p>
            <h2>{nextProject.name}</h2>
            <p className="case-next-kicker">{nextProject.kicker}</p>
          </div>
          <div className="case-next-actions">
            <Link className="button primary" to={`/work/${nextProject.slug}`}>Read case study <ArrowUpRight size={15} /></Link>
            <Link className="button ghost" to="/#work"><ArrowLeft size={15} /> All flagship systems</Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CaseStudyPage;
