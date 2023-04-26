import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvocadosListComponent } from './convocados-list/convocados-list.component';
import { GameContainer } from './game.container';
import { CuartosModule } from './cuartos/cuartos.module';

@NgModule({
  declarations: [ConvocadosListComponent, GameContainer],
  imports: [CommonModule, CuartosModule],
  exports: [GameContainer],
})
export class GameModule {}
