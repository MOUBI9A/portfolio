import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  LockKeyhole,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProjectVisual from "../components/ProjectVisual";
import { caseStudies, caseStudySequence } from "../data/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";
import "../case-study.css";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = slug ? caseStudies[slug] : undefined;
  const path = project ? `/work/${project.slug}` : "/";

  usePageMeta(path);

  if (!project) {
    return (
      <main className="case-page">
        <a className="skip-link" href="#case-main">Skip to case study</a>
        <div id="case-main" className="case-shell case-missing">
          <p className="case-kicker">Case study / not found</p>
          <h1>This project case study doesn’t exist.</h1>
          <Link className="case-back" to="/#work"><ArrowLeft size={15} /> Back to portfolio</Link>
        </div>
      </main>
    );
  }

  const currentIndex = caseStudySequence.indexOf(project.slug as (typeof caseStudySequence)[number]);
  const safeIndex = currentIndex < 0 ? 0 : currentIndex;
  const nextSlug = caseStudySequence[(safeIndex + 1) % caseStudySequence.length];
  const nextProject = caseStudies[nextSlug];

  return (
    <main className="case-page">
      <a className="skip-link" href="#case-main">Skip to case study</a>
      <div id="case-main" className="case-shell">
        <header className="case-topbar">
          <Link className="case-back" to="/#work"><ArrowLeft size={15} /> Portfolio / work</Link>
          <span className="case-private"><LockKeyhole size={14} /> Evidence-safe public case study</span>
        </header>

        <section className="case-hero" aria-labelledby="case-title">
          <p className="case-kicker">{project.kicker}</p>
          <h1 id="case-title">{project.name}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-meta-grid">
            <div><span>My role</span><strong>{project.role}</strong></div>
            <div><span>Current maturity</span><strong>{project.status}</strong></div>
          </div>
          <div className="case-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          {project.live && (
            <a className="case-live" href={project.live} target="_blank" rel="noreferrer">
              Visit public product <ExternalLink size={15} />
            </a>
          )}
        </section>

        <section id="proof" className="case-section case-proof-section" aria-labelledby="proof-title">
          <div className="case-section-heading">
            <p className="case-section-index">01 / Product + system proof</p>
            <h2 id="proof-title">See the product or the real architecture before reading the deep dive.</h2>
          </div>
          <div className="case-visual-grid">
            {project.visuals.map((visual) => <ProjectVisual key={`${visual.label}-${visual.caption}`} visual={visual} />)}
          </div>
        </section>

        <nav className="case-jump-nav" aria-label="Case study sections">
          <a href="#problem">02 / Problem + role</a>
          <a href="#architecture">03 / Architecture</a>
          <a href="#decisions">04 / Decisions</a>
          <a href="#evidence">05 / Evidence + outcomes</a>
          <a href="#maturity">06 / Maturity</a>
        </nav>

        <section id="problem" className="case-section case-two-column">
          <div>
            <p className="case-section-index">02 / Problem + role</p>
            <h2>The system problem behind the product.</h2>
          </div>
          <div className="case-copy-block">
            <p>{project.problem}</p>
            <div className="case-role-callout">
              <span>My responsibility</span>
              <strong>{project.role}</strong>
            </div>
          </div>
        </section>

        <section id="architecture" className="case-section">
          <div className="case-section-heading">
            <p className="case-section-index">03 / Architecture</p>
            <h2>The boundaries that keep the product understandable.</h2>
          </div>
          <div className="case-architecture-grid">
            {project.architecture.map((item, index) => (
              <article key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="decisions" className="case-section case-decision-section">
          <div className="case-two-column">
            <div>
              <p className="case-section-index">04 / Key decisions</p>
              <h2>Choices made to control failure, cost or trust.</h2>
            </div>
            <ol className="case-decision-list">
              {project.decisions.map((decision, index) => (
                <li key={decision}><span>{String(index + 1).padStart(2, "0")}</span><p>{decision}</p></li>
              ))}
            </ol>
          </div>
          <div className="case-challenges">
            <p className="case-mini-label">Engineering challenges</p>
            <div>
              {project.challenges.map((challenge) => <p key={challenge}>{challenge}</p>)}
            </div>
          </div>
        </section>

        <section id="evidence" className="case-section case-evidence-section">
          <div className="case-section-heading">
            <p className="case-section-index">05 / Evidence + outcomes</p>
            <h2>Claims separated from what the evidence can actually support.</h2>
          </div>
          <div className="case-evidence-grid">
            <div className="case-check-list">
              <p className="case-mini-label">Evidence</p>
              {project.evidence.map((item) => (
                <p key={item}><CheckCircle2 size={17} /><span>{item}</span></p>
              ))}
            </div>
            <div className="case-outcome-list">
              <p className="case-mini-label">Product / engineering outcomes</p>
              {project.outcomes.map((item, index) => (
                <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section id="maturity" className="case-section case-maturity">
          <div>
            <p className="case-section-index">06 / Maturity</p>
            <h2>What is true now.</h2>
          </div>
          <div>
            <p className="case-current-state">{project.currentState}</p>
            <div className="case-confidentiality">
              <LockKeyhole size={18} />
              <div><strong>Privacy / confidentiality boundary</strong><p>{project.confidentiality}</p></div>
            </div>
          </div>
        </section>

        <section className="case-next" aria-label="Next case study">
          <div>
            <p className="case-section-index">NEXT CASE STUDY</p>
            <span>{nextProject.kicker}</span>
            <h2>{nextProject.name}</h2>
          </div>
          <Link to={`/work/${nextProject.slug}`} aria-label={`Read ${nextProject.name} case study`}>
            Read next <ArrowRight size={18} />
          </Link>
        </section>

        <footer className="case-footer">
          <Link to="/#work"><ArrowLeft size={14} /> All work</Link>
          <a href="mailto:hamzamoadin37@gmail.com">Discuss a project <ArrowUpRight size={14} /></a>
        </footer>
      </div>
    </main>
  );
};

export default CaseStudyPage;
