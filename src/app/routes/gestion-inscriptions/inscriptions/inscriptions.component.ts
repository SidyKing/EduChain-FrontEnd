import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent
} from "./inscriptions-par-niveau-dialog/inscriptions-par-niveau-dialog.component";

@Component({
  selector: 'app-gestion-inscriptions-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class GestionInscriptionsInscriptionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

    protected readonly alert = alert;

    openInscriptionsParNiveauDialog() {
      this.dialog.open(GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent);
    }
}
