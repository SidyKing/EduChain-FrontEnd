import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material/sort";
import {MtxGridColumn} from "@ng-matero/extensions/grid";

@Component({
    selector: 'app-gestion-inscriptions-liste-inscriptions',
    templateUrl: './liste-inscriptions.component.html',
    styleUrls: ['./liste-inscriptions.component.scss']
})
export class GestionInscriptionsListeInscriptionsComponent implements OnInit {

    idAnnee!: number;
    annee!: number;
    idNiveau!: number;
    niveau!: string;
    idFormation!: number;
    formation!: string;
    idModule!: number;
    module!: string;

    displayedColumns = ['nom', 'prenom', 'sexe', 'dateInscription'];

    datasource = new MatTableDataSource(
        [
            {nom: 'Doe', prenom: 'John', sexe: 'M', dateInscription: '01/01/2021'},
            {nom: 'Doe', prenom: 'Jane', sexe: 'F', dateInscription: '01/01/2021'},
            {nom: 'Doe', prenom: 'John', sexe: 'M', dateInscription: '01/01/2021'},
            {nom: 'Doe', prenom: 'Jane', sexe: 'F', dateInscription: '01/01/2021'},
        ]);

    @ViewChild(MatSort, {static: true}) sort!: MatSort;

    data: any[] = [
        {
            nom: 'Doe',
            prenom: 'John',
            sexe: 'M',
            dateInscription: '01/01/2021',
            validation: true
        },
        {
            nom: 'Doe',
            prenom: 'Jane',
            sexe: 'F',
            dateInscription: '01/01/2021',
            validation: true
        },
        {
            nom: 'Doe',
            prenom: 'John',
            sexe: 'M',
            dateInscription: '01/01/2021',
            validation: false
        },
    ];

    columns: MtxGridColumn[] = [
        {
            header: 'Nom',
            field: 'nom',
            sortable: true,
            width: '150px',
        },
        {
            header: 'Prénom',
            field: 'prenom',
            sortable: true,
            width: '150px',
        },
        {
            header: 'Sexe',
            field: 'sexe',
        },
        {
            header: 'Validation',
            field: 'validation',
            sortable: true,
            width: '150px',
        },
        {
            header: 'Date d\'inscription',
            field: 'dateInscription',
            sortable: true,
            width: '150px',
        },
    ];

    rowSelectable = true;
    multiSelectable = true;
    multiSelectionWithClick = true;
    rowSelected: any[] = [];
    rows: any[] = [];


    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.idAnnee = params.idAnnee;
            this.idNiveau = params.idNiveau;
            this.idFormation = params.idFormation;
            this.idModule = params.idModule;
            this.annee = 2000;
            this.niveau = "Licence";
            this.formation = "Developpement et Administration d'Applications";
            this.module = "Module 1";
        });
    }

    ngAfterViewInit() {
        this.datasource.sort = this.sort;
    }

    validate() {
        console.log(this.rows);

    }

    unvalidate() {
        console.log(this.rows);

    }

    // onRowSelectChange(row: any) {
    //     console.log(this.rows);
    // }

    rowSelectionChange(e: any) {
        console.log(`onRowSelectChange`);
        this.rows = [];
        this.rows = e;
        console.log(`this.rows : `, );
        console.log(this.rows);

    }
}
