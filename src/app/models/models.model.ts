export interface Game {
  id: string;
  periods: Period[];
}

export interface Period {
  id: number;
  players: Player[];
}

export interface Player {
  _id?: string;
  name: string;
  convocado?: boolean;
}
