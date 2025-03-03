export interface IClan {
  name: string;
  totalScore: string;
}

export type Clans = IClan[];

export interface IClans {
  clans: Clans;
}
