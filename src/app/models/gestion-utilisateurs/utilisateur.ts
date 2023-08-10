import {InfosPersonnelles} from "./infos-personnelles";
import {User} from "@core";

export interface Utilisateur extends User{
  username?: string;
  password?: string;
  infosPersonnelles?: InfosPersonnelles;
}
