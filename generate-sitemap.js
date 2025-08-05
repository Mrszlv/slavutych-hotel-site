import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const domain = "https://slavutych-zakarpattia.com.ua";

const languages = ["ua", "en", "ru"];

const pages = ["/", "/rooms", "/gallery", "/reviews", "/contact", "/privacy"];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${pages
    .map((page) => {
      return languages
        .map((lang) => {
          const loc = `${domain}/${lang}${page === "/" ? "" : page}`;
          const alternateLinks = languages
            .map(
              (altLang) => `
      <xhtml:link 
        rel="alternate" 
        hreflang="${altLang}" 
        href="${domain}/${altLang}${page === "/" ? "" : page}" 
      />`
            )
            .join("");
          return `
    <url>
      <loc>${loc}</loc>
      ${alternateLinks}
      <changefreq>weekly</changefreq>
      <priority>${page === "/" ? "1.0" : "0.8"}</priority>
    </url>`;
        })
        .join("");
    })
    .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);

console.log("✅ Багатомовний sitemap.xml згенеровано!");
