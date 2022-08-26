import { Patient } from "./patient.model";

export interface Document {

    id: number;
    typeDocument: string;
    patient: Patient;
    nameFile: string;
    myfileBase64: string;
    localedate: string;

}
