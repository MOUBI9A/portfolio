import React, { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  ["Languages", "TypeScript, JavaScript, C, C++, Python, SQL, Shell"],
  ["Full stack", "Next.js, React, React Native, NestJS, Node.js, REST APIs, WebSockets"],
  ["Data & infrastructure", "PostgreSQL, Prisma, Redis, BullMQ, Docker, Docker Compose, Nginx, Linux"],
  ["AI-native engineering", "Codex, Claude, MCP, LLM APIs, agentic workflows, structured outputs, tool calling"],
  ["Automation", "n8n, GoHighLevel, webhooks, CRM architecture, provider integrations"],
  ["Systems", "POSIX, processes, pipes, signals, sockets, non-blocking I/O, IPC"],
];

const ResumePage = () => {
  useEffect(() => {
    document.title = "Resume — Hamza El Moueddane";
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#f3efe7", color: "#0c0d0d" }}>
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-16">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-black/15 pb-5">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <ArrowLeft size={15} /> Portfolio
          </Link>
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <a href="https://github.com/MOUBI9A" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">GitHub <Github size={14} /></a>
            <a href="https://www.linkedin.com/in/hamza-el-moueddane" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">LinkedIn <Linkedin size={14} /></a>
            <a href="mailto:hamzamoadin37@gmail.com" className="inline-flex items-center gap-1.5">Email <Mail size={14} /></a>
          </div>
        </div>

        <header className="grid gap-8 border-b border-black/15 pb-12 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[.14em] text-orange-700">Resume / 2026</p>
            <h1 className="text-5xl font-semibold leading-[.95] tracking-[-.05em] md:text-7xl">Hamza El Moueddane</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
              AI-native full-stack product engineer and systems architect building SaaS platforms, agentic systems, workflow automation and production-oriented software.
            </p>
          </div>
          <div className="text-sm leading-7 text-black/65 md:text-right">
            <p>Morocco · open to global remote roles & relocation</p>
            <p><a href="mailto:hamzamoadin37@gmail.com">hamzamoadin37@gmail.com</a></p>
            <p><a href="https://github.com/MOUBI9A" target="_blank" rel="noreferrer">github.com/MOUBI9A</a></p>
          </div>
        </header>

        <section className="grid gap-8 border-b border-black/15 py-12 md:grid-cols-[180px_1fr]">
          <h2 className="font-mono text-xs uppercase tracking-[.14em] text-orange-700">Profile</h2>
          <p className="max-w-3xl text-base leading-8 text-black/75">
            I combine a 1337 / 42 systems-programming foundation with modern product engineering. I use coding agents and LLM tooling across architecture, implementation, debugging, testing, QA and documentation, while keeping engineering control over reliability, security, business logic and release claims.
          </p>
        </section>

        <section className="grid gap-8 border-b border-black/15 py-12 md:grid-cols-[180px_1fr]">
          <h2 className="font-mono text-xs uppercase tracking-[.14em] text-orange-700">Experience</h2>
          <div className="space-y-10">
            <article>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-semibold tracking-tight">Solutions Architect & Engineering Project Lead · LabGenz</h3>
                <span className="font-mono text-xs text-black/50">2025 — Sep 2026</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-black/70">
                <li>Designed CRM and automation infrastructure using GoHighLevel, n8n, APIs, webhooks and custom integrations across lead capture, qualification, booking and operations.</li>
                <li>Built backend automations and cross-system data flows, plus email and DNS infrastructure including SPF, DKIM and DMARC work.</li>
                <li>Introduced AI-native engineering workflows using coding agents, MCP tools and LLMs for implementation, debugging, integration and documentation.</li>
              </ul>
            </article>

            <article>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-semibold tracking-tight">Software Developer & Systems Architect Intern · UM6P Explorer / Startup Venture</h3>
                <span className="font-mono text-xs text-black/50">May — Oct 2025</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-black/70">
                <li>Co-developed FoodEx, a cross-platform marketplace and delivery product with role-based customer, chef, driver and admin experiences.</li>
                <li>Worked on APIs, access workflows, containerized services and reverse-proxy infrastructure.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="grid gap-8 border-b border-black/15 py-12 md:grid-cols-[180px_1fr]">
          <h2 className="font-mono text-xs uppercase tracking-[.14em] text-orange-700">Selected systems</h2>
          <div className="grid gap-7 md:grid-cols-2">
            {[
              ["CarHub OS / Fider", "Lead architecture and full-stack development for a multi-tenant automotive SaaS covering fleet, bookings, customers, compliance, invoicing, analytics, RBAC and AI-assisted workflows."],
              ["Creator Revenue OS", "Creator-commerce and AI-character platform with campaign versioning, attribution, provider truth, finance-grade ledger/payout invariants and release verification."],
              ["LeadForge", "Evaluator-Optimizer multi-agent revenue system with queues, deterministic scoring, sourcing, nurture, MCP, provider adapters and human approval boundaries."],
              ["NOOR", "Private long-running personal AI agent with TypeScript orchestration, React/Tauri cockpit, FastAPI MCP services, memory, approvals and multi-provider fallback."],
            ].map(([title, text]) => (
              <article key={title} className="border-t border-black/20 pt-4">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-black/15 py-12 md:grid-cols-[180px_1fr]">
          <h2 className="font-mono text-xs uppercase tracking-[.14em] text-orange-700">Technical skills</h2>
          <div className="divide-y divide-black/10 border-t border-black/10">
            {skills.map(([label, value]) => (
              <div key={label} className="grid gap-2 py-4 md:grid-cols-[190px_1fr]">
                <strong className="text-sm">{label}</strong>
                <span className="text-sm leading-6 text-black/65">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-black/15 py-12 md:grid-cols-[180px_1fr]">
          <h2 className="font-mono text-xs uppercase tracking-[.14em] text-orange-700">Education</h2>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">1337 Coding School · 42 Network / UM6P</h3>
            <p className="mt-3 text-sm leading-7 text-black/65">Project-based software engineering and computer-science program · 2022 — present.</p>
            <p className="mt-3 text-sm leading-7 text-black/65">Systems foundation includes C/C++, Unix/POSIX, processes, pipes, signals, file descriptors, sockets, non-blocking I/O, networking and memory management.</p>
          </div>
        </section>

        <section className="grid gap-8 py-12 md:grid-cols-[180px_1fr]">
          <h2 className="font-mono text-xs uppercase tracking-[.14em] text-orange-700">Languages</h2>
          <p className="text-sm leading-7 text-black/65">Arabic — Native/Bilingual · English — Full Professional · French — Professional Working</p>
        </section>

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/15 pt-6 font-mono text-xs text-black/55">
          <span>Current web resume · evidence aligned with portfolio research</span>
          <a href="mailto:hamzamoadin37@gmail.com" className="inline-flex items-center gap-2 text-black">Contact me <ArrowUpRight size={14} /></a>
        </footer>
      </div>
    </main>
  );
};

export default ResumePage;
