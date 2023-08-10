import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionsListeNiveauxComponent } from './liste-niveaux.component';

describe('GestionInscriptionsListeNiveauxComponent', () => {
  let component: GestionInscriptionsListeNiveauxComponent;
  let fixture: ComponentFixture<GestionInscriptionsListeNiveauxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInscriptionsListeNiveauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionsListeNiveauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
