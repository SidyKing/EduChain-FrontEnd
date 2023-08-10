import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantParcoursComponent } from './parcours.component';

describe('EtudiantParcoursComponent', () => {
  let component: EtudiantParcoursComponent;
  let fixture: ComponentFixture<EtudiantParcoursComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantParcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
