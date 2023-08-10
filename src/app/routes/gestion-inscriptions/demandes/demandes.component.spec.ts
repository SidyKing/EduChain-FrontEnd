import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionsDemandesComponent } from './demandes.component';

describe('GestionInscriptionsDemandesComponent', () => {
  let component: GestionInscriptionsDemandesComponent;
  let fixture: ComponentFixture<GestionInscriptionsDemandesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInscriptionsDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionsDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
