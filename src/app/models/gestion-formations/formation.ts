import {NIVEAU_ETUDES} from "./niveau-etudes";

export interface Formation {
  id?: number;
  nom: string;
  description: string;
  duree: string;
  niveauEtudes: NIVEAU_ETUDES;
}
