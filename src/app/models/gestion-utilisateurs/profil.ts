import {Structure} from "../gestion-structures/structure";
import {ROLE} from "./role";
import {Utilisateur} from "./utilisateur";

export interface Profil {
  id?: number;
  date: Date;
  utilisateur: Utilisateur;
  structure?: Structure;
  role: ROLE;
}
