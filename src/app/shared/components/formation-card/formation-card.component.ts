import {Component, Input} from '@angular/core';
import {Formation} from "../../../models/gestion-formations/formation";

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.scss']
})
export class FormationCardComponent {

  @Input() formation!: Formation;
  @Input() withProgress!: boolean;
  @Input() progressValue = 50;

  centered = false;
  disabled = false;
  unbounded = false;


    constructor() { }
}
