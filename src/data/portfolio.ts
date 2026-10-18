export const SITE = {
  name: "Hamza El Moueddane",
  title: "Full-Stack Software Engineer · AI Product Engineer",
  shortTitle: "Full-Stack Engineer · AI Product Engineer",
  url: "https://hamza-el-moueddane.vercel.app",
  email: "hamzamoadin37@gmail.com",
  github: "https://github.com/MOUBI9A",
  linkedin: "https://www.linkedin.com/in/hamza-el-moueddane",
  resume: "/Hamza_El_Moueddane_Resume_2026.pdf",
} as const;

export type VisualSpec =
  | {
      mode: "live";
      label: string;
      url: string;
      caption: string;
    }
  | {
      mode: "system";
      label: string;
      caption: string;
      nodes: string[];
      tone?: "orange" | "green" | "blue" | "violet";
    };

export type FlagshipProject = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  role: string;
  stack: string[];
  evidence: string[];
  outcome: string;
  status: string;
  live?: string;
  privateRepo?: boolean;
  visual: VisualSpec;
};

export type SupportingProject = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  visual?: VisualSpec;
  live?: string;
  repo?: string;
  privateRepo?: boolean;
  maturity?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  role: string;
  status: string;
  stack: string[];
  visuals: VisualSpec[];
  problem: string;
  architecture: { label: string; detail: string }[];
  decisions: string[];
  challenges: string[];
  evidence: string[];
  outcomes: string[];
  currentState: string;
  confidentiality: string;
  live?: string;
};

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: "carhub",
    name: "CarHub OS / Fider",
    kicker: "Automotive SaaS · Multi-tenant operations · Trust layer",
    description:
      "An operating system for car-rental and mobility teams that unifies fleet, bookings, inspections, work orders, role-based workflows and auditable business state.",
    role: "Product architecture, full-stack engineering, platform design, QA and release engineering",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "CI/CD"],
    evidence: [
      "Authentication and cross-tenant access are covered by a live-PostgreSQL E2E gate in the current CI path.",
      "Owner, manager, agent, renter and platform-admin workflows are separated by role and tenancy boundaries.",
      "Inspection, damage intake and maintenance/work-order flows are modeled as explicit operational state rather than generic CRUD.",
    ],
    outcome: "One product surface for the rental lifecycle, with trust and tenancy boundaries designed into the system instead of added after the fact.",
    status: "Active product · pilot hardening",
    live: "https://carhub.codes",
    privateRepo: true,
    visual: {
      mode: "live",
      label: "PUBLIC PRODUCT",
      url: "https://carhub.codes",
      caption: "Live CarHub product surface · public deployment",
    },
  },
  {
    slug: "creator-revenue-os",
    name: "Creator Revenue OS",
    kicker: "Creator commerce · Campaign operations · Finance boundaries",
    description:
      "A creator-commerce platform for creators, AI characters, brands and agencies, built around immutable campaign terms, attribution, provider truth and finance-grade settlement logic.",
    role: "Release CTO, principal architecture, product engineering, QA, security and integration supervision",
    stack: ["Next.js 16", "NestJS", "React Native", "PostgreSQL", "Redis", "Prisma"],
    evidence: [
      "Current release evidence documents 453 automated tests: 316 unit plus 137 database-integration tests across 23 suites.",
      "CI verifies lint, unit tests, typecheck, database integration and API readiness/health checks.",
      "Campaign acceptance, ledger settlement and provider verification are guarded by explicit invariants and adversarial regression coverage.",
    ],
    outcome: "A campaign system where commercial terms, external-provider claims and money movement cannot silently collapse into ordinary CRUD state.",
    status: "Canonical v1 release line · private preview",
    privateRepo: true,
    visual: {
      mode: "system",
      label: "SYSTEM MAP",
      caption: "Repository-backed campaign-to-settlement flow · not a fabricated product screenshot",
      nodes: ["Campaign terms", "Creator acceptance", "Content review", "Provider verification", "Attribution", "Ledger + payout"],
      tone: "violet",
    },
  },
  {
    slug: "leadforge",
    name: "LeadForge",
    kicker: "B2B revenue system · Evaluator-Optimizer agents",
    description:
      "An autonomous revenue workflow where research, sourcing, scoring, strategy, nurture and reply handling are coordinated through durable queues and independent quality gates.",
    role: "System architecture, agent design, backend/frontend engineering and integration architecture",
    stack: ["Next.js 16", "NestJS", "Prisma 7", "BullMQ", "Redis", "MCP", "LLM routing"],
    evidence: [
      "Deterministic lead scoring runs before model inference so invalid prospects are filtered without unnecessary LLM spend.",
      "Producer agents are evaluated by an independent Critic/Evaluator with bounded retries and structured feedback.",
      "Suppression, deliverability controls, provider adapters and durable queue execution are first-class parts of the architecture.",
    ],
    outcome: "A revenue pipeline that treats quality, cost, retries and human approval as system behavior rather than prompt conventions.",
    status: "Late-beta engineering system",
    privateRepo: true,
    visual: {
      mode: "system",
      label: "AGENT LOOP",
      caption: "Repository-backed Evaluator-Optimizer workflow",
      nodes: ["Research", "Source + score", "Producer agent", "Critic gate", "Nurture", "Reply / approval"],
      tone: "green",
    },
  },
  {
    slug: "noor",
    name: "NOOR",
    kicker: "Personal AI agent · Second brain · MCP platform",
    description:
      "A long-running personal agent with a TypeScript runtime, desktop cockpit, durable memory, provider routing and connected-tool services protected by approval and audit rails.",
    role: "Agent architecture, orchestration, safety model and full-stack implementation",
    stack: ["TypeScript", "React", "Tauri", "FastAPI", "SQLite", "MCP", "Multi-provider AI"],
    evidence: [
      "Provider routing includes fallback, cooldown behavior, prompt caching and usage accounting.",
      "Outbound actions use explicit draft-and-approve boundaries instead of autonomous writes by default.",
      "The system combines a desktop cockpit with specialized FastAPI/MCP services and authenticated HTTP/SSE orchestration.",
    ],
    outcome: "Persistent personal-agent capability without treating access to memory, messaging and connected apps as an excuse to bypass human control.",
    status: "Private long-running agent system",
    privateRepo: true,
    visual: {
      mode: "system",
      label: "AGENT CONTROL PLANE",
      caption: "Repository-backed orchestration map · private data intentionally omitted",
      nodes: ["Desktop cockpit", "Agent brain", "Memory", "Model router", "Approval gate", "MCP services"],
      tone: "blue",
    },
  },
];

export const supportingHighlights: SupportingProject[] = [
  {
    name: "Labgenz / HighLevelSync",
    type: "Client systems engineering · Live production work",
    description:
      "Client and agency engineering across CRM, WordPress and operational workflows: GoHighLevel integrations, forms, webhooks, bookings, automation, reporting and product-system implementation.",
    tags: ["GoHighLevel", "WordPress", "CRM", "Webhooks", "Automation", "Client work"],
    live: "https://labgenz.com",
    privateRepo: true,
    maturity: "Live client systems",
    visual: {
      mode: "live",
      label: "CLIENT PRODUCTION",
      url: "https://labgenz.com",
      caption: "Live Labgenz website · client/agency work, not ownership claim",
    },
  },
  {
    name: "Pulse — Instagram Analytics",
    type: "Local-first analytics · Creator strategy",
    description:
      "A privacy-first Instagram analytics dashboard for public-account lookup, watchlists, comparisons, exports and an optional multi-provider concept studio.",
    tags: ["Python", "JavaScript", "Chart.js", "Instagram Graph API", "LLM APIs", "Local-first"],
    live: "https://instagram-analytics-omega.vercel.app",
    repo: "https://github.com/MOUBI9A/instagram-analytics",
    maturity: "Deployed + public repository",
    visual: {
      mode: "live",
      label: "DEPLOYED PRODUCT",
      url: "https://instagram-analytics-omega.vercel.app",
      caption: "Pulse / Instagram Analytics public deployment",
    },
  },
  {
    name: "ArtifactOS",
    type: "Creator portfolio SaaS · Deployed product",
    description:
      "A cinematic portfolio operating system for creators, built around work archives, network connections, analytics, edge delivery and multiple interface skins.",
    tags: ["Next.js", "TypeScript", "Supabase", "Framer Motion", "Vercel", "Product design"],
    live: "https://art-porfolio-one.vercel.app",
    repo: "https://github.com/MOUBI9A/art-porfolio",
    maturity: "Deployed + public repository",
    visual: {
      mode: "live",
      label: "DEPLOYED PRODUCT",
      url: "https://art-porfolio-one.vercel.app",
      caption: "ArtifactOS public deployment",
    },
  },
  {
    name: "FoodEx",
    type: "Multi-platform marketplace",
    description:
      "Community food marketplace for customers, home chefs, drivers and admins, with role-based ordering, inventory, wallet and delivery workflows.",
    tags: ["Flutter", "Dart", "Clean Architecture", "Realtime", "Marketplace", "Mobile"],
    repo: "https://github.com/MOUBI9A/foodex",
    maturity: "Public engineering project",
    visual: {
      mode: "system",
      label: "PRODUCT MODEL",
      caption: "Marketplace roles represented from repository/product evidence",
      nodes: ["Customer", "Chef", "Order", "Driver", "Wallet", "Admin"],
      tone: "green",
    },
  },
  {
    name: "IMAGE Skincare Interactive Ritual",
    type: "Interactive campaign · Deployed frontend",
    description:
      "A four-step skincare campaign using real product photography and an interactive cleanse, hydrate, repair and protect ritual with responsive and reduced-motion behavior.",
    tags: ["Interactive UI", "Responsive", "Accessibility", "Creative frontend", "Vercel"],
    live: "https://image-skincare-five-star.vercel.app",
    maturity: "Deployed campaign experience",
    visual: {
      mode: "live",
      label: "INTERACTIVE FRONTEND",
      url: "https://image-skincare-five-star.vercel.app",
      caption: "IMAGE Skincare interactive campaign deployment",
    },
  },
];

export const moreShippedWork: SupportingProject[] = [
  {
    name: "CIG Car",
    type: "Automotive digital product",
    description: "Landing and customer-facing product work for a Casablanca vehicle-rental business.",
    tags: ["React", "TypeScript", "Automotive"],
    privateRepo: true,
    maturity: "Client / internship work",
  },
  {
    name: "MLMFUN Creator Journey",
    type: "Client funnel UX",
    description: "Multi-page webinar and partner-interest journey presented as review/demo UX rather than a live registration backend.",
    tags: ["Funnel UX", "Conversion", "Responsive"],
    live: "https://mlmfun-creator-webinar.vercel.app",
    maturity: "Review deployment",
  },
  {
    name: "MLMFUN Partner Briefing",
    type: "Client event landing page",
    description: "Focused partner-webinar landing experience with launch narrative, participation paths and registration UI.",
    tags: ["Landing page", "Event UX", "Client work"],
    live: "https://mlmfun-partner-briefing.vercel.app",
    maturity: "Deployed client page",
  },
  {
    name: "Soul Flower Somatics",
    type: "Pre-launch brand experience",
    description: "Somatic-practice concept combining breath, movement and sound; intentionally labeled pre-launch because public placeholders remain.",
    tags: ["Brand experience", "Interactive UX", "Wellness"],
    live: "https://soul-flower-sky.vercel.app",
    maturity: "Pre-launch / placeholders disclosed",
  },
];

export const caseStudySequence = ["carhub", "creator-revenue-os", "leadforge", "noor", "labgenz"] as const;

export const caseStudies: Record<string, CaseStudy> = {
  carhub: {
    slug: "carhub",
    name: "CarHub OS / Fider",
    kicker: "Automotive SaaS · Multi-tenant operations · Trust layer",
    summary:
      "A multi-tenant operating system for car-rental and mobility teams, designed to unify fleet operations, bookings, digital inspections, maintenance work orders and role-specific workflows without weakening tenant or audit boundaries.",
    role: "Product architecture, full-stack engineering, platform design, QA and release engineering",
    status: "Active product · pilot hardening",
    stack: ["Next.js", "React", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    visuals: [
      { mode: "live", label: "PUBLIC PRODUCT", url: "https://carhub.codes", caption: "Live CarHub public product surface" },
      { mode: "system", label: "OPERATING MODEL", caption: "Repository-backed operational domains", nodes: ["Tenant + roles", "Fleet", "Booking", "Inspection", "Work orders", "Finance / audit"], tone: "orange" },
    ],
    problem:
      "Rental operations often fragment across booking tools, spreadsheets, messaging, payment records and staff-specific processes. CarHub’s direction is one operational layer where each agency remains isolated, each role has a clear workspace, and condition/maintenance evidence survives the hand-off between people.",
    architecture: [
      { label: "Tenant + authorization boundary", detail: "Authentication, role checks and tenant scoping run before business state reaches persistence; current CI includes live-PostgreSQL authentication/cross-tenant E2E coverage." },
      { label: "Trust + inspections", detail: "Check-in/check-out walkarounds, condition records, damage intake and audit trails are modeled separately from generic booking state." },
      { label: "Fleet + work orders", detail: "Vehicle lifecycle, maintenance dispatch and expense-related work are represented as explicit operational flows." },
      { label: "Role workspaces", detail: "Owner, manager, agent, renter and platform administration have distinct surfaces instead of one overloaded dashboard." },
    ],
    decisions: [
      "Make tenancy and role permissions service/data invariants rather than UI filters.",
      "Keep inspection evidence separate from booking CRUD so condition history stays auditable.",
      "Represent maintenance/work-order progress as explicit state rather than free-form notes.",
      "Keep AI assistance downstream of deterministic operational state; model output must not become fleet truth by itself.",
    ],
    challenges: [
      "Preserving tenant boundaries while supporting multiple employee and customer roles.",
      "Making booking, condition, maintenance and financial state agree across one product lifecycle.",
      "Hardening a large evolving codebase while historical readiness reports contained superseded claims.",
    ],
    evidence: [
      "Current repository audit documents a live-PostgreSQL backend E2E gate covering authentication and cross-tenant access.",
      "Current dependency/security gate documents backend typecheck, unit tests, lint, production build and live-PostgreSQL E2E.",
      "The repository’s pilot-readiness report explicitly states that production payments are disabled rather than simulated and does not claim accounting certification.",
      "An older production-readiness report is marked superseded; this case study therefore uses the current conservative pilot-hardening status.",
    ],
    outcomes: [
      "A single operational model for fleet, bookings, inspections and maintenance rather than disconnected tools.",
      "Role and tenant boundaries are visible product architecture, not only backend implementation detail.",
      "Public product surface is available at carhub.codes while the active source stays private.",
    ],
    currentState:
      "Active and deployed, but still described as pilot hardening. Production database/pilot fixtures and external financial/payment conditions remain separate gates from code quality.",
    confidentiality:
      "Active CarHub source repositories are private. This portfolio exposes safe product/architecture evidence only; no secrets, customer records, credentials or private infrastructure URLs are published.",
    live: "https://carhub.codes",
  },
  "creator-revenue-os": {
    slug: "creator-revenue-os",
    name: "Creator Revenue OS",
    kicker: "Creator commerce · Campaign operations · Finance boundaries",
    summary:
      "A creator-commerce platform for creators, AI characters, brands and agencies, built around immutable campaign terms, explainable review, provider truth and finance-grade settlement rules.",
    role: "Release CTO, principal architecture, product engineering, QA, security and integration supervision",
    status: "Canonical v1 release line · private preview",
    stack: ["Next.js 16", "NestJS", "React Native", "PostgreSQL", "Redis", "Prisma"],
    visuals: [
      { mode: "system", label: "CAMPAIGN → SETTLEMENT", caption: "Repository-backed commercial state flow", nodes: ["Draft", "Publish", "Apply", "Accept terms", "Review + verify", "Ledger + payout"], tone: "violet" },
      { mode: "system", label: "TRUTH BOUNDARIES", caption: "External providers never become internal truth without verification", nodes: ["Social provider", "Webhook intake", "Verification", "Attribution", "Ledger", "Human approval"], tone: "green" },
    ],
    problem:
      "Creator campaigns combine contracts, content review, attribution, provider APIs and money movement. Treating those as loose CRUD can rewrite accepted terms, invent provider success, double-pay or move money without enough evidence.",
    architecture: [
      { label: "Product surfaces", detail: "Next.js brand/creator workspaces plus a mobile creator surface share explicit domain contracts." },
      { label: "Domain API", detail: "NestJS modules enforce campaign transitions, tenant/membership rules and provider boundaries server-side." },
      { label: "Durable state", detail: "PostgreSQL migrations hold campaign, attribution, ledger and settlement state; Redis supports asynchronous coordination." },
      { label: "Provider edge", detail: "Social, AI and payment providers sit behind adapters so external claims do not leak directly into internal truth." },
    ],
    decisions: [
      "Accepted campaign terms stay immutable instead of being silently rewritten by later revisions.",
      "Ledger/settlement behavior uses explicit accounting invariants, idempotency and reversal/hold semantics.",
      "External provider outcomes are marked verified only after provider-authoritative confirmation.",
      "High-risk commercial actions preserve human approval boundaries.",
    ],
    challenges: [
      "Keeping campaign versioning understandable while contracts and content continue evolving.",
      "Reconciling provider webhooks, attribution and finance without letting retries create duplicate truth.",
      "Maintaining web, mobile, API and database behavior behind one release gate.",
    ],
    evidence: [
      "Current release documentation records 453 automated tests: 316 unit + 137 database-integration tests across 23 suites.",
      "Current production-readiness documentation records passing lint, unit tests, typecheck, database integration and API readiness/health CI gates.",
      "Security red-team regression coverage is documented for adversarial boundaries.",
      "The release evidence includes an end-to-end campaign journey through acceptance, review and ledger settlement.",
    ],
    outcomes: [
      "Commercial terms, provider evidence and settlement are modeled as separate truth boundaries.",
      "A canonical release line replaces speculative multi-branch readiness claims.",
      "The platform can expose AI-assisted workflows without allowing model output to define financial truth.",
    ],
    currentState:
      "Strong release evidence exists on the private repository, but the portfolio intentionally labels the product as a private release line rather than claiming public commercial scale.",
    confidentiality:
      "The active repository and preview are private. This page omits private URLs, source, provider credentials, customer data and proprietary implementation details.",
  },
  leadforge: {
    slug: "leadforge",
    name: "LeadForge",
    kicker: "B2B revenue system · Evaluator-Optimizer agents",
    summary:
      "An autonomous B2B revenue system where producing agents are independently evaluated before work advances, with durable queues, deterministic scoring, provider adapters, nurture flows and human approval boundaries.",
    role: "System architecture, agent design, backend/frontend engineering and integration architecture",
    status: "Late-beta engineering system",
    stack: ["Next.js 16", "NestJS", "Prisma 7", "PostgreSQL", "BullMQ", "Redis", "MCP"],
    visuals: [
      { mode: "system", label: "EVALUATOR-OPTIMIZER", caption: "Quality gate before downstream execution", nodes: ["Research", "Source + score", "Producer", "Critic", "Retry / accept", "Execute"], tone: "green" },
      { mode: "system", label: "REVENUE LOOP", caption: "Durable pipeline around signals, nurture and replies", nodes: ["Evidence", "Opportunity", "Strategy", "Nurture", "Reply", "Human approval"], tone: "orange" },
    ],
    problem:
      "Outbound systems often chain sourcing, enrichment, copy and sending without a consistent quality gate. Weak assumptions then compound downstream. LeadForge makes evaluation, bounded retries, suppression and cost control part of the system itself.",
    architecture: [
      { label: "Operator console", detail: "Next.js surfaces expose planning, runs, leads, inbox, integrations and pipeline state." },
      { label: "Agent core", detail: "Specialized producers run behind an independent Critic/Evaluator instead of grading their own output." },
      { label: "Durable execution", detail: "BullMQ and Redis coordinate pipeline/nurture work outside request lifetime." },
      { label: "Integration edge", detail: "Sourcing, enrichment, sending, verification and automation providers are isolated behind explicit interfaces; MCP exposes controlled external access." },
    ],
    decisions: [
      "Run deterministic lead scoring before LLM inference.",
      "Bound retries and return structured critique instead of allowing unbounded self-reflection loops.",
      "Suppress nurture immediately when a prospect replies and treat deliverability as a permanent safety invariant.",
      "Keep provider credentials server-side behind adapters/proxies rather than exposing downstream API secrets to clients.",
    ],
    challenges: [
      "Balancing autonomous research/copy iteration against cost and runaway-loop risk.",
      "Preserving sender reputation when asynchronous nurture and real replies race each other.",
      "Evolving from an outreach pipeline into an evidence/opportunity/revenue model without losing deterministic controls.",
    ],
    evidence: [
      "Repository architecture documents the Critic-gated Evaluator-Optimizer pipeline and bounded retry behavior.",
      "BullMQ/Redis queueing, run streaming, suppression and deliverability logic are implemented architectural components.",
      "The Superbrain evolution adds explicit opportunity/evidence/signal/revenue-play models and spend guards.",
      "Multiple sourcing, enrichment, sending and automation providers are kept behind integration interfaces.",
    ],
    outcomes: [
      "Bad leads can be rejected before model spend.",
      "Agent quality is an independently evaluated state transition rather than a prompt instruction.",
      "Human approval remains available at the actions where business/reputation risk is highest.",
    ],
    currentState:
      "A substantial private late-beta engineering system. The portfolio does not claim a public commercial rollout or customer scale that has not been independently verified.",
    confidentiality:
      "The active repository is private. This case study exposes safe architecture and engineering characteristics only; provider keys, prospect data and private endpoints remain private.",
  },
  noor: {
    slug: "noor",
    name: "NOOR",
    kicker: "Personal AI agent · Second brain · MCP platform",
    summary:
      "A long-running personal agent and second-brain system with a TypeScript runtime, desktop cockpit, durable memory, multi-provider routing and connected-tool services protected by approval and audit rails.",
    role: "Agent architecture, orchestration, safety model and full-stack implementation",
    status: "Private long-running agent system",
    stack: ["TypeScript", "Node.js", "React", "Tauri", "FastAPI", "SQLite", "MCP"],
    visuals: [
      { mode: "system", label: "CONTROL PLANE", caption: "Private content omitted; capability boundaries shown", nodes: ["Cockpit", "Agent brain", "Memory", "Provider router", "Approval", "MCP services"], tone: "blue" },
      { mode: "system", label: "SAFE ACTION LOOP", caption: "Connected tools stay behind explicit approval", nodes: ["Intent", "Plan", "Draft action", "Permission check", "Approve", "Audit"], tone: "violet" },
    ],
    problem:
      "A useful personal agent needs continuity, memory and connected tools, but those same capabilities create risk if the agent can message people, change systems or expose personal context without clear authorization.",
    architecture: [
      { label: "Desktop cockpit", detail: "React/Tauri interface communicates with a local HTTP/SSE bridge for chat, status, approvals, memory and system visibility." },
      { label: "Agent brain", detail: "TypeScript orchestration handles context, tool loops, provider routing and usage/accounting behavior." },
      { label: "Connected services", detail: "Specialized FastAPI/MCP services isolate external capabilities behind authenticated delegation paths." },
      { label: "Memory", detail: "Durable conversation/fact/task state is kept distinct from outbound-action authorization." },
    ],
    decisions: [
      "Outbound writes follow a draft-and-approve model instead of autonomous execution by default.",
      "Provider routing includes fallback/cooldown behavior so availability is not tied to one model vendor.",
      "MCP execution stays behind validation, permission checks and audit boundaries.",
      "Sensitive personal knowledge is treated as a private local asset rather than portfolio/demo material.",
    ],
    challenges: [
      "Giving an agent enough continuity to be useful without turning memory into an uncontrolled data surface.",
      "Supporting multiple providers and tools while keeping failure/cooldown behavior predictable.",
      "Keeping private connected-app context out of public evidence while still explaining the architecture credibly.",
    ],
    evidence: [
      "Repository documentation describes the TypeScript/Node runtime and React/Tauri desktop cockpit.",
      "The provider layer documents fallback/cooldown behavior, prompt caching and usage accounting.",
      "Authenticated HTTP/SSE surfaces expose chat, memory, approval and delegation behavior.",
      "Outbound-action approval and audit requirements are documented as system invariants.",
    ],
    outcomes: [
      "Persistent assistant context can coexist with explicit human control over consequential actions.",
      "Provider/tool connectivity is modular rather than hard-coded into the conversational layer.",
      "The public portfolio can demonstrate agent architecture without exposing personal memory or credentials.",
    ],
    currentState:
      "A private long-running personal system rather than a public SaaS product. Its portfolio value is orchestration, safety, memory and connected-tool architecture—not user-scale claims.",
    confidentiality:
      "NOOR contains personal memory and connected-app context, so its repository is private by design. This case study never exposes the vault, secrets, credentials or personal content.",
  },
  labgenz: {
    slug: "labgenz",
    name: "Labgenz / HighLevelSync",
    kicker: "Client systems engineering · CRM · WordPress automation",
    summary:
      "Client and agency engineering across a production digital-systems stack: GoHighLevel/CRM workflows, WordPress integration, forms, webhooks, bookings, automation, reporting and system implementation.",
    role: "Client systems engineering and solutions architecture across CRM, WordPress and automation workflows",
    status: "Live client / agency systems",
    stack: ["GoHighLevel", "WordPress", "Webhooks", "CRM", "Automation", "APIs"],
    visuals: [
      { mode: "live", label: "CLIENT PRODUCTION", url: "https://labgenz.com", caption: "Labgenz live website · production client/agency environment" },
      { mode: "system", label: "WORKFLOW BOUNDARY", caption: "Contribution areas represented without claiming company ownership", nodes: ["WordPress", "Lead forms", "CRM", "Automation", "Booking", "Reporting"], tone: "orange" },
    ],
    problem:
      "Marketing and operations break down when the website, forms, CRM, booking flow and follow-up automation behave like separate products. The work focused on connecting those surfaces into observable lead and customer workflows.",
    architecture: [
      { label: "Website ↔ CRM", detail: "WordPress and GoHighLevel/CRM workflows connect forms, memberships/bookings and lead data through native integrations, APIs and webhooks." },
      { label: "Automation", detail: "Triggers and follow-up flows move leads through qualification, booking and operational hand-offs." },
      { label: "Operational visibility", detail: "Reporting/KPI work turns workflow activity into a usable operating view rather than hidden automation." },
      { label: "Product integration", detail: "HighLevelSync sits at the product boundary between WordPress and CRM workflows; the live Labgenz site publicly presents that integration as part of its product stack." },
    ],
    decisions: [
      "Prefer direct/natively owned integration points over adding extra automation middleware when the product can own the connection.",
      "Treat forms and bookings as workflow entry points with downstream state, not isolated page widgets.",
      "Keep the portfolio wording scoped to my client-systems contribution; Labgenz company/product ownership is not claimed.",
    ],
    challenges: [
      "Maintaining state across WordPress, CRM, booking and follow-up systems owned by different platforms.",
      "Making automations observable enough to debug when a lead stops moving through the pipeline.",
      "Delivering production changes without exposing client credentials or internal operational data in a public portfolio.",
    ],
    evidence: [
      "The live Labgenz website publicly describes CRM + WordPress integration, lead forms, bookings and follow-up as one system.",
      "The live site publicly lists HighLevelSync / HighLevelSync Plugin as WordPress ↔ CRM products in its stack.",
      "The production site contains multi-step project/intake flows and live service/product surfaces that can be inspected publicly.",
      "Portfolio wording deliberately identifies this as client/agency engineering work rather than a founder/ownership claim.",
    ],
    outcomes: [
      "Website, CRM and booking workflows are presented as one connected operating system rather than independent tools.",
      "The portfolio now has a concrete external/client environment alongside private founder-style systems.",
      "Public production evidence is available at labgenz.com while private implementation details remain excluded.",
    ],
    currentState:
      "The Labgenz website and product/service surfaces are live. This case study documents my systems-engineering contribution and does not attribute company ownership, company-wide results or unrelated Labgenz work to me.",
    confidentiality:
      "Client secrets, credentials, customer data, internal dashboards and private repositories are not exposed. Only public site evidence and safe contribution areas are represented.",
    live: "https://labgenz.com",
  },
};

export const pageMeta: Record<string, { title: string; description: string; image: string }> = {
  "/": {
    title: "Hamza El Moueddane — Full-Stack Software Engineer & AI Product Engineer",
    description: "Evidence-backed portfolio of Hamza El Moueddane: full-stack software engineering, AI product systems, SaaS architecture, automation and production-focused delivery.",
    image: "/og-image.png",
  },
  "/resume": {
    title: "Resume — Hamza El Moueddane · Full-Stack & AI Product Engineer",
    description: "Resume of Hamza El Moueddane: full-stack software engineer and AI product engineer with SaaS, automation, systems programming and product-delivery experience.",
    image: "/og-resume.png",
  },
  "/work/carhub": {
    title: "CarHub OS / Fider Case Study — Hamza El Moueddane",
    description: "CarHub OS case study: multi-tenant automotive operations, role boundaries, inspections, work orders, PostgreSQL/NestJS architecture and pilot hardening.",
    image: "/og-carhub.png",
  },
  "/work/creator-revenue-os": {
    title: "Creator Revenue OS Case Study — Hamza El Moueddane",
    description: "Creator Revenue OS case study: immutable campaign terms, provider truth, attribution, finance-grade settlement and release verification.",
    image: "/og-creator-revenue-os.png",
  },
  "/work/leadforge": {
    title: "LeadForge Case Study — Hamza El Moueddane",
    description: "LeadForge case study: Evaluator-Optimizer agents, deterministic scoring, durable queues, deliverability safeguards and provider integrations.",
    image: "/og-leadforge.png",
  },
  "/work/noor": {
    title: "NOOR Personal Agent Case Study — Hamza El Moueddane",
    description: "NOOR case study: long-running personal agent architecture, memory, multi-provider routing, MCP services, approval and audit boundaries.",
    image: "/og-noor.png",
  },
  "/work/labgenz": {
    title: "Labgenz / HighLevelSync Client Systems Case Study — Hamza El Moueddane",
    description: "Labgenz client systems case study: WordPress, GoHighLevel/CRM, webhooks, bookings, automation, reporting and production integration work.",
    image: "/og-labgenz.png",
  },
};
