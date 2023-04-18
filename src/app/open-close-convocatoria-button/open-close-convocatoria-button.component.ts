import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-open-close-convocatoria-button',
  templateUrl: './open-close-convocatoria-button.component.html',
  styleUrls: ['./open-close-convocatoria-button.component.scss'],
})
export class OpenColoseConvocatoriaButtonComponent {
  @Input() buttonText: string = '';
  @Output() toggleConvocatoriaEvent: EventEmitter<any> = new EventEmitter();

  toggleConvocatoria() {
    this.toggleConvocatoriaEvent.emit();
  }
}
