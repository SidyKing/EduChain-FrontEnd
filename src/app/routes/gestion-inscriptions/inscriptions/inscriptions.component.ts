import {Component, OnInit} from '@angular/core';
import {AnneeScolaire} from "../../../models/gestion-inscriptions/annee-scolaire";
import {AnneeScolaireService} from "../../../services/gestion-inscriptions/annee-scolaire.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-gestion-inscriptions-inscriptions',
    templateUrl: './inscriptions.component.html',
    styleUrls: ['./inscriptions.component.scss']
})
export class GestionInscriptionsInscriptionsComponent implements OnInit {

    anneesScolaires!: AnneeScolaire[];


    constructor(private anneeScolaireService :AnneeScolaireService) {}

    ngOnInit() {
        this.anneeScolaireService.getAll().subscribe(
            data => {
                this.anneesScolaires = data;
                console.log(data);
            }
        );
    }

    trackById(index: number, item: AnneeScolaire) {
        return item.id;
    }

}
