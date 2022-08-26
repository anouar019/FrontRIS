import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Patient } from 'src/app/modeles/patient.model';
import { PatientServService } from 'src/app/services/patient-serv.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  routeParams!:any;

   patient: Patient ={"id":0,birth:"",firstName:"", lastName: "", sex:""};

   error="";
   message="";





  constructor(private route: ActivatedRoute, private patientService: PatientServService) { 

    

  }

  ngOnInit(): void {

    

    // this.routeParams = this.route.snapshot.paramMap;
    // let test=this.routeParams.get("id");

    // this.patient.id=this.routeParams.get('id');
    // this.patient.birth=this.routeParams.get('birth');
    // this.patient.firstName=this.routeParams.get('firstName');
    // this.patient.lastName=this.routeParams.get('lastName');
    // this.patient.sex=this.routeParams.get('sex');

    // console.log(this.routeParams)
    this.route.params.subscribe(

      {

        next : (data)=>{

          let temp=data as Patient;
          this.patient.id=temp.id;
          this.patient.lastName=temp.lastName;
          this.patient.firstName=temp.firstName;
          this.patient.birth=temp.birth;
          this.patient.sex=temp.sex;
        }
        
      }

    )

    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = String(routeParams.get('patient'));
    // console.log(productIdFromRoute)
    // this.route.params.subscribe(
    //   (params: Params) => this.patient = params['Patient']
      
    //   );
  
  }

  editPatient(patient: Patient){

    this.patientService.update(patient).subscribe({

      next:(data)=> {
        this.error="";
        this.message="Commit: "+ JSON.stringify(data)},
      error: err =>{
        this.message=""
        this.error=JSON.stringify(err)}

    });

  }

}
