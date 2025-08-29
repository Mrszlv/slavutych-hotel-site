// Універсальні обгортки, без падінь якщо gtag ще не ініціалізовано
export const GA_MEASUREMENT_ID = "AW-17497459822";

export function gtag() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...arguments);
  }
}

// Pageview для SPA (на кожній зміні маршруту)
export function trackPageview(path) {
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
}

// Конверсія (Google Ads)
export function trackConversion(
  sendTo,
  value = 1.0,
  currency = "UAH",
  extra = {}
) {
  gtag("event", "conversion", {
    send_to: sendTo, // напр. 'AW-17497459822/urE0CNyN9oobEO6YuJdB'
    value,
    currency,
    ...extra,
  });
}
