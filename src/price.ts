const SYMBOLS = { USD: "$", EUR: "€", GBP: "£", JPY: "¥" } as const;

export type Currency = keyof typeof SYMBOLS;

// Currencies with no minor unit: the amount is already whole units, so no decimals are shown.
const ZERO_DECIMAL: ReadonlySet<Currency> = new Set<Currency>(["JPY"]);

/** Format an integer amount of cents for receipts, e.g. -105000 -> "-$1,050.00". */
export function formatPrice(cents: number, currency: Currency = "USD"): string {
  if (!Number.isInteger(cents)) {
    throw new TypeError("cents must be an integer");
  }
  const sign = cents < 0 ? "-" : "";
  const abs = Math.abs(cents);
  let whole: string;
  let suffix = "";
  if (ZERO_DECIMAL.has(currency)) {
    whole = String(abs);
  } else {
    const [w, fraction] = (abs / 100).toFixed(2).split(".");
    whole = w!;
    suffix = `.${fraction}`;
  }
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${sign}${SYMBOLS[currency]}${grouped}${suffix}`;
}
