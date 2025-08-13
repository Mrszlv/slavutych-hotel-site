// generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Базовий домен
const domain = "https://slavutych-zakarpattia.com.ua";

// Сторінки без префіксів
const pages = ["/", "/rooms", "/gallery", "/reviews", "/contact", "/privacy"];

const urls = pages
  .map((page) => {
    const loc = `${domain}${page === "/" ? "" : page}`;
    const priority = page === "/" ? "1.0" : "0.8";
    return `
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`.trim();

fs.writeFileSync(
  path.join(__dirname, "public", "sitemap.xml"),
  sitemap,
  "utf8"
);
console.log("✅ Одномовний sitemap.xml згенеровано!");
