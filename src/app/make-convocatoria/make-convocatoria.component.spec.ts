import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeConvocatoriaComponent } from './make-convocatoria.component';

describe('MakeConvocatoriaComponent', () => {
  let component: MakeConvocatoriaComponent;
  let fixture: ComponentFixture<MakeConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeConvocatoriaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MakeConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
