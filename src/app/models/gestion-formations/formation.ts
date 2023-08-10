import {NIVEAU_ETUDES} from "./niveau-etudes";

export interface Formation {
  id?: number;
  slug: string;
  nom: string;
  description: string;
  duree: string;
  niveauEtudes: NIVEAU_ETUDES;
}
