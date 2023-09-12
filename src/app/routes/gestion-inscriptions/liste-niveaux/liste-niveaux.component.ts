import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";


export interface Niveau {
  nom: string; // Assurez-vous que la clé "nom" correspond à la propriété "nom" de l'objet "Niveau"
  link: string;
}

@Component({
  selector: 'app-gestion-inscriptions-liste-niveaux',
  templateUrl: './liste-niveaux.component.html',
  styleUrls: ['./liste-niveaux.component.scss']
})
export class GestionInscriptionsListeNiveauxComponent implements OnInit {

  colonnes:string[] = ['nom'];

  cycles = [
    {
      nom: 'Licence',
      niveaux: [
        {nom: 'L1', link: 'l1'},
        {nom: 'L2', link: 'l2'},
        {nom: 'L3', link: 'l3'},
      ]
    },
    {
      nom: 'Master',
      niveaux: [
        {nom: 'M1', link: 'm1'},
        {nom: 'M2', link: 'm2'},
      ]
    },
    {
      nom: 'Doctorat',
      niveaux: [
        {nom: 'D1', link: 'd1'},
        {nom: 'D2', link: 'd2'},
        {nom: 'D3', link: 'd3'},
      ]
    },
  ];

  niveaux: Niveau[] = []; // Variable pour stocker les niveaux

  constructor() {}

  ngOnInit() {}

  // getListeNiveauxByCycle(cycle: string) {
  //   return new MatTableDataSource(
  //     this.cycles.find(c => c.nom === cycle)?.niveaux
  //   );
  // }


  getListeNiveauxByCycle(cycle: string) {
    this.niveaux = this.cycles.find((c) => c.nom === cycle)?.niveaux || [];
  }
}
