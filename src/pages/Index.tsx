import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  X,
} from "lucide-react";
import ProjectVisual from "../components/ProjectVisual";
import {
  SITE,
  flagshipProjects,
  moreShippedWork,
  supportingHighlights,
} from "../data/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";

const disciplines = [
  {
    icon: Layers3,
    title: "Product engineering",
    text: "I move from product framing and architecture through implementation, QA and release—not just isolated tickets.",
  },
  {
    icon: Cpu,
    title: "AI product systems",
    text: "Agent loops, tool calling, MCP, structured outputs and provider abstraction with human control where risk matters.",
  },
  {
    icon: Database,
    title: "Backend & data",
    text: "NestJS, Node.js, PostgreSQL, Prisma, Redis, queues, state machines, tenancy and finance-sensitive invariants.",
  },
  {
    icon: ShieldCheck,
    title: "Release discipline",
    text: "Security boundaries, browser QA, accessibility, CI/CD, migrations and evidence-backed release gates.",
  },
];

const systemsFoundation = [
  "C / C++",
  "Unix / POSIX",
  "Processes & pipes",
  "Signals",
  "Sockets",
  "Non-blocking I/O",
  "Networking",
  "Data structures",
];

const engineeringLoop = [
  "Frame the product problem and system constraints",
  "Design contracts, architecture and failure boundaries",
  "Use coding agents to accelerate implementation and parallel investigation",
  "Review generated work and challenge assumptions",
  "Run type, build, browser, accessibility and security checks",
  "Ship only the claims the evidence can support",
];

const navigation = [
  ["Work", "#work"],
  ["Engineering", "#engineering"],
  ["Background", "#background"],
  ["Resume", "/resume"],
  ["Contact", "#contact"],
] as const;

type CopyState = "idle" | "success" | "error";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  usePageMeta("/");

  const handleCopyEmail = async (event?: React.MouseEvent) => {
    event?.preventDefault();
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(SITE.email);
      setCopyState("success");
    } catch {
      setCopyState("error");
    }
    window.setTimeout(() => setCopyState("idle"), 2400);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const copyLabel = copyState === "success" ? "Copied" : copyState === "error" ? "Copy failed" : "Copy email";

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="topbar" aria-label="Primary navigation">
        <a href="#top" className="brand" aria-label="Hamza El Moueddane — home">HE<span>/</span>26</a>
        <nav className="desktop-nav" aria-label="Portfolio sections">
          {navigation.map(([label, href]) =>
            href.startsWith("/") ? (
              <Link key={href} to={href}>{label}</Link>
            ) : (
              <a key={href} href={href}>{label}</a>
            ),
          )}
        </nav>
        <a className="availability desktop-only" href={`mailto:${SITE.email}`}>
          <span className="availability-dot" aria-hidden="true" /> Full-stack · AI product · startup roles
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen && (
          <div
            ref={menuRef}
            id="mobile-navigation"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {navigation.map(([label, href]) =>
              href.startsWith("/") ? (
                <Link key={href} to={href} onClick={closeMenu}>{label}</Link>
              ) : (
                <a key={href} href={href} onClick={closeMenu}>{label}</a>
              ),
            )}
            <a href={`mailto:${SITE.email}`} onClick={closeMenu}>Start a conversation</a>
          </div>
        )}
      </header>

      <main id="main-content">
        <section id="top" className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><Sparkles size={14} /> {SITE.title}</p>
              <h1 id="hero-title">I build <em>software products</em> from system design to reliable release.</h1>
              <p className="hero-lede">
                I’m Hamza El Moueddane. I build full-stack SaaS, automation and AI-enabled products with a systems-programming foundation. AI speeds up my implementation loop; architecture, debugging, security and release judgment stay mine.
              </p>
              <div className="hero-actions" aria-label="Primary portfolio actions">
                <a className="button primary" href="#work">View work <ArrowDown size={16} /></a>
                <a className="button ghost" href={SITE.resume} download>Download résumé <Download size={16} /></a>
                <a className="button ghost" href={`mailto:${SITE.email}`}>Contact me <Mail size={16} /></a>
              </div>
              <div className="hero-secondary-links">
                <a href={SITE.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
                <a href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
                <Link to="/resume">Web résumé <ArrowUpRight size={13} /></Link>
              </div>
            </div>

            <aside className="hero-console" aria-label="Engineering profile snapshot">
              <div className="console-bar"><span>PROFILE / 2026</span><span className="status-pill">OPEN</span></div>
              <div className="console-content">
                <p className="console-label">ROLE MATCH</p>
                <p className="console-value">Full-stack engineering · AI product engineering · solutions architecture · founding teams</p>
                <div className="console-divider" />
                <p className="console-label">SHIP MODE</p>
                <p className="console-value">Product framing → architecture → implementation → adversarial QA → evidence → release</p>
                <div className="console-divider" />
                <p className="console-label">FOUNDATION</p>
                <p className="console-value">1337 / 42 Network · C/C++ systems work · modern product engineering</p>
                <div className="console-divider" />
                <button type="button" className="console-copy-link" onClick={handleCopyEmail} aria-label="Copy email address to clipboard">
                  {copyState === "success" ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copyLabel}</span>
                </button>
                <span className="sr-only" aria-live="polite">
                  {copyState === "success" ? "Email copied to clipboard" : copyState === "error" ? `Could not copy. Email is ${SITE.email}` : ""}
                </span>
              </div>
            </aside>
          </div>
        </section>

        <section className="proof-band" aria-label="Portfolio proof summary">
          <div className="section-wrap proof-grid">
            <div><strong>04</strong><span>Flagship systems with deep case studies</span></div>
            <div><strong>05</strong><span>Strong supporting products / client work</span></div>
            <div><strong>Full stack</strong><span>Product → backend → data → release</span></div>
            <div><strong>Evidence first</strong><span>Maturity and private/public boundaries stated clearly</span></div>
          </div>
        </section>

        <section id="work" className="section-wrap section-block" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">01 / Flagship systems</p><h2 id="work-title">The work that best shows how I engineer.</h2></div>
            <p>Each flagship pairs visible product/system proof with the decisions, constraints and maturity behind it.</p>
          </div>

          <div className="flagship-stories">
            {flagshipProjects.map((project, index) => (
              <article className="project-story" key={project.slug}>
                <div className="story-head">
                  <span className="project-number">0{index + 1}</span>
                  <div>
                    <p className="project-kicker">{project.kicker}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <span className="story-status">{project.status}</span>
                </div>

                <ProjectVisual visual={project.visual} />

                <div className="story-content">
                  <div className="story-summary">
                    <p className="project-description">{project.description}</p>
                    <p className="project-role"><span>My role</span>{project.role}</p>
                    <p className="project-outcome"><span>Why it matters</span>{project.outcome}</p>
                    <div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  <div className="project-proof">
                    <p className="proof-title">Evidence you can inspect</p>
                    <ul>{project.evidence.map((item) => <li key={item}><CheckCircle2 size={15} /><span>{item}</span></li>)}</ul>
                    <div className="project-links">
                      <Link className="story-cta" to={`/work/${project.slug}`}>Read case study <ArrowUpRight size={14} /></Link>
                      {project.live && <a href={project.live} target="_blank" rel="noreferrer">Open product <ExternalLink size={14} /></a>}
                      {project.privateRepo && <span className="private-label">Private source</span>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block compact-top" aria-labelledby="supporting-title">
          <div className="section-heading">
            <div><p className="eyebrow">02 / Client + supporting work</p><h2 id="supporting-title">Shipped across different product shapes.</h2></div>
            <p>Client systems, analytics, mobile marketplace work and creative frontends show range without competing with the flagship architecture stories.</p>
          </div>

          <div className="supporting-grid">
            {supportingHighlights.map((project) => (
              <article className="supporting-card" key={project.name}>
                {project.visual && <ProjectVisual visual={project.visual} compact />}
                <div className="supporting-copy">
                  <p className="selected-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row small">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="selected-links">
                    {project.name.startsWith("Labgenz") && <Link to="/work/labgenz">Case study <ArrowUpRight size={14} /></Link>}
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">View live <ArrowUpRight size={14} /></a>}
                    {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={14} /></a>}
                    {project.privateRepo && <span className="private-label">Private source</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="more-work-panel" aria-labelledby="more-work-title">
            <div className="more-work-intro">
              <p className="eyebrow">MORE SHIPPED WORK</p>
              <h3 id="more-work-title">Breadth, with maturity labels left intact.</h3>
            </div>
            <div className="more-work-list">
              {moreShippedWork.map((project) => (
                <article key={project.name}>
                  <div>
                    <span>{project.type}</span>
                    <h4>{project.name}</h4>
                  </div>
                  <p>{project.description}</p>
                  <div className="more-work-meta">
                    <span>{project.maturity}</span>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>Open <ExternalLink size={13} /></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="engineering" className="engineering-section" aria-labelledby="engineering-title">
          <div className="section-wrap section-block">
            <div className="section-heading inverse">
              <div><p className="eyebrow">03 / How I engineer</p><h2 id="engineering-title">AI accelerates the loop. Engineering judgment owns the result.</h2></div>
              <p>I use coding agents and LLM tooling as parallel engineering capacity. Architecture, reliability, security, product logic and release claims remain my responsibility.</p>
            </div>
            <div className="discipline-grid">
              {disciplines.map(({ icon: Icon, title, text }) => (
                <article key={title}><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <div className="workflow-panel">
              <div><p className="eyebrow">ENGINEERING LOOP</p><h3>Speed is useful only when the verification loop keeps up.</h3></div>
              <ol>{engineeringLoop.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
            </div>
          </div>
        </section>

        <section id="background" className="section-wrap section-block" aria-labelledby="background-title">
          <div className="section-heading">
            <div><p className="eyebrow">04 / Foundation</p><h2 id="background-title">Systems programming underneath the product layer.</h2></div>
            <p>1337 / 42 trained the low-level reasoning that coding agents do not replace: processes, memory, networking, concurrency, debugging and learning by building.</p>
          </div>
          <div className="background-grid">
            <div className="terminal-card">
              <div className="terminal-head"><SquareTerminal size={18} /> 42 / 1337 SYSTEMS FOUNDATION</div>
              <div className="terminal-tags">{systemsFoundation.map((item) => <span key={item}>{item}</span>)}</div>
              <p>Representative work includes Libft, printf, push_swap, minitalk, Cub3D and IRC/networking exercises. I present them as foundations, not inflated standalone case studies.</p>
              <div className="selected-links">
                <a href="https://github.com/MOUBI9A/42_Projects" target="_blank" rel="noreferrer">42 archive <ExternalLink size={14} /></a>
                <a href="https://github.com/MOUBI9A/IRC_42" target="_blank" rel="noreferrer">IRC implementation <ExternalLink size={14} /></a>
              </div>
            </div>
            <div className="timeline">
              <article><span>2026</span><div><h3>Full-stack + AI product engineering</h3><p>CarHub OS, Creator Revenue OS, LeadForge and NOOR across SaaS, agent systems and release-focused engineering.</p></div></article>
              <article><span>2026</span><div><h3>Labgenz / HighLevelSync</h3><p>Client systems engineering across CRM, WordPress integrations, automation, booking and operational workflows.</p></div></article>
              <article><span>2025</span><div><h3>UM6P Explorer / startup venture</h3><p>FoodEx product engineering, role-based workflows, APIs and cross-platform application work.</p></div></article>
              <article><span>42</span><div><h3>1337 / UM6P</h3><p>Peer-driven software engineering curriculum focused on C/C++, Unix, networking and project-based learning.</p></div></article>
            </div>
          </div>
        </section>

        <section className="principles-section" aria-labelledby="principles-title">
          <div className="section-wrap principles-grid">
            <div><p className="eyebrow">WHAT I OPTIMIZE FOR</p><h2 id="principles-title">Useful software, credible proof, clean boundaries.</h2></div>
            <div className="principle-list">
              <p><span>01</span> Product decisions that map to real user workflows.</p>
              <p><span>02</span> Architecture that makes failure modes explicit.</p>
              <p><span>03</span> AI leverage without fake certainty or fake provider success.</p>
              <p><span>04</span> Security, accessibility and responsive behavior before release claims.</p>
              <p><span>05</span> Documentation that lets humans and agents continue the work safely.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">OPEN TO GLOBAL REMOTE + RELOCATION</p>
            <h2 id="contact-title">Need someone who can own more than one layer?</h2>
            <p>I’m open to full-stack software engineering, AI product engineering, solutions architecture and founding-engineer opportunities where product judgment and technical execution both matter.</p>
          </div>
          <div className="contact-actions">
            <a className="button primary large" href={`mailto:${SITE.email}`}>Contact me <Mail size={17} /></a>
            <a className="button ghost large" href={SITE.resume} download>Download résumé <Download size={17} /></a>
            <Link className="button ghost large" to="/resume">View web résumé <ArrowUpRight size={17} /></Link>
            <button type="button" className="button ghost large copy-email-btn" onClick={handleCopyEmail} aria-label="Copy email address to clipboard">
              {copyState === "success" ? <Check size={17} /> : <Copy size={17} />}
              <span>{copyLabel}</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <div><strong>{SITE.name}</strong><span>{SITE.shortTitle}</span></div>
        <div className="footer-links">
          <a href={SITE.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16} /> LinkedIn</a>
          <a href={`mailto:${SITE.email}`}><Mail size={16} /> Email</a>
        </div>
        <p>© 2026 · Built as an evidence-backed engineering portfolio.</p>
      </footer>
    </div>
  );
};

export default Index;
