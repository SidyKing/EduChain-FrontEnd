import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent } from './inscriptions-par-niveau-dialog.component';

describe('GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent', () => {
  let component: GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent;
  let fixture: ComponentFixture<GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
