import {NIVEAU_ETUDES} from "./niveau-etudes";
import {Etablissement} from "../gestion-structures/etablissement";

export interface Formation {
  id?: number;
  nom: string;
  description: string;
  duree: string;
  niveauEtudes: NIVEAU_ETUDES;
  etablissement: Etablissement;
  disabled?: boolean;
}
