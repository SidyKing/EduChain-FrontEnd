import {Structure} from "../gestion-structures/structure";
import {ROLE} from "./role";
import {InfosPersonnelles} from "./infos-personnelles";

export interface Profil {
  id?: number;
  date?: Date;
  role: ROLE;
  infosPersonnelles: InfosPersonnelles;
  structure?: Structure;
}
