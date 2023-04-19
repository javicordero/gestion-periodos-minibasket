import { Injectable } from '@angular/core';
import { Player } from '../models/models.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private allPlayersSubject: BehaviorSubject<Player[]> = new BehaviorSubject([
    { id: '1', name: 'Adri González' },
    { id: '2', name: 'Isaac' },
    { id: '3', name: 'Juanma' },
    { id: '4', name: 'Paco' },
    { id: '5', name: 'Alberto' },
    { id: '6', name: 'Javier' },
    { id: '7', name: 'Raúl' },
    { id: '8', name: 'Ismael' },
    { id: '9', name: 'Adri Mora' },
    { id: '10', name: 'Iker' },
    { id: '11', name: 'Darío' },
    { id: '12', name: 'Juan Palma' },
    { id: '13', name: 'Guillermo' },
    { id: '14', name: 'Quiñones' },
    { id: '15', name: 'Miguel Ángel' },
  ] as Player[]);

  public readonly allPlayers$: Observable<Player[]> =
    this.allPlayersSubject.asObservable();

  public updateAllPlayers(players: Player[]): void {
    this.allPlayersSubject.next(players);
  }

  private playersConvocadosSubject: BehaviorSubject<Player[]> =
    new BehaviorSubject([] as Player[]);

  public readonly playersConvocados$: Observable<Player[]> =
    this.playersConvocadosSubject.asObservable();

  public updatePlayersConvocados(players: Player[]): void {
    this.playersConvocadosSubject.next(players);
  }

  public addPlayer(player: Player): void {
    this.allPlayersSubject.value.push(player);
  }

  public deletePlayer(player: Player): void {
    this.allPlayersSubject.next(
      this.allPlayersSubject.value.filter(
        (p) => p.id !== player.id
        // (p) => p.name !== player.name
      )
    );
  }

  constructor() {}
}
