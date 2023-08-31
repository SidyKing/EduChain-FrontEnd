import {Formation} from "../gestion-formations/formation";
import {NIVEAU} from "./niveau";
import {AnneeScolaire} from "./annee-scolaire";
import {Profil} from "../gestion-utilisateurs/profil";


export interface Inscription {
  id?: number;
  date?: Date;
  profil: Profil;
  formation: Formation;
  niveau: NIVEAU;
  anneeScolaire: AnneeScolaire;
}
