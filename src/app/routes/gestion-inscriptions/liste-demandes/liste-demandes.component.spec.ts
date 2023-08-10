import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionsListeDemandesComponent } from './liste-demandes.component';

describe('GestionInscriptionsListeDemandesComponent', () => {
  let component: GestionInscriptionsListeDemandesComponent;
  let fixture: ComponentFixture<GestionInscriptionsListeDemandesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInscriptionsListeDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionsListeDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
