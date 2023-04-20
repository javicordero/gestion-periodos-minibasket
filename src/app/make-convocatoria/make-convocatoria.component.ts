import { PlayersService } from '../services/players.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Player } from '../models/models.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-make-convocatoria',
  templateUrl: './make-convocatoria.component.html',
  styleUrls: ['./make-convocatoria.component.scss'],
})
export class MakeConvocatoriaComponent implements OnInit {
  players: Player[] = [];
  playersConvocados: Player[] = [];

  newPlayer: FormControl = new FormControl('');

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.allPlayers$.subscribe((allPlayers) => {
      this.players = allPlayers.filter((player) => player.convocado === false);
      this.playersConvocados = allPlayers.filter(
        (player) => player.convocado === true
      );
      this.playersService.updatePlayersConvocados(this.playersConvocados);
    });
  }

  drop(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (
        event.container.id !== 'cdk-drop-list-0' &&
        this.playersConvocados.length >= 12
      ) {
        this.displayAlert();
        return;
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const player = event.container.data[event.currentIndex];
      this.playersService.convocarDesconvocarPlayer(player);
    }
  }

  displayAlert() {}

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
}
