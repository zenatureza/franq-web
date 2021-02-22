export interface Currency {
  name: string;
  buy: number;
  sell: number;
  variation: number;
}

// export interface Currencies {
//   source: string;
//   currencies: { [key: string]: Currency };
//   // USD: Currency;
//   // EUR: Currency;
//   // GBP: Currency;
//   // ARS: Currency;
//   // CAD: Currency;
//   // AUD: Currency;
//   // JPY: Currency;
//   // CNY: Currency;
//   // BTC: Currency;
// }

export interface Stock {
  name: string;
  location: string;
  points: number;
  variation: number;
}

// export interface Stocks {
//   // IBOVESPA: Stock;
//   // NASDAQ: Stock;
//   // CAC: Stock;
//   // NIKKEI: Stock;
// }
export type Stocks = { [key: string]: Stock };

export type Currencies = { [key: string]: Currency | string };

// export function getCurrencyName(currencyData: Currency | string): string {
//   if (typeof currencyData === 'string') {
//     return '';
//   }

//   const currency = currencyData as Currency;
//   return currency.name;
// }

export function getCurrency(currencyData: Currency | string): Currency {
  const currency = currencyData as Currency;
  return currency;
}

export interface Results {
  currencies: Currencies;
  stocks: Stocks;
  available_sources: string[];
  taxes: number[];
}

export interface Finances {
  by: string;
  valid_key: boolean;
  results: Results;
  execution_time: number;
  from_cache: boolean;
}
