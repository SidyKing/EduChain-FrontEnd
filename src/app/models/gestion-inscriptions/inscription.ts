import {InfosPersonnelles} from "../gestion-utilisateurs/infos-personnelles";
import {Formation} from "../gestion-formations/formation";
import {NIVEAU} from "./niveau";

export interface Inscription {
  id?: number;
  date?: Date;
  infosPersonnelles: InfosPersonnelles;
  formation: Formation;
  niveau: NIVEAU;
  anneeScolaire: number;
}
