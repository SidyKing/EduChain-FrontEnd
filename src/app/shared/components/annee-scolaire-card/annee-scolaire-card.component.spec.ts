import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeScolaireCardComponent } from './annee-scolaire-card.component';

describe('AnneeScolaireCardComponent', () => {
  let component: AnneeScolaireCardComponent;
  let fixture: ComponentFixture<AnneeScolaireCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnneeScolaireCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnneeScolaireCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
