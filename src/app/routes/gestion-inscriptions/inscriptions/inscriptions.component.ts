import {Component, OnInit} from '@angular/core';
import {AnneeScolaire} from "../../../models/gestion-inscriptions/annee-scolaire";

@Component({
    selector: 'app-gestion-inscriptions-inscriptions',
    templateUrl: './inscriptions.component.html',
    styleUrls: ['./inscriptions.component.scss']
})
export class GestionInscriptionsInscriptionsComponent implements OnInit {

    anneesScolaires: AnneeScolaire[] = [
        {
            id: 4,
            annee: 2022,
            debut: new Date(2022, 8, 1),
            fin: new Date(2023, 7, 31)
        },
        {
            id: 3,
            annee: 2021,
            debut: new Date(2021, 8, 1),
            fin: new Date(2022, 7, 31)
        },
        {
            id: 2,
            annee: 2020,
            debut: new Date(2020, 8, 1),
            fin: new Date(2021, 7, 31)
        },
        {
            id: 1,
            annee: 2019,
            debut: new Date(2019, 8, 1),
            fin: new Date(2020, 7, 31)
        },
    ];

    constructor() {}

    ngOnInit() {}

}
