const SYMBOLS = { USD: "$", EUR: "€", GBP: "£" } as const;

export type Currency = keyof typeof SYMBOLS;

/** Format an integer amount of cents for receipts, e.g. -105000 -> "-$1,050.00". */
export function formatPrice(cents: number, currency: Currency = "USD"): string {
  if (!Number.isInteger(cents)) {
    throw new TypeError("cents must be an integer");
  }
  const sign = cents < 0 ? "-" : "";
  const [whole, fraction] = (Math.abs(cents) / 100).toFixed(2).split(".");
  const grouped = whole!.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${sign}${SYMBOLS[currency]}${grouped}.${fraction}`;
}
