import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionsDemandesDemandesParNiveauDialogComponent } from './demandes-par-niveau-dialog.component';

describe('GestionInscriptionsDemandesDemandesParNiveauDialogComponent', () => {
  let component: GestionInscriptionsDemandesDemandesParNiveauDialogComponent;
  let fixture: ComponentFixture<GestionInscriptionsDemandesDemandesParNiveauDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInscriptionsDemandesDemandesParNiveauDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionsDemandesDemandesParNiveauDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
