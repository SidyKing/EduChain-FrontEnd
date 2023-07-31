import {Module} from "./module";

export interface Cours {
  id?: number;
  nom: string;
  description: string;
  module: Module;
}
