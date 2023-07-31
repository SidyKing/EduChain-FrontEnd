import {InfosPersonnelles} from "./infos-personnelles";

export interface Utilisateur {
  id?: number;
  username: string;
  password: string;
  email: string;
  infosPersonnelles: InfosPersonnelles;
}
