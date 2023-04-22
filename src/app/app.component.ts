import { Component, OnInit } from '@angular/core';
import { PlayersService } from './services/players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Gestion-periodos-minibasket';
  convocatoriaOpen: boolean = true;

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayers();
  }

  toggleConvocatoria(value: boolean): void {
    this.convocatoriaOpen = value;
  }
}
