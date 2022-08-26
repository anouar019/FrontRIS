import { Patient } from "./patient.model";
import { Protocole } from "./protocole.model";

export interface Examen {

    id: number;
    medecinPrescripteur: string;
    medecinRadiologue: string;
    manipulateur: string;
    date: string;

    patient: Patient;
    protocole: Protocole;

}
