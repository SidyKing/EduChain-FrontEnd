import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute} from "@angular/router";
import {MtxGridColumn} from "@ng-matero/extensions/grid";

@Component({
  selector: 'app-gestion-inscriptions-liste-demandes',
  templateUrl: './liste-demandes.component.html',
  styleUrls: ['./liste-demandes.component.scss']
})
export class GestionInscriptionsListeDemandesComponent implements OnInit {

  annee = 0;
  niveau = '';
  formation = '';

  displayedColumns = ['nom', 'prenom', 'sexe', 'dateDemande'];

  datasource = new MatTableDataSource(
    [
      {nom: 'Doe', prenom: 'John', sexe: 'M', dateDemande: '01/01/2021'},
      {nom: 'Doe', prenom: 'Jane', sexe: 'F', dateDemande: '01/01/2021'},
      {nom: 'Doe', prenom: 'John', sexe: 'M', dateDemande: '01/01/2021'},
      {nom: 'Doe', prenom: 'Jane', sexe: 'F', dateDemande: '01/01/2021'},
    ]);

  @ViewChild(MatSort, {static: true}) sort!: MatSort;


    data: any[] = [
        {
            nom: 'Doe',
            prenom: 'John',
            sexe: 'M',
            dateDemande: '01/01/2021',
        },
        {
            nom: 'Doe',
            prenom: 'Jane',
            sexe: 'F',
            dateDemande: '01/01/2021',
        },
        {
            nom: 'Doe',
            prenom: 'John',
            sexe: 'M',
            dateDemande: '01/01/2021',
        }
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
      header: 'Date de demande',
      field: 'dateDemande',
      sortable: true,
      width: '150px',
    },
  ];
    rowStriped = true;
    rowHover = true;



  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.annee = params.annee;
      this.niveau = params.niveau;
      this.formation = params.formation;
    });
  }

  ngAfterViewInit() {
    this.datasource.sort = this.sort;
  }

  onRowClick(row: any) {
    console.log(row.rowData);
  }

}
