export enum TYPE_STRUCTURE {
  ETABLISSEMENT = 'Etablissement',
  CERTIFICATION = 'Structure de certification',
  ETATIQUE = 'Structure étatique',
}


export interface Structure {
  id?: number;
  nom: string;
  adresse: string;
  type?: TYPE_STRUCTURE;
}
