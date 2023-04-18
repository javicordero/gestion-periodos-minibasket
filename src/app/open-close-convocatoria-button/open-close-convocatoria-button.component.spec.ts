import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenColoseConvocatoriaButtonComponent } from './open-close-convocatoria-button.component';

describe('OpenColoseConvocatoriaButtonComponent', () => {
  let component: OpenColoseConvocatoriaButtonComponent;
  let fixture: ComponentFixture<OpenColoseConvocatoriaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenColoseConvocatoriaButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OpenColoseConvocatoriaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
