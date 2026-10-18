import { ArrowLeft, ArrowUpRight, Check, Copy, Download, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SITE } from "../data/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";

const skills = [
  ["Languages", "TypeScript, JavaScript, C, C++, Python, SQL, Shell"],
  ["Full stack", "Next.js, React, React Native, NestJS, Node.js, REST APIs, WebSockets"],
  ["Data & infrastructure", "PostgreSQL, Prisma, Redis, BullMQ, Docker, Docker Compose, Linux, CI/CD"],
  ["AI product engineering", "Codex, Claude, MCP, LLM APIs, agent workflows, structured outputs, tool calling"],
  ["Automation", "n8n, GoHighLevel, WordPress, webhooks, CRM architecture, provider integrations"],
  ["Systems", "POSIX, processes, pipes, signals, sockets, non-blocking I/O, IPC"],
];

const selectedSystems = [
  ["CarHub OS / Fider", "Product architecture and full-stack engineering for a multi-tenant automotive operations platform covering fleet, bookings, inspections, work orders, RBAC and audit-sensitive workflows."],
  ["Creator Revenue OS", "Creator-commerce platform with immutable campaign terms, attribution, provider-truth boundaries, ledger/payout invariants and a documented multi-layer release gate."],
  ["LeadForge", "Evaluator-Optimizer revenue system with deterministic scoring, durable queues, sourcing/nurture integrations, MCP and human approval boundaries."],
  ["NOOR", "Private long-running personal agent with TypeScript orchestration, React/Tauri cockpit, memory, provider fallback, approval rails and MCP services."],
];

type CopyState = "idle" | "success" | "error";

const ResumePage = () => {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  usePageMeta("/resume");

  const handleCopyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(SITE.email);
      setCopyState("success");
    } catch {
      setCopyState("error");
    }
    window.setTimeout(() => setCopyState("idle"), 2400);
  };

  return (
    <main className="resume-page">
      <a className="skip-link resume-skip" href="#resume-main">Skip to résumé</a>
      <div id="resume-main" className="resume-shell">
        <div className="resume-topbar">
          <Link to="/" className="resume-back"><ArrowLeft size={15} /> Portfolio</Link>
          <div className="resume-links">
            <a href={SITE.resume} download="Hamza_El_Moueddane_Resume_2026.pdf">Download PDF <Download size={14} /></a>
            <a href={SITE.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a>
            <a href={`mailto:${SITE.email}`}>Email <Mail size={14} /></a>
          </div>
        </div>

        <header className="resume-hero">
          <div>
            <p className="resume-kicker">Resume / 2026</p>
            <h1 className="resume-name">Hamza El Moueddane</h1>
            <p className="resume-role">Full-Stack Software Engineer · AI Product Engineer</p>
            <p className="resume-summary">
              I build SaaS, automation and AI-enabled products across frontend, backend, data and release. My 1337 / 42 systems foundation shapes how I debug and reason; coding agents accelerate implementation without replacing engineering ownership.
            </p>
          </div>
          <div className="resume-contact">
            <p>Morocco · open to global remote roles & relocation</p>
            <div className="resume-email-row">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <button type="button" className="resume-copy-btn" onClick={handleCopyEmail} aria-label="Copy email address to clipboard">
                {copyState === "success" ? <Check size={11} /> : <Copy size={11} />}
                <span>{copyState === "success" ? "Copied" : copyState === "error" ? "Failed" : "Copy"}</span>
              </button>
            </div>
            <p><a href={SITE.github} target="_blank" rel="noreferrer">github.com/MOUBI9A</a></p>
            <p><a href={SITE.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/hamza-el-moueddane</a></p>
            <span className="sr-only" aria-live="polite">
              {copyState === "success" ? "Email copied to clipboard" : copyState === "error" ? `Could not copy. Email is ${SITE.email}` : ""}
            </span>
          </div>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-label">Profile</h2>
          <p className="resume-copy">
            Full-stack engineer with experience moving products from system design to implementation, integration, QA and release. Strongest areas: TypeScript/React/NestJS products, PostgreSQL-backed SaaS, automation/CRM integrations, agentic AI systems and production-oriented engineering workflows.
          </p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-label">Experience</h2>
          <div className="resume-stack">
            <article className="resume-item">
              <div className="resume-item-head">
                <h3>Client Systems Engineering & Solutions Architecture · Labgenz</h3>
                <span className="resume-date">2026</span>
              </div>
              <ul className="resume-list">
                <li>Worked across WordPress and GoHighLevel/CRM integrations connecting lead capture, forms, booking and follow-up workflows.</li>
                <li>Implemented and supported APIs, webhooks, automation triggers, reporting/KPI flows and operational integrations.</li>
                <li>Applied coding agents and LLM tooling to accelerate implementation, debugging, integration and documentation while retaining manual review and release control.</li>
              </ul>
            </article>

            <article className="resume-item">
              <div className="resume-item-head">
                <h3>Software Developer · UM6P Explorer / Startup Venture</h3>
                <span className="resume-date">2025</span>
              </div>
              <ul className="resume-list">
                <li>Co-developed FoodEx, a cross-platform marketplace with customer, chef, driver and admin experiences.</li>
                <li>Worked on role-based workflows, APIs, application architecture and containerized development/infrastructure tasks.</li>
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
          <span>Web résumé and downloadable PDF use the same release-aligned positioning.</span>
          <div className="resume-links">
            <a href={SITE.resume} download="Hamza_El_Moueddane_Resume_2026.pdf">Download PDF <Download size={14} /></a>
            <a href={`mailto:${SITE.email}`}>Contact me <ArrowUpRight size={14} /></a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default ResumePage;
