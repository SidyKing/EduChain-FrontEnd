import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionsListeInscriptionsComponent } from './liste-inscriptions.component';

describe('GestionInscriptionsListeInscriptionsComponent', () => {
  let component: GestionInscriptionsListeInscriptionsComponent;
  let fixture: ComponentFixture<GestionInscriptionsListeInscriptionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInscriptionsListeInscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionsListeInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
