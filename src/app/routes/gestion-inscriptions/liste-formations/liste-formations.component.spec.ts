import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionsListeFormationsComponent } from './liste-formations.component';

describe('GestionInscriptionsListeFormationsComponent', () => {
  let component: GestionInscriptionsListeFormationsComponent;
  let fixture: ComponentFixture<GestionInscriptionsListeFormationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInscriptionsListeFormationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionsListeFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
