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
  { path: 'inscriptions/:annee', component: GestionInscriptionsListeNiveauxComponent },
  { path: 'inscriptions/:annee/:niveau', component: GestionInscriptionsListeFormationsComponent },
  { path: 'inscriptions/:annee/:niveau/:formation', component: GestionInscriptionsListeModulesComponent },
  { path: 'inscriptions/:annee/:niveau/:formation/:module',component: GestionInscriptionsListeInscriptionsComponent },

  { path: 'demandes', component: GestionInscriptionsDemandesComponent },
  { path: 'demandes/:annee', component: GestionInscriptionsListeNiveauxComponent },
  { path: 'demandes/:annee/:niveau', component: GestionInscriptionsListeFormationsComponent },
  { path: 'demandes/:annee/:niveau/:formation', component: GestionInscriptionsListeDemandesComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionInscriptionsRoutingModule { }
