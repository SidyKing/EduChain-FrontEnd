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

    annee = 0;
    niveau = '';
    formation = '';
    module= '';

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
    multiSelectable= true;
    multiSelectionWithClick= true;
    rowSelected: any[] = [];
    rows: any[] = [];



    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.annee = params.annee;
            this.niveau = params.niveau;
            this.formation = params.formation;
            this.module = params.module;
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

    onRowSelectChange(row: any) {
        console.log(this.rows);
    }

    rowSelectionChange(e: any) {
        console.log(e);
        this.rows = [];
        this.rows = e;
        console.log(this.rows);

    }
}
