import {Component, OnInit} from '@angular/core';
import {Formation} from "../../../models/gestion-formations/formation";
import {NIVEAU_ETUDES} from "../../../models/gestion-formations/niveau-etudes";
import {TYPE_ETABLISSEMENT} from "../../../models/gestion-structures/type-etablissement";
import {NIVEAU_ENSEIGNEMENT} from "../../../models/gestion-structures/niveau-enseignement";
import {ActivatedRoute} from "@angular/router";
import {TYPE_STRUCTURE} from "../../../models/gestion-structures/structure";

@Component({
    selector: 'app-gestion-inscriptions-liste-formations',
    templateUrl: './liste-formations.component.html',
    styleUrls: ['./liste-formations.component.scss']
})
export class GestionInscriptionsListeFormationsComponent implements OnInit {

    idAnnee!: number;
    annee!: number;
    idNiveau!: number;
    niveau!: string;

    formations: Formation[] = [
        {
            id: 1,
            nom: "Developpement et Administration d'Applications",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt luctus, nunc nisl ultricies nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
            duree: "3 ans",
            niveauEtudes: NIVEAU_ETUDES.LICENCE,
            etablissement: {
                id: 1,
                nom: "Université Alioune Diop de Bambey",
                adresse: "Lorem ipsum dolor sit amet",
                type: TYPE_STRUCTURE.ETABLISSEMENT,
                typeEtablissement: TYPE_ETABLISSEMENT.PUBLIC,
                niveauEnseignement: NIVEAU_ENSEIGNEMENT.SUPERIEUR
            },
            disabled: false
        },
        {
            id: 2,
            nom: "Systemes Reseaux et Telecommunications",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt luctus, nunc nisl ultricies nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.",
            duree: "3 ans",
            niveauEtudes: NIVEAU_ETUDES.LICENCE,
            etablissement: {
                id: 1,
                nom: "Université Alioune Diop de Bambey",
                adresse: "Lorem ipsum dolor sit amet",
                type: TYPE_STRUCTURE.ETABLISSEMENT,
                typeEtablissement: TYPE_ETABLISSEMENT.PUBLIC,
                niveauEnseignement: NIVEAU_ENSEIGNEMENT.SUPERIEUR
            },
            disabled: false
        },
    ]


    // formations: any[] = [
    //     {
    //       nom: "Developpement et Administration d'Applications",
    //       slug: "developpement-et-administration-d-applications",
    //       nbModulesTotal: 6,
    //       nbModulesValide: 0
    //     },
    //     {
    //         nom: "Systemes Reseaux et Telecommunications",
    //         slug: "systemes-reseaux-et-telecommunications",
    //         nbModulesTotal: 6,
    //         nbModulesValide: 3
    //     }
    //     ]
    progressValue = 50;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.idAnnee = Number(params.idAnnee);
            this.idNiveau = Number(params.idNiveau);
            this.annee = 2000;
            this.niveau = "Licence";
        });

    }

    getPercentage(nbModulesTotal: number, nbModulesValide: number) {
        return nbModulesValide / nbModulesTotal;
    }

}
