import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  constructor(public loadingService: LoadingService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.loadingService.isLoading$.subscribe((value) => {
      if (value) this.spinner.show();
      else this.spinner.hide();
    });
  }
}
