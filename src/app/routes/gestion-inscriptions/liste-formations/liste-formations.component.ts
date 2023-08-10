import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gestion-inscriptions-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.scss']
})
export class GestionInscriptionsListeFormationsComponent implements OnInit {

    annee = 0;
    niveau = '';
    formations: any[] = [
        {
          nom: "Developpement et Administration d'Applications",
          slug: "developpement-et-administration-d-applications",
          nbModulesTotal: 6,
          nbModulesValide: 0
        },
        {
            nom: "Systemes Reseaux et Telecommunications",
            slug: "systemes-reseaux-et-telecommunications",
            nbModulesTotal: 6,
            nbModulesValide: 3
        }
        ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.annee = params.annee;
      this.niveau = params.niveau;
    });
  }

  getPercentage(nbModulesTotal: number, nbModulesValide: number) {
        return nbModulesValide / nbModulesTotal;
  }
}
