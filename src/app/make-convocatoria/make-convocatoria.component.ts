import { PlayersService } from '../services/players.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Player } from '../models/models.model';
import { FormControl } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { ReplaySubject, takeUntil } from 'rxjs';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-make-convocatoria',
  templateUrl: './make-convocatoria.component.html',
  styleUrls: ['./make-convocatoria.component.scss'],
})
export class MakeConvocatoriaComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  playersConvocados: Player[] = [];

  newPlayer: FormControl = new FormControl('');
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(
    private playersService: PlayersService,
    private alertifyService: AlertifyService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.playersService.allPlayers$.pipe(takeUntil(this.destroyed$)).subscribe((allPlayers) => {
      this.players = allPlayers.filter((player) => !player.convocado);
      this.playersConvocados = allPlayers.filter((player) => player.convocado);
    });
  }

  drop(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.id !== 'player-list-0' && this.playersConvocados.length >= 12) {
        this.alertifyService.error('Máximo de 12 jugadores');
        return;
      }
      if (
        !event.previousContainer.data[event.previousIndex].convocado &&
        !event.previousContainer.data[event.previousIndex].number
      ) {
        this.alertifyService.error('Asigna un número al jugador');
        return;
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const player: Player = event.container.data[event.currentIndex];
      player.convocado = !player.convocado;
      player.updated = true;
    }
  }

  addPlayer() {
    if (this.newPlayer.value !== '') {
      const newPlayer = {
        name: this.newPlayer.value,
      };
      this.playersService.createPlayer(newPlayer);
      this.newPlayer.setValue('');
    }
  }

  deletePlayer(player: Player) {
    this.playersService.deletePlayer(player);
  }

  changePlayerNumber(player: Player) {
    const value = (<HTMLInputElement>document.getElementById(`number-input-${player._id}`)).value;
    player.number = parseInt(value);
    player.updated = true;
  }

  ifPlayerNotConvocadoDeleteHimFromGame(player: Player) {
    this.gameService.game$.pipe(takeUntil(this.destroyed$)).subscribe((game) => {
      game.periods.map((period) => {
        if (this.gameService.playerExistsInPeriod(period.id, player)) {
          this.gameService.deletePlayerFromPeriod(period.id, player);
        }
      });
    });
  }

  ngOnDestroy() {
    this.players.map((player) => {
      if (player.updated) {
        this.playersService.updatePlayer(player);
        this.ifPlayerNotConvocadoDeleteHimFromGame(player); // Si el jugador no está convocado, lo borramos de los períodos
        player.updated = false;
      }
    });
    this.playersConvocados.map((player) => {
      if (player.updated) {
        this.playersService.updatePlayer(player);
        player.updated = false;
      }
    });

    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
