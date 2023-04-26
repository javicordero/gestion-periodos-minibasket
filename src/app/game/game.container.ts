import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Game, Player } from '../models/models.model';
import { GameService } from '../services/game.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.container.html',
  styleUrls: ['./game.container.scss'],
})
export class GameContainer implements OnInit {
  constructor(private playersService: PlayersService) {}

  playersConvocados: Player[] = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit(): void {
    this.playersService.allPlayers$.pipe(takeUntil(this.destroyed$)).subscribe((players) => {
      this.playersConvocados = players.filter((player) => player.convocado);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
