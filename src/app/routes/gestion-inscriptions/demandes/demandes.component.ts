import { Component, OnInit } from '@angular/core';
import {
  GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent
} from "../inscriptions/inscriptions-par-niveau-dialog/inscriptions-par-niveau-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {
  GestionInscriptionsDemandesDemandesParNiveauDialogComponent
} from "./demandes-par-niveau-dialog/demandes-par-niveau-dialog.component";

@Component({
  selector: 'app-gestion-inscriptions-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.scss']
})
export class GestionInscriptionsDemandesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openInscriptionsParNiveauDialog() {
    this.dialog.open(GestionInscriptionsDemandesDemandesParNiveauDialogComponent);
  }
}
