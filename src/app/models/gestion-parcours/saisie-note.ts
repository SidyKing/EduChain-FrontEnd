import {Inscription} from "../gestion-inscriptions/inscription";
import {Profil} from "../gestion-utilisateurs/profil";
import {Cours} from "../gestion-formations/cours";
import {ACTIVITE} from "./activite";

export interface SaisieNote {
  id?: number;
  date?: Date;
  inscription: Inscription;
  enseignant: Profil;
  cours: Cours;
  activite: ACTIVITE;
  note: number;


}
