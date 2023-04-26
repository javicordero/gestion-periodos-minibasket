import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Game, Player } from '../models/models.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.container.html',
  styleUrls: ['./game.container.scss'],
})
export class GameContainer implements OnInit {
  constructor(private playersService: PlayersService) {}

  playersConvocados: Player[] = [];

  ngOnInit(): void {
    this.playersService.allPlayers$.subscribe((players) => {
      this.playersConvocados = players.filter((player) => player.convocado);
    });
  }
}
