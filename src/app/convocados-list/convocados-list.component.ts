import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../models/models.model';

@Component({
  selector: 'app-convocados-list',
  templateUrl: './convocados-list.component.html',
  styleUrls: ['./convocados-list.component.scss'],
})
export class ConvocadosListComponent implements OnInit {
  constructor(private playersService: PlayersService) {}

  players: Player[] = [];
  ngOnInit(): void {
    this.playersService.playersConvocados$.subscribe(
      (players) => (this.players = players)
    );
  }
}
