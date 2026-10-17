import React, { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  ["Languages", "TypeScript, JavaScript, C, C++, Python, SQL, Shell"],
  ["Full stack", "Next.js, React, React Native, NestJS, Node.js, REST APIs, WebSockets"],
  ["Data & infrastructure", "PostgreSQL, Prisma, Redis, BullMQ, Docker, Docker Compose, Nginx, Linux"],
  ["AI-native engineering", "Codex, Claude, MCP, LLM APIs, agentic workflows, structured outputs, tool calling"],
  ["Automation", "n8n, GoHighLevel, webhooks, CRM architecture, provider integrations"],
  ["Systems", "POSIX, processes, pipes, signals, sockets, non-blocking I/O, IPC"],
];

const selectedSystems = [
  ["CarHub OS / Fider", "Lead architecture and full-stack development for a multi-tenant automotive SaaS covering fleet, bookings, customers, compliance, invoicing, analytics, RBAC and AI-assisted workflows."],
  ["Creator Revenue OS", "Creator-commerce and AI-character platform with campaign versioning, attribution, provider truth, finance-grade ledger/payout invariants and release verification."],
  ["LeadForge", "Evaluator-Optimizer multi-agent revenue system with queues, deterministic scoring, sourcing, nurture, MCP, provider adapters and human approval boundaries."],
  ["NOOR", "Private long-running personal AI agent with TypeScript orchestration, React/Tauri cockpit, FastAPI MCP services, memory, approvals and multi-provider fallback."],
];

const ResumePage = () => {
  useEffect(() => {
    document.title = "Resume — Hamza El Moueddane";
  }, []);

  return (
    <main className="resume-page">
      <div className="resume-shell">
        <div className="resume-topbar">
          <Link to="/" className="resume-back"><ArrowLeft size={15} /> Portfolio</Link>
          <div className="resume-links">
            <a href="https://github.com/MOUBI9A" target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a>
            <a href="https://www.linkedin.com/in/hamza-el-moueddane" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a>
            <a href="mailto:hamzamoadin37@gmail.com">Email <Mail size={14} /></a>
          </div>
        </div>

        <header className="resume-hero">
          <div>
            <p className="resume-kicker">Resume / 2026</p>
            <h1 className="resume-name">Hamza El Moueddane</h1>
            <p className="resume-summary">AI-native full-stack product engineer and systems architect building SaaS platforms, agentic systems, workflow automation and production-oriented software.</p>
          </div>
          <div className="resume-contact">
            <p>Morocco · open to global remote roles & relocation</p>
            <p><a href="mailto:hamzamoadin37@gmail.com">hamzamoadin37@gmail.com</a></p>
            <p><a href="https://github.com/MOUBI9A" target="_blank" rel="noreferrer">github.com/MOUBI9A</a></p>
          </div>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-label">Profile</h2>
          <p className="resume-copy">I combine a 1337 / 42 systems-programming foundation with modern product engineering. I use coding agents and LLM tooling across architecture, implementation, debugging, testing, QA and documentation, while keeping engineering control over reliability, security, business logic and release claims.</p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-label">Experience</h2>
          <div className="resume-stack">
            <article className="resume-item">
              <div className="resume-item-head">
                <h3>Solutions Architect & Engineering Project Lead · LabGenz</h3>
                <span className="resume-date">2025 — Sep 2026</span>
              </div>
              <ul className="resume-list">
                <li>Designed CRM and automation infrastructure using GoHighLevel, n8n, APIs, webhooks and custom integrations across lead capture, qualification, booking and operations.</li>
                <li>Built backend automations and cross-system data flows, plus email and DNS infrastructure including SPF, DKIM and DMARC work.</li>
                <li>Introduced AI-native engineering workflows using coding agents, MCP tools and LLMs for implementation, debugging, integration and documentation.</li>
              </ul>
            </article>
            <article className="resume-item">
              <div className="resume-item-head">
                <h3>Software Developer & Systems Architect Intern · UM6P Explorer / Startup Venture</h3>
                <span className="resume-date">May — Oct 2025</span>
              </div>
              <ul className="resume-list">
                <li>Co-developed FoodEx, a cross-platform marketplace and delivery product with role-based customer, chef, driver and admin experiences.</li>
                <li>Worked on APIs, access workflows, containerized services and reverse-proxy infrastructure.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-label">Selected systems</h2>
          <div className="resume-project-grid">
            {selectedSystems.map(([title, text]) => (
              <article className="resume-project" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-label">Technical skills</h2>
          <div className="resume-skills">
            {skills.map(([label, value]) => (
              <div className="resume-skill-row" key={label}>
                <strong>{label}</strong><span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-label">Education</h2>
          <div className="resume-education">
            <h3>1337 Coding School · 42 Network / UM6P</h3>
            <p>Project-based software engineering and computer-science program · 2022 — present.</p>
            <p>Systems foundation includes C/C++, Unix/POSIX, processes, pipes, signals, file descriptors, sockets, non-blocking I/O, networking and memory management.</p>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-label">Languages</h2>
          <p className="resume-copy">Arabic — Native/Bilingual · English — Full Professional · French — Professional Working</p>
        </section>

        <footer className="resume-footer">
          <span>Current web resume · evidence aligned with portfolio research</span>
          <a href="mailto:hamzamoadin37@gmail.com">Contact me <ArrowUpRight size={14} /></a>
        </footer>
      </div>
    </main>
  );
};

export default ResumePage;
