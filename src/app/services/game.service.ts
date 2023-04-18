import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game, Player, Period } from '../models/models.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  period1: Period = {
    id: 1,
    players: [],
  };

  period2: Period = {
    id: 2,
    players: [],
  };

  period3: Period = {
    id: 3,
    players: [],
  };

  period4: Period = {
    id: 4,
    players: [],
  };

  period5: Period = {
    id: 5,
    players: [],
  };

  period6: Period = {
    id: 6,
    players: [],
  };

  game: Game = {
    id: 'game1',
    periods: [
      this.period1,
      this.period2,
      this.period3,
      this.period4,
      this.period5,
      this.period6,
    ],
  };

  private gameSubject: BehaviorSubject<Game> = new BehaviorSubject(this.game);

  public readonly game$: Observable<Game> = this.gameSubject.asObservable();

  public update(game: Game): void {
    this.gameSubject.next(game);
  }

  public countPlayerNumberOfPeriods(playerId: string) {
    let playerIdd = '1';
    let count: number = 0;
    this.gameSubject.getValue().periods.map((period) => {
      period.players.map((player) => {
        if (player.id === playerIdd) {
          count++;
        }
      });
    });

    console.log(count);
  }

  constructor() {}
}
