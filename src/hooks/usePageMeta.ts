import { useEffect } from "react";
import { SITE, pageMeta } from "../data/portfolio";

const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

export const usePageMeta = (path: string) => {
  useEffect(() => {
    const meta = pageMeta[path] ?? pageMeta["/"];
    const canonical = `${SITE.url}${path === "/" ? "/" : path}`;
    const image = meta.image.startsWith("http") ? meta.image : `${SITE.url}${meta.image}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", canonical);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    setMeta('meta[name="twitter:image"]', "content", image);
  }, [path]);
};
