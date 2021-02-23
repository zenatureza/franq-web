// export interface Currency {
//   currency: string;
//   buyValues: number[];
//   sellValues: number[];
//   // variation: nu
// }

export interface Currency {
  // bid
  buy: number;

  // ask
  sell: number;

  // yyyy/MM/DD
  date: string;
}
