import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/modeles/patient.model';
import { PatientServService } from 'src/app/services/patient-serv.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  @Input() myList!: Patient[];
  @Input() myboolean!: boolean;

  myPatient:Patient={id:0,lastName:"",firstName:"",birth:"",sex:""};

  model!: NgbDateStruct;
  error: String='';
  message: String='';

  constructor(private patientService: PatientServService, private router: Router) { }

  ngOnInit(): void {
  }

  createPatient(){

    if(this.verifyPatient())
    {
      this.patientService.postItem(this.myPatient).subscribe({
        next: (data) =>{
                        this.myList.push(data as Patient)
                        this.myList.sort((a,b)=>a.id-b.id)
                        this.patientReinitialise();
                        this.error=new String();
                        this.message="Patient created";

                      

                      },
        error: err => {this.error="Veuillez saisir correctement les informations (Birth => yyyy-mm-dd)";
                        this.message='';
        }
      })
    }

    else {
      this.message='';
    this.error="Veuillez saisir correctement les informations";}



  }


  patientReinitialise(){

    this.myPatient={id:0,lastName:"",firstName:"",birth:"",sex:""};

  }

  private verifyPatient(): boolean
  {

    if(

      this.myPatient.lastName=="" ||
      this.myPatient.firstName=="" ||
      this.myPatient.birth=="" ||
      this.myPatient.sex==""

    )return false;

    return true;



    
  }

 

}
