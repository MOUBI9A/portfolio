import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://hamza-el-moueddane.vercel.app";
const distDir = path.resolve("dist");
const baseHtml = await readFile(path.join(distDir, "index.html"), "utf8");

const routes = [
  {
    path: "/resume",
    title: "Resume — Hamza El Moueddane · Full-Stack & AI Product Engineer",
    description: "Resume of Hamza El Moueddane: full-stack software engineer and AI product engineer with SaaS, automation, systems programming and product-delivery experience.",
    image: "/og-resume.png",
  },
  {
    path: "/work/carhub",
    title: "CarHub OS / Fider Case Study — Hamza El Moueddane",
    description: "CarHub OS case study: multi-tenant automotive operations, role boundaries, inspections, work orders, PostgreSQL/NestJS architecture and pilot hardening.",
    image: "/og-carhub.png",
  },
  {
    path: "/work/creator-revenue-os",
    title: "Creator Revenue OS Case Study — Hamza El Moueddane",
    description: "Creator Revenue OS case study: immutable campaign terms, provider truth, attribution, finance-grade settlement and release verification.",
    image: "/og-creator-revenue-os.png",
  },
  {
    path: "/work/leadforge",
    title: "LeadForge Case Study — Hamza El Moueddane",
    description: "LeadForge case study: Evaluator-Optimizer agents, deterministic scoring, durable queues, deliverability safeguards and provider integrations.",
    image: "/og-leadforge.png",
  },
  {
    path: "/work/noor",
    title: "NOOR Personal Agent Case Study — Hamza El Moueddane",
    description: "NOOR case study: long-running personal agent architecture, memory, multi-provider routing, MCP services, approval and audit boundaries.",
    image: "/og-noor.png",
  },
  {
    path: "/work/labgenz",
    title: "Labgenz / HighLevelSync Client Systems Case Study — Hamza El Moueddane",
    description: "Labgenz client systems case study: WordPress, GoHighLevel/CRM, webhooks, bookings, automation, reporting and production integration work.",
    image: "/og-labgenz.png",
  },
];

const escapeAttribute = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const replaceTag = (html, regex, tag) => {
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const buildRouteHtml = ({ path: routePath, title, description, image }) => {
  const canonical = `${SITE_URL}${routePath}`;
  const absoluteImage = `${SITE_URL}${image}`;
  let html = baseHtml;

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(title)}</title>`);
  html = replaceTag(html, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeAttribute(description)}" />`);
  html = replaceTag(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  html = replaceTag(html, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeAttribute(title)}" />`);
  html = replaceTag(html, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeAttribute(description)}" />`);
  html = replaceTag(html, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${canonical}" />`);
  html = replaceTag(html, /<meta\s+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${absoluteImage}" />`);
  html = replaceTag(html, /<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeAttribute(title)}" />`);
  html = replaceTag(html, /<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeAttribute(description)}" />`);
  html = replaceTag(html, /<meta\s+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${absoluteImage}" />`);

  return html;
};

for (const route of routes) {
  const directory = path.join(distDir, route.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), buildRouteHtml(route), "utf8");
}

console.log(`Generated ${routes.length} route-specific HTML entry points.`);
