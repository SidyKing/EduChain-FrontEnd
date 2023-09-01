import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionInscriptionsInscriptionsComponent } from './inscriptions/inscriptions.component';
import { GestionInscriptionsDemandesComponent } from './demandes/demandes.component';
import { GestionInscriptionsListeInscriptionsComponent } from './liste-inscriptions/liste-inscriptions.component';
import { GestionInscriptionsListeDemandesComponent } from './liste-demandes/liste-demandes.component';
import { GestionInscriptionsListeNiveauxComponent } from './liste-niveaux/liste-niveaux.component';
import { GestionInscriptionsListeFormationsComponent } from './liste-formations/liste-formations.component';
import { GestionInscriptionsListeModulesComponent } from './liste-modules/liste-modules.component';

const routes: Routes = [
  { path: 'inscriptions', component: GestionInscriptionsInscriptionsComponent },
  { path: 'inscriptions/:idAnnee', component: GestionInscriptionsListeNiveauxComponent },
  { path: 'inscriptions/:idAnnee/:idNiveau', component: GestionInscriptionsListeFormationsComponent },
  { path: 'inscriptions/:idAnnee/:idNiveau/:idFormation', component: GestionInscriptionsListeModulesComponent },
  { path: 'inscriptions/:idAnnee/:idNiveau/:idFormation/:idModule',component: GestionInscriptionsListeInscriptionsComponent },

  { path: 'demandes', component: GestionInscriptionsDemandesComponent },
  { path: 'demandes/:idAnnee', component: GestionInscriptionsListeNiveauxComponent },
  { path: 'demandes/:idAnnee/:idNiveau', component: GestionInscriptionsListeFormationsComponent },
  { path: 'demandes/:idAnnee/:idNiveau/:idFormation', component: GestionInscriptionsListeDemandesComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionInscriptionsRoutingModule { }
