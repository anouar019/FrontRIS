import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Patient } from 'src/app/modeles/patient.model';
import { PatientServService } from 'src/app/services/patient-serv.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  @Input() myList!: Patient[];
  searchFormGroup!: FormGroup;
  
 

  error='';

  constructor(public readonly keycloak: KeycloakService,private patientService: PatientServService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {


    this.searchFormGroup=this.fb.group(
      {
        keyword: this.fb.control("")
      }
    );
    
  }

  handleSearchPatient(){

     let keyword=this.searchFormGroup.value.keyword;

     if(keyword==""){
     this.updateList();
     return;
     }     

    this.myList=this.myList.filter(p=> p.lastName.includes(keyword));

  }

  handleDeleteProducts(patient: Patient){

    this.error='';

    let conf= confirm("Are you sure?");
    if(conf==false) return;



    this.patientService.deleteProduct(patient.id).subscribe({
      next : (data)=>{
        //this.handleGetAllProducts();
        
        let index=this.myList.indexOf(patient);
        this.myList.splice(index,1);
      },
      error: err =>{
        this.error=err;
        console.log(err)}
    })

  }


  setPatient(patient: Patient){

    

    this.router.navigate(["patientUpdate", patient]);
  }

  updateList(){

    this.patientService.getItems().subscribe(
      data=>{this.myList=data as Patient[];
           }
      
    );

  }


}
