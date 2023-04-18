import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Game, Period, Player } from 'src/app/models/models.model';
import { GameService } from 'src/app/services/game.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.scss'],
})
export class PeriodoComponent implements OnInit {
  @Input() periodNumber: number = 0;
  game: Game = {
    id: '',
    periods: [],
  };
  period: Period = {
    id: this.periodNumber,
    players: [],
  };

  playersSelected: Player[] = [];
  playersSeleccionables: Player[] = [];
  dropdownList: any = [];
  dropdownSettings = {};

  constructor(
    private playersService: PlayersService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.playersService.playersConvocados$.subscribe((players) => {
      this.playersSeleccionables = players;
      this.dropdownList = [];
      this.playersSeleccionables.map((player) => {
        this.dropdownList.push(player);
      });
    });

    this.gameService.game$.subscribe((game) => {
      this.game = game;
    });

    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      idField: 'id',
      textField: 'name',
      itemsShowLimit: 5,
      limitSelection: 5,
      allowSearchFilter: true,
    };
  }

  drop(event: CdkDragDrop<Player[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  onItemSelect(item: any) {
    this.period.players = this.playersSelected;

    this.game.periods[this.periodNumber - 1].players = this.period.players;

    this.gameService.update(this.game);
  }

  countPlayerNumberOfPeriods(playerId: string): number {
    let count: number = 0;
    this.game.periods.map((period) => {
      period.players.map((player) => {
        if (player.id === playerId) {
          count++;
        }
      });
    });
    return count;
  }

  onDropDownClose(event: any) {
    // console.log('onDropDownClose', event);
  }
}
