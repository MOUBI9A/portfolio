import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  X,
} from "lucide-react";

type Project = {
  name: string;
  kicker: string;
  description: string;
  role: string;
  stack: string[];
  proof: string[];
  status: string;
  live?: string;
  repo?: string;
  privateRepo?: boolean;
};

type SupportingProject = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
  privateRepo?: boolean;
};

const flagshipProjects: Project[] = [
  {
    name: "CarHub OS / Fider",
    kicker: "Automotive SaaS · Multi-tenant ERP · Trust layer",
    description:
      "A multi-tenant operating system for car-rental and mobility businesses, combining fleet operations, bookings, payments, role-based workspaces, compliance and AI-assisted workflows in one system.",
    role: "Product architecture, full-stack systems engineering, platform design, QA and release engineering",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "AI workflows"],
    proof: [
      "398 backend tests documented in the current platform architecture",
      "Multi-role product surfaces for owner, manager, agent, renter and platform admin",
      "Production-oriented tenancy, auth, finance and audit boundaries",
    ],
    status: "Active product / pilot hardening",
    live: "https://carhub.codes",
    privateRepo: true,
  },
  {
    name: "Creator Revenue OS",
    kicker: "Creator commerce · AI characters · Revenue operations",
    description:
      "A model-agnostic creator commerce platform for creators, AI characters, brands, agencies and autonomous campaign agents, with immutable campaign terms, attribution, provider truth and finance-grade settlement logic.",
    role: "Release CTO, principal architecture, product engineering, QA, security and integration supervision",
    stack: ["Next.js 16", "NestJS", "React Native", "PostgreSQL", "Redis", "Prisma"],
    proof: [
      "740 automated tests passed across unit and database-integration gates",
      "34 database migrations applied cleanly with zero lint/typecheck errors in release verification",
      "Desktop, tablet, mobile and accessibility QA completed on the canonical v1 release line",
    ],
    status: "Canonical v1 release candidate · private preview",
    privateRepo: true,
  },
  {
    name: "LeadForge",
    kicker: "AI revenue operating system · Agent orchestration",
    description:
      "An autonomous B2B revenue system built around an Evaluator-Optimizer agent loop: research, sourcing, scoring, strategy, nurture, reply handling and human approval are coordinated through durable queues and explicit integration ports.",
    role: "System architecture, agent design, backend/frontend engineering and integration architecture",
    stack: ["Next.js 16", "NestJS", "Prisma 7", "BullMQ", "Redis", "MCP", "LLM routing"],
    proof: [
      "Critic-gated multi-agent pipeline with bounded retries and structured outputs",
      "Deterministic lead scoring before model calls plus suppression and deliverability controls",
      "Superbrain evolution adds opportunity graph, evidence, signals, revenue plays and spend guards",
    ],
    status: "Late-beta engineering system",
    privateRepo: true,
  },
  {
    name: "NOOR",
    kicker: "Personal AI agent · Second brain · MCP platform",
    description:
      "A long-running personal AI agent with a TypeScript brain, React/Tauri cockpit, memory, approval rails and a fleet of Python FastAPI MCP services for work, life operations and connected tools.",
    role: "Agent architecture, orchestration, safety model and full-stack implementation",
    stack: ["TypeScript", "React", "Tauri", "FastAPI", "SQLite", "MCP", "Claude / OpenAI / Gemini"],
    proof: [
      "Provider routing with fallback, cooldowns, prompt caching and usage accounting",
      "Draft-and-approve gate for outbound actions with audit and safety layers",
      "9 FastAPI MCP services plus desktop cockpit and SSE-enabled HTTP bridge",
    ],
    status: "Private long-running agent system",
    privateRepo: true,
  },
];

const caseStudySlugs: Record<string, string> = {
  "CarHub OS / Fider": "carhub",
  "Creator Revenue OS": "creator-revenue-os",
  LeadForge: "leadforge",
  NOOR: "noor",
};

const selectedWork: SupportingProject[] = [
  {
    name: "HighLevelSync / LabGenz",
    type: "Automation architecture",
    description:
      "Multi-tenant CRM and workflow architecture spanning GoHighLevel, WordPress, automation, lead flows, infrastructure audits and agency operations.",
    tags: ["GoHighLevel", "WordPress", "CRM", "Webhooks", "Automation"],
  },
  {
    name: "FoodEx",
    type: "Multi-platform marketplace",
    description:
      "Community food marketplace for customers, home chefs, drivers and admins, built around Flutter Clean Architecture with wallet, order, inventory and analytics workflows.",
    tags: ["Flutter", "Dart", "Clean Architecture", "Realtime", "Mobile"],
    repo: "https://github.com/MOUBI9A/foodex",
  },
  {
    name: "IMAGE Skincare Interactive Ritual",
    type: "Interactive frontend experiment",
    description:
      "An interactive product story using CSS-rendered 3D-style objects, autoplay, drag/swipe, keyboard controls, routine composition and reduced-motion behavior.",
    tags: ["Interactive UI", "Responsive", "Accessibility", "Creative frontend"],
    live: "https://image-skincare-five-star.vercel.app",
  },
  {
    name: "CIG Car",
    type: "Automotive digital product",
    description:
      "Digital presence and product work for a Casablanca vehicle-rental business, including landing experiences and customer-facing workflows.",
    tags: ["React", "TypeScript", "Product", "Automotive"],
    privateRepo: true,
  },
];

const disciplines = [
  { icon: Layers3, title: "Product engineering", text: "I move from product framing and architecture to implementation, QA and release—not just isolated tickets." },
  { icon: Cpu, title: "AI-native systems", text: "Agent loops, tool calling, MCP, structured outputs, provider abstraction and human approval where risk matters." },
  { icon: Database, title: "Backend & data", text: "NestJS, Node.js, PostgreSQL, Prisma, Redis, queues, state machines, tenancy and financial invariants." },
  { icon: ShieldCheck, title: "Production discipline", text: "Security boundaries, browser QA, accessibility, CI/CD, migrations, observability and evidence-based release gates." },
];

const systemsFoundation = ["C / C++", "Unix / POSIX", "Processes & pipes", "Signals", "Sockets", "Non-blocking I/O", "Networking", "Data structures"];

const aiWorkflow = [
  "Frame the product problem and system constraints",
  "Design architecture, contracts and failure boundaries",
  "Use AI agents to accelerate implementation and parallel investigation",
  "Review code, test behavior and challenge generated assumptions",
  "Run browser, accessibility, security and release validation",
  "Ship only what has evidence behind the claim",
];

const navigation = [
  ["Work", "#work"],
  ["Engineering", "#engineering"],
  ["Background", "#background"],
  ["Resume", "/resume"],
  ["Contact", "#contact"],
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Hamza El Moueddane — AI-Native Product Engineer & Systems Architect";
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a href="#top" className="brand" aria-label="Hamza El Moueddane — home">HE<span>/</span>26</a>
        <nav className="desktop-nav" aria-label="Portfolio sections">
          {navigation.map(([label, href]) =>
            href.startsWith("/") ? (
              <Link key={href} to={href}>
                {label}
              </Link>
            ) : (
              <a key={href} href={href}>
                {label}
              </a>
            )
          )}
        </nav>
        <a className="availability desktop-only" href="mailto:hamzamoadin37@gmail.com">
          <span className="availability-dot" aria-hidden="true" /> Available for selected work
        </a>
        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            {navigation.map(([label, href]) =>
              href.startsWith("/") ? (
                <Link key={href} to={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ) : (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              )
            )}
            <a href="mailto:hamzamoadin37@gmail.com" onClick={() => setMenuOpen(false)}>Start a conversation</a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div>
              <p className="eyebrow"><Sparkles size={14} /> AI-native product engineering</p>
              <h1 id="hero-title">I architect and ship <em>software systems</em> that can survive real use.</h1>
              <p className="hero-lede">
                I’m Hamza El Moueddane, a full-stack product engineer and systems architect. I combine software-engineering fundamentals with agentic AI workflows to move from product idea to architecture, implementation, QA and release faster—without outsourcing judgment to the model.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">Explore flagship work <ArrowDown size={16} /></a>
                <a className="button ghost" href="https://github.com/MOUBI9A" target="_blank" rel="noreferrer">GitHub <ExternalLink size={16} /></a>
              </div>
            </div>

            <aside className="hero-console" aria-label="Engineering profile snapshot">
              <div className="console-bar"><span>PROFILE / CURRENT</span><span className="status-pill">OPEN</span></div>
              <div className="console-content">
                <p className="console-label">FOCUS</p><p className="console-value">AI systems · SaaS · full-stack architecture · product engineering</p>
                <div className="console-divider" />
                <p className="console-label">OPERATING MODE</p><p className="console-value">Architecture → build → adversarial QA → evidence → release</p>
                <div className="console-divider" />
                <p className="console-label">FOUNDATION</p><p className="console-value">1337 / 42 Network · C/C++ systems programming · production web engineering</p>
                <div className="console-links">
                  <a href="https://www.linkedin.com/in/hamza-el-moueddane" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
                  <Link to="/resume">Resume <ArrowUpRight size={14} /></Link>
                  <a href="mailto:hamzamoadin37@gmail.com">Email <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="proof-band" aria-label="Portfolio principles">
          <div className="section-wrap proof-grid">
            <div><strong>04</strong><span>Flagship systems</span></div>
            <div><strong>Full stack</strong><span>Product → infra → QA</span></div>
            <div><strong>AI-native</strong><span>Agents with engineering control</span></div>
            <div><strong>Evidence-first</strong><span>No unsupported production claims</span></div>
          </div>
        </section>

        <section id="work" className="section-wrap section-block" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">01 / Flagship systems</p><h2 id="work-title">Selected work with technical depth.</h2></div>
            <p>The strongest projects are ranked by architecture, implementation evidence, product complexity and current maturity—not by chronology.</p>
          </div>
          <div className="flagship-list">
            {flagshipProjects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-main">
                  <p className="project-kicker">{project.kicker}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-role"><span>My role</span>{project.role}</p>
                  <div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="project-proof">
                  <p className="proof-title">Verified / supported evidence</p>
                  <ul>{project.proof.map((item) => <li key={item}><CheckCircle2 size={15} /><span>{item}</span></li>)}</ul>
                  <div className="project-meta">
                    <span>{project.status}</span>
                    <div className="project-links">
                      <Link to={`/work/${caseStudySlugs[project.name]}`}>Case study <ArrowUpRight size={14} /></Link>
                      {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site <ExternalLink size={14} /></a>}
                      {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Public repo <ExternalLink size={14} /></a>}
                      {project.privateRepo && <span className="private-label">Private repository</span>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block compact-top" aria-labelledby="selected-title">
          <div className="section-heading"><div><p className="eyebrow">02 / Selected product work</p><h2 id="selected-title">Different domains. Same systems mindset.</h2></div></div>
          <div className="selected-grid">
            {selectedWork.map((project) => (
              <article className="selected-card" key={project.name}>
                <p className="selected-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p>
                <div className="tag-row small">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="selected-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">View live <ArrowUpRight size={14} /></a>}
                  {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={14} /></a>}
                  {project.privateRepo && <span className="private-label">Private repository</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="engineering" className="engineering-section">
          <div className="section-wrap section-block">
            <div className="section-heading inverse">
              <div><p className="eyebrow">03 / How I engineer</p><h2>AI is a multiplier. Engineering judgment stays human.</h2></div>
              <p>I use ChatGPT, Codex, Claude, Claude Code, Copilot, Gemini and other agents as parallel engineering capacity. Architecture, validation and release responsibility remain mine.</p>
            </div>
            <div className="discipline-grid">
              {disciplines.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <div className="workflow-panel">
              <div><p className="eyebrow">ENGINEERING LOOP</p><h3>Fast does not mean careless.</h3></div>
              <ol>{aiWorkflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
            </div>
          </div>
        </section>

        <section id="background" className="section-wrap section-block" aria-labelledby="background-title">
          <div className="section-heading">
            <div><p className="eyebrow">04 / Foundation</p><h2 id="background-title">Systems programming underneath the product layer.</h2></div>
            <p>My 1337 / 42 background matters because it trained the low-level reasoning modern AI tooling does not replace: processes, memory, networking, concurrency and debugging from first principles.</p>
          </div>
          <div className="background-grid">
            <div className="terminal-card">
              <div className="terminal-head"><SquareTerminal size={18} /> 42 / 1337 SYSTEMS FOUNDATION</div>
              <div className="terminal-tags">{systemsFoundation.map((item) => <span key={item}>{item}</span>)}</div>
              <p>Representative work includes Libft, printf, push_swap, minitalk, Minishell, Cub3D and IRC/networking exercises. These projects prove systems foundations rather than acting as inflated standalone case studies.</p>
              <div className="selected-links">
                <a href="https://github.com/MOUBI9A/42_Projects" target="_blank" rel="noreferrer">42 project archive <ExternalLink size={14} /></a>
                <a href="https://github.com/MOUBI9A/IRC_42" target="_blank" rel="noreferrer">IRC implementation <ExternalLink size={14} /></a>
              </div>
            </div>
            <div className="timeline">
              <article><span>2026</span><div><h3>AI-native product & systems engineering</h3><p>CarHub OS, Creator Revenue OS, LeadForge, NOOR and release-focused engineering across SaaS and agent platforms.</p></div></article>
              <article><span>2026</span><div><h3>LabGenz / HighLevelSync</h3><p>CRM architecture, WordPress/GoHighLevel integrations, automation workflows, web systems and operational tooling.</p></div></article>
              <article><span>2025</span><div><h3>UM6P Explorer / Startup Venture</h3><p>FoodEx product engineering, role-based workflows, APIs and cross-platform application work.</p></div></article>
              <article><span>42</span><div><h3>1337 / UM6P</h3><p>Peer-driven systems engineering curriculum focused on C/C++, Unix, networking and learning by building.</p></div></article>
            </div>
          </div>
        </section>

        <section className="principles-section">
          <div className="section-wrap principles-grid">
            <div><p className="eyebrow">WHAT I OPTIMIZE FOR</p><h2>Useful software, credible evidence, clean boundaries.</h2></div>
            <div className="principle-list">
              <p><span>01</span> Product decisions that map to real user workflows.</p>
              <p><span>02</span> Architecture that makes failure modes explicit.</p>
              <p><span>03</span> AI acceleration without fake certainty or fake provider success.</p>
              <p><span>04</span> Security, accessibility and responsive behavior before release claims.</p>
              <p><span>05</span> Documentation that lets humans and agents continue the work safely.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow"><MapPin size={14} /> Morocco · remote-friendly</p>
            <h2 id="contact-title">Building an ambitious product?</h2>
            <p>I’m interested in full-stack engineering, AI-native systems, startup architecture, product engineering and technically demanding freelance or consulting work.</p>
          </div>
          <div className="contact-actions">
            <a className="button primary large" href="mailto:hamzamoadin37@gmail.com">Start a conversation <Mail size={17} /></a>
            <Link className="button ghost large" to="/resume">View resume <ArrowUpRight size={17} /></Link>
            <a className="button ghost large" href="https://www.linkedin.com/in/hamza-el-moueddane" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <div><strong>Hamza El Moueddane</strong><span>AI-native product engineer & systems architect</span></div>
        <div className="footer-links">
          <a href="https://github.com/MOUBI9A" target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>
          <a href="https://www.linkedin.com/in/hamza-el-moueddane" target="_blank" rel="noreferrer"><ExternalLink size={16} /> LinkedIn</a>
          <a href="mailto:hamzamoadin37@gmail.com"><Mail size={16} /> Email</a>
        </div>
        <p>© 2026 · Built as an evidence-backed engineering portfolio.</p>
      </footer>
    </div>
  );
};

export default Index;
