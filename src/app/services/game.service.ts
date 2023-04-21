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

  public playerExistsInPeriod(periodId: number, player: Player) {
    return this.gameSubject
      .getValue()
      .periods[periodId - 1].players.some((p) => p._id === player._id);
  }

  public deletePlayerFromPeriod(periodId: number, player: Player) {
    this.gameSubject
      .getValue()
      .periods.find((period: Period) => period.id === periodId)!.players =
      this.gameSubject.value.periods
        .find((period: Period) => period.id === periodId)!
        .players.filter((p) => p._id !== player._id);
    this.gameSubject.next(this.gameSubject.getValue());
  }

  public addPlayerToPeriod(periodId: number, player: Player) {
    this.gameSubject.value.periods
      .filter((period: Period) => period.id === periodId)[0]
      .players.push(player);

    this.gameSubject.next(this.gameSubject.getValue());
  }

  constructor() {}
}
