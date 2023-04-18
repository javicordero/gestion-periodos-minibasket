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
  allPlayers: Player[] = [];
  playersConvocados: Player[] = [];
  playersCuarto1: Player[] = [];

  newPlayer: FormControl = new FormControl('');

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.allPlayers$.subscribe((allPlayers) => {
      this.allPlayers = allPlayers;
      // LLamar al servicio para guardarlo en la base de datos
    });
    this.playersService.playersConvocados$.subscribe((playersConvocados) => {
      this.playersConvocados = playersConvocados;
      // LLamar al servicio para guardarlo en la base de datos
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
      this.playersService.updateAllPlayers(this.allPlayers);
      this.playersService.updatePlayersConvocados(this.playersConvocados);
    }
  }

  displayAlert() {}

  addPlayer() {
    if (this.newPlayer.value !== '') {
      const newPlayer = {
        id: (this.allPlayers.length + 1).toString(),
        name: this.newPlayer.value,
      };
      this.playersService.addPlayer(newPlayer);
      this.newPlayer.setValue('');
    }
  }

  deletePlayer(player: Player) {
    this.playersService.deletePlayer(player);
  }
}
