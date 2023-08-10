import {Module} from "./module";

export interface Cours {
  id?: number;
  slug: string;
  nom: string;
  description: string;
  module: Module;
}
