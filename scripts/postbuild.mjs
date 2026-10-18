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

const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="theme-color" content="#0c0d0d" />
  <title>404 — Hamza El Moueddane</title>
  <style>
    :root{color-scheme:dark}*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;background:#0c0d0d;color:#f3efe7;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.box{max-width:720px;border:1px solid rgba(243,239,231,.18);padding:48px}.k{margin:0 0 14px;color:#ff6b35;font:600 12px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.12em;text-transform:uppercase}h1{margin:0;font-size:clamp(48px,10vw,92px);line-height:.95;letter-spacing:-.055em}p{margin:24px 0 0;color:#bdb7ab;font-size:17px;line-height:1.7}a{display:inline-flex;margin-top:32px;padding:14px 18px;background:#ff6b35;color:#111;text-decoration:none;font:600 12px/1 ui-monospace,SFMono-Regular,Menlo,monospace;text-transform:uppercase;letter-spacing:.06em}</style>
</head>
<body>
  <main class="box">
    <p class="k">404 / Not found</p>
    <h1>This route doesn’t exist.</h1>
    <p>The portfolio has moved or this URL is invalid. Return to the verified work and case studies.</p>
    <a href="/">Back to portfolio</a>
  </main>
</body>
</html>`;
await writeFile(path.join(distDir, "404.html"), notFoundHtml, "utf8");

console.log(`Generated ${routes.length} route-specific HTML entry points plus 404.html.`);
