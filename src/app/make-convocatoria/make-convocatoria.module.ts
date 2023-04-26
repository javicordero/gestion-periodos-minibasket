import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeConvocatoriaComponent } from './make-convocatoria.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MakeConvocatoriaComponent],
  imports: [CommonModule, DragDropModule, ReactiveFormsModule, FormsModule, MatIconModule],
  exports: [MakeConvocatoriaComponent],
})
export class MakeConvocatoriaModule {}
