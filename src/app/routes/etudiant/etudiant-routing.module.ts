import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EtudiantParcoursComponent} from './parcours/parcours.component';
import {EtudiantProfilComponent} from './profil/profil.component';

const routes: Routes = [
    {
        path: 'parcours',
        component: EtudiantParcoursComponent
    },
    {
        path: 'profil',
        component: EtudiantProfilComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EtudiantRoutingModule {
}
