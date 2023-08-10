import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantParcoursComponent } from './parcours/parcours.component';
import { EtudiantProfilComponent } from './profil/profil.component';

const COMPONENTS: any[] = [EtudiantParcoursComponent, EtudiantProfilComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    EtudiantRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class EtudiantModule { }
