import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-gestion-inscriptions-inscriptions-inscriptions-par-niveau-dialog',
  templateUrl: './inscriptions-par-niveau-dialog.component.html',
  styleUrls: ['./inscriptions-par-niveau-dialog.component.scss']
})
export class GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent implements OnInit {

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
    this.router.navigate(['/gestion-inscriptions/inscriptions/2022/l1/', row.nom]);
    this.dialog.closeAll();

  }
}
