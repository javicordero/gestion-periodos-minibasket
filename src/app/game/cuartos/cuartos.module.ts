import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuartosComponent } from './cuartos.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { PeriodoComponent } from './periodo/periodo.component';

@NgModule({
  declarations: [CuartosComponent, PeriodoComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
  ],
  exports: [CuartosComponent],
})
export class CuartosModule {}
