import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../models/models.model';

@Component({
  selector: 'app-convocados-list',
  templateUrl: './convocados-list.component.html',
  styleUrls: ['./convocados-list.component.scss'],
})
export class ConvocadosListComponent implements OnInit {
  constructor() {}

  @Input() players: Player[] = [];
  ngOnInit(): void {}
}
