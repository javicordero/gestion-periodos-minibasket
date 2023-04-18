import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Gestion-periodos-minibasket';
  convocatoriaOpen: boolean = true;

  toggleConvocatoria() {
    this.convocatoriaOpen = !this.convocatoriaOpen;
  }
}
