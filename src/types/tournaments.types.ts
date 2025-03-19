export interface IClan {
  name: string;
  totalScore: string;
}

export type Clans = IClan[];

export interface IClans {
  clans: Clans;
}

export interface ITournament {
  clans: Clans;
  title: string;
}

export type Tournaments = ITournament[];

export interface ITournamentsData {
  current: string;
  tournaments: Tournaments;
}
