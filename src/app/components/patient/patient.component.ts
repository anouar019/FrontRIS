import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Patient } from 'src/app/modeles/patient.model';
import { PatientServService } from 'src/app/services/patient-serv.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(public readonly keycloak: KeycloakService,private patientService: PatientServService) { }

  myList!: Patient[];
  someData="test";
  test="ok";
  myboolean= true;

  ngOnInit(): void {

    this.updateList();

  }

  updateList(){

    this.patientService.getItems().subscribe(
      data=>{this.myList=data as Patient[];
           }
      
    );

  }

  showPatientList(bool: boolean){

    this.myboolean=bool;

  }

}
