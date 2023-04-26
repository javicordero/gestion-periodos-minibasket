import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/models.model';

@Component({
  selector: 'app-cuartos',
  templateUrl: './cuartos.component.html',
  styleUrls: ['./cuartos.component.scss'],
})
export class CuartosComponent implements OnInit {
  ngOnInit(): void {}
  @Input() players: Player[] = [];
}
