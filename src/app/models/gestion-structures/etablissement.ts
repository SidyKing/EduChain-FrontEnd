import {Structure} from "./structure";
import {NIVEAU_ENSEIGNEMENT} from "./niveau-enseignement";
import {TYPE_ETABLISSEMENT} from "./type-etablissement";


export interface Etablissement extends Structure {
  typeEtablissement: TYPE_ETABLISSEMENT;
  niveauEnseignement: NIVEAU_ENSEIGNEMENT;
}
