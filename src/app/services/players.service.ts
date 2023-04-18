import { Injectable } from '@angular/core';
import { Player } from '../models/models.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private allPlayersSubject: BehaviorSubject<Player[]> = new BehaviorSubject([
    { id: '1', name: 'Juan' },
    { id: '2', name: 'Darío' },
    { id: '3', name: 'Isaac' },
    { id: '4', name: 'Adri Mora' },
    { id: '5', name: 'Adri González' },
    { id: '6', name: 'Juan Palma' },
    { id: '7', name: 'Gonzalo' },
    { id: '8', name: 'Sergio' },
    { id: '9', name: 'Vélez' },
    { id: '10', name: 'Pipa' },
    { id: '11', name: 'Stefano' },
    { id: '12', name: 'Ale' },
    // { id: '13', name: 'Julio' },
    // { id: '14', name: 'Rome' },
    // { id: '15', name: 'Carlos' },
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
