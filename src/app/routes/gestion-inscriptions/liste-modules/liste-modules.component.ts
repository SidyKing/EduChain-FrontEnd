import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gestion-inscriptions-liste-modules',
  templateUrl: './liste-modules.component.html',
  styleUrls: ['./liste-modules.component.scss']
})
export class GestionInscriptionsListeModulesComponent implements OnInit {

  annee: number = 0;
  niveau: string = '';
  formation: string = '';
  modules: any[] = [
        {
            nom: "Programmation Orientee Objet",
            slug: "programmation-orientee-objet",

        },
        {
            nom: "Programmation Web",
            slug: "programmation-web",
        }
    ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.annee = params.annee;
      this.niveau = params.niveau;
      this.formation = params.formation;
    });
    }
}
