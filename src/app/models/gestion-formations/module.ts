import {Formation} from "./formation";

export interface Module {
    id?: number;
    nom: string;
    description?: string;
    numeroSemestre?: number;
    nombreCredits: number;
    formation?: Formation;
    disabled?: boolean;
}
