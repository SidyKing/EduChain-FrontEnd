import {Component, Input} from '@angular/core';
import {Module} from "../../../models/gestion-formations/module";

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.scss']
})
export class ModuleCardComponent {

  @Input() module!: Module;

  centered = false;
  disabled = false;
  unbounded = false;

  constructor() {}
}
