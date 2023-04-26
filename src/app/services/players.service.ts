import { Injectable } from '@angular/core';
import { Player } from '../models/models.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private http: HttpClient, private alertifyService: AlertifyService) {}

  public allPlayersSubject: BehaviorSubject<Player[]> = new BehaviorSubject([] as Player[]);

  public readonly allPlayers$: Observable<Player[]> = this.allPlayersSubject.asObservable();

  public updateAllPlayers(players: Player[]): void {
    this.allPlayersSubject.next(players);
  }

  // url: string = 'http://localhost:3000/api/v1/players';
  url: string = 'https://vast-snaps-tuna.cyclic.app/api/v1/players';

  public getPlayers() {
    this.http.get<Player[]>(`${this.url}/`, {}).subscribe({
      next: (data: any) => {
        this.allPlayersSubject.next(data.sort((a: any, b: any) => a.number - b.number));
      },
    });
  }

  public createPlayer(player: Player): void {
    this.http.post<Player>(`${this.url}/`, player).subscribe({
      next: (data) => this.getPlayers(),
      error: (err) => this.alertifyService.error(err.error),
    });
  }

  public deletePlayer(player: Player) {
    this.http.delete(`${this.url}/${player._id}`).subscribe((data: any) => {
      this.getPlayers();
    });
  }

  public convocarDesconvocarPlayer(player: Player) {
    player.convocado = !player.convocado;
    this.updatePlayer(player);
  }

  public updatePlayer(player: Player) {
    this.http.patch(`${this.url}/${player._id}`, player).subscribe((data: any) => {
      this.getPlayers();
    });
  }

  public changePlayerNumber(player: Player, number: number): void {
    player.number = number;
    this.updatePlayer(player);
  }
}
