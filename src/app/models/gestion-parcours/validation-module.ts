import {Module} from "../gestion-formations/module";
import {Profil} from "../gestion-utilisateurs/profil";
import {SaisieNote} from "./saisie-note";
import {Inscription} from "../gestion-inscriptions/inscription";

export interface ValidationModule {
  id?: number;
  date?: Date;
  inscription: Inscription;
  module: Module;
  enseignant: Profil;
  notesAssociees: SaisieNote[];
  note: number;
  nomcreCredits: number;

}
