import { ArrowRight, ExternalLink, MonitorUp } from "lucide-react";
import { useMemo, useState } from "react";
import type { VisualSpec } from "../data/portfolio";

type Props = {
  visual: VisualSpec;
  compact?: boolean;
};

const ProjectVisual = ({ visual, compact = false }: Props) => {
  const [captureFailed, setCaptureFailed] = useState(false);

  const captureUrl = useMemo(() => {
    if (visual.mode !== "live") return "";
    return `https://image.thum.io/get/width/1400/crop/820/noanimate/${visual.url}`;
  }, [visual]);

  if (visual.mode === "live") {
    return (
      <figure className={`project-visual live-visual ${compact ? "compact" : ""}`}>
        <div className="visual-toolbar">
          <span><MonitorUp size={13} /> {visual.label}</span>
          <a href={visual.url} target="_blank" rel="noreferrer" aria-label={`Open ${visual.label.toLowerCase()} in a new tab`}>
            Open live <ExternalLink size={13} />
          </a>
        </div>
        {!captureFailed ? (
          <a className="live-capture-link" href={visual.url} target="_blank" rel="noreferrer" aria-label={`Open live site: ${visual.caption}`}>
            <img
              src={captureUrl}
              alt={`Live website capture: ${visual.caption}`}
              loading={compact ? "lazy" : "eager"}
              decoding="async"
              onError={() => setCaptureFailed(true)}
            />
          </a>
        ) : (
          <a className="capture-fallback" href={visual.url} target="_blank" rel="noreferrer">
            <span className="capture-domain">{new URL(visual.url).hostname}</span>
            <strong>Live product available</strong>
            <span>Open the production site <ExternalLink size={14} /></span>
          </a>
        )}
        <figcaption>{visual.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className={`project-visual system-visual tone-${visual.tone ?? "orange"} ${compact ? "compact" : ""}`}>
      <div className="visual-toolbar"><span>{visual.label}</span><span>Evidence map</span></div>
      <div className="system-flow" aria-label={`${visual.label}: ${visual.nodes.join(" to ")}`}>
        {visual.nodes.map((node, index) => (
          <div className="system-flow-step" key={node}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{node}</strong>
            {index < visual.nodes.length - 1 && <ArrowRight className="system-arrow" size={17} aria-hidden="true" />}
          </div>
        ))}
      </div>
      <figcaption>{visual.caption}</figcaption>
    </figure>
  );
};

export default ProjectVisual;
