import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocadosListComponent } from './convocados-list.component';

describe('ConvocadosListComponent', () => {
  let component: ConvocadosListComponent;
  let fixture: ComponentFixture<ConvocadosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocadosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvocadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
