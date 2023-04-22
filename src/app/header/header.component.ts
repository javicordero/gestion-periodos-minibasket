import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() convocatoriaEventEmitter = new EventEmitter();

  closeConvocatoria() {
    this.convocatoriaEventEmitter.emit(false);
  }

  openConvocatoria() {
    this.convocatoriaEventEmitter.emit(true);
  }
}
