export interface Game {
  id: string;
  periods: Period[];
}

export interface Period {
  id: number;
  players: Player[];
}

export interface Player {
  id: string;
  name: string;
}
