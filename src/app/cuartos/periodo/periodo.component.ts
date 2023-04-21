import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Game, Period, Player } from 'src/app/models/models.model';
import { GameService } from 'src/app/services/game.service';
import { PlayersService } from 'src/app/services/players.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormControl } from '@angular/forms';
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

  conectedTo: string[] = [];

  dropdownList: any = [];
  dropdownSettings: IDropdownSettings = {};

  playersSelected: Player[] = [];
  selectedPlayersControl: FormControl = new FormControl<Player | null>(null);

  constructor(
    private playersService: PlayersService,
    private gameService: GameService
  ) {
    this.dropdownSettings = {
      singleSelection: false,
      enableCheckAll: false,
      idField: 'id',
      textField: 'name',
      itemsShowLimit: 5,
      limitSelection: 5,
      allowSearchFilter: true,
      searchPlaceholderText: 'Buscar',
    };

    for (let i: number = 1; i <= 6; i++) {
      if (this.periodNumber !== i) {
        this.conectedTo.push(`${'period-' + i}`);
      }
    }
  }

  ngOnInit(): void {
    this.playersService.playersConvocados$.subscribe((players) => {
      this.dropdownList = players;
      this.dropdownList.sort(this.orderAlfabetico);
    });

    this.gameService.game$.subscribe((game) => {
      this.game = game;
      this.selectedPlayersControl.setValue(
        this.game.periods.find((period) => period.id === this.periodNumber)!
          .players
      );
      this.playersSelected = this.selectedPlayersControl.value;
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
      let previousPeriodId: number = parseInt(
        event.previousContainer.id.slice(-1)
      );
      let nextPeriodId: number = parseInt(event.container.id.slice(-1));
      let player: Player = this.game.periods.find(
        (period) => period.id === previousPeriodId
      )!.players[event.previousIndex];
      if (
        this.gameService.playerExistsInPeriod(nextPeriodId, player) ||
        this.game.periods.find((period) => period.id === nextPeriodId)!.players
          .length >= 5
      ) {
        return;
      }

      this.gameService.deletePlayerFromPeriod(previousPeriodId, player);
      this.gameService.addPlayerToPeriod(nextPeriodId, player);
    }
  }

  onItemSelect(item: any) {
    this.gameService.addPlayerToPeriod(this.periodNumber, item);
  }

  onItemDeSelect(item: any) {
    this.gameService.deletePlayerFromPeriod(this.periodNumber, item);
  }

  countPlayerNumberOfPeriods(playerId: string | undefined): number {
    let count: number = 0;
    this.game.periods.map((period) => {
      period.players.map((player) => {
        if (player._id === playerId) {
          count++;
        }
      });
    });
    return count;
  }

  orderAlfabetico(a: Player, b: Player) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }
}
