import { Examen } from "./examen.model";

export interface CompteRendu {

    id: number;
    secretaireLogin: string;
    medecinLogin: string;
    titre: string;
    corp: string;
    signature: string;
    extension1: string;
    extension2: string;
    extension3: string;
    etat: string;

    examen: Examen;
}
