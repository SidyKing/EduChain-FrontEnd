import {Utilisateur} from "./utilisateur";

export interface InfosPersonnelles {
  id?: number;
  nom: string;
  prenom: string;
  sexe?: string;
  dateNaissance: Date;
  lieuNaissance: string;
  utilisateur: Utilisateur;
}
