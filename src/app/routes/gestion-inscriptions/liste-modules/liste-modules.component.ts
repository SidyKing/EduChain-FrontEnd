import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Module} from "../../../models/gestion-formations/module";

@Component({
    selector: 'app-gestion-inscriptions-liste-modules',
    templateUrl: './liste-modules.component.html',
    styleUrls: ['./liste-modules.component.scss']
})
export class GestionInscriptionsListeModulesComponent implements OnInit {

    idAnnee!: number;
    annee!: number;
    idNiveau!: number;
    niveau!: string;
    idFormation!: number;
    formation!: string;
    modules: Module[] = [
        {
            id: 1,
            nom: "Module 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt luctus, nunc nisl ultricies nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
            nombreCredits: 6,
            numeroSemestre: 1,
            disabled: false
        },
        {
            id: 2,
            nom: "Module 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt luctus, nunc nisl ultricies nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
            nombreCredits: 6,
            numeroSemestre: 1,
            disabled: false
        }
    ]

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.idAnnee = Number(params.idAnnee);
            this.idNiveau = Number(params.idNiveau);
            this.idFormation = Number(params.idFormation);
            this.annee = 2000;
            this.niveau = "Licence";
            this.formation = "Developpement et Administration d'Applications";
        });
    }
}
