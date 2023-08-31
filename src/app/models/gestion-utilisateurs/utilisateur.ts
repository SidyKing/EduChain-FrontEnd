import {InfosPersonnelles} from "./infos-personnelles";
import {User} from "@core";
import {ROLE} from "./role";
import {Profil} from "./profil";

export interface Utilisateur extends User{
  username?: string;
  infosPersonnelles?: InfosPersonnelles;
  profils?: Profil[];
}
