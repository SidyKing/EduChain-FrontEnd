import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { GestionInscriptionsRoutingModule } from './gestion-inscriptions-routing.module';
import { GestionInscriptionsInscriptionsComponent } from './inscriptions/inscriptions.component';
import { GestionInscriptionsDemandesComponent } from './demandes/demandes.component';
import { GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent } from './inscriptions/inscriptions-par-niveau-dialog/inscriptions-par-niveau-dialog.component';
import { GestionInscriptionsListeInscriptionsComponent } from './liste-inscriptions/liste-inscriptions.component';
import {CdkTableModule} from "@angular/cdk/table";
import { GestionInscriptionsListeDemandesComponent } from './liste-demandes/liste-demandes.component';
import { GestionInscriptionsDemandesDemandesParNiveauDialogComponent } from './demandes/demandes-par-niveau-dialog/demandes-par-niveau-dialog.component';
import { GestionInscriptionsListeNiveauxComponent } from './liste-niveaux/liste-niveaux.component';
import { GestionInscriptionsListeFormationsComponent } from './liste-formations/liste-formations.component';
import { GestionInscriptionsListeModulesComponent } from './liste-modules/liste-modules.component';

const COMPONENTS: any[] = [GestionInscriptionsInscriptionsComponent, GestionInscriptionsDemandesComponent, GestionInscriptionsListeInscriptionsComponent, GestionInscriptionsListeDemandesComponent, GestionInscriptionsListeNiveauxComponent, GestionInscriptionsListeFormationsComponent, GestionInscriptionsListeModulesComponent];
const COMPONENTS_DYNAMIC: any[] = [GestionInscriptionsInscriptionsInscriptionsParNiveauDialogComponent, GestionInscriptionsDemandesDemandesParNiveauDialogComponent];

@NgModule({
  imports: [
    SharedModule,
    GestionInscriptionsRoutingModule,
    CdkTableModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class GestionInscriptionsModule { }
