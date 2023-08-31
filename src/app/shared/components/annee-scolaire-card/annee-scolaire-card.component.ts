import {Component, Input} from '@angular/core';
import {AnneeScolaire} from "../../../models/gestion-inscriptions/annee-scolaire";

@Component({
  selector: 'app-annee-scolaire-card',
  templateUrl: './annee-scolaire-card.component.html',
  styleUrls: ['./annee-scolaire-card.component.scss']
})
export class AnneeScolaireCardComponent {

  @Input() anneeScolaire!: AnneeScolaire;

  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;
    constructor() { }
}
