import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-gestion-inscriptions-demandes-demandes-par-niveau-dialog',
  templateUrl: './demandes-par-niveau-dialog.component.html',
  styleUrls: ['./demandes-par-niveau-dialog.component.scss']
})
export class GestionInscriptionsDemandesDemandesParNiveauDialogComponent implements OnInit {

  displayedColumns:string[] = ['formation'];

  dataSource = new MatTableDataSource([
    {nom: 'Développement et Administration d\'Applications'},
    {nom: 'Systèmes Réseaux et Télécommunications'},
  ]);

  @ViewChild(MatSort, {static: true}) sort! : MatSort ;
  constructor(private router : Router,
              public dialog: MatDialog,) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort as MatSort;
  }

  onClickRow(row: any) {
    this.router.navigate(['/gestion-inscriptions/demandes/2022/l1/', row.nom]);
    this.dialog.closeAll();

  }

}
