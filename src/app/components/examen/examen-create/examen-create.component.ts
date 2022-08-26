import { JsonPipe } from '@angular/common';
import { Target, verifyHostBindings } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Examen } from 'src/app/modeles/examen.model';
import { Patient } from 'src/app/modeles/patient.model';
import { Protocole } from 'src/app/modeles/protocole.model';
import { ExamenServService } from 'src/app/services/examen-serv.service';
import { PatientServService } from 'src/app/services/patient-serv.service';
import { ProtocoleServService } from 'src/app/services/protocole-serv.service';

@Component({
  selector: 'app-examen-create',
  templateUrl: './examen-create.component.html',
  styleUrls: ['./examen-create.component.css']
})
export class ExamenCreateComponent implements OnInit {

  error="";
  message="";
  selectedPatient!: Patient;
  selectedProtocole!: Protocole;
  examen: Examen={id:0,patient:this.selectedPatient,protocole:this.selectedProtocole, medecinRadiologue:"",medecinPrescripteur:"", manipulateur:"",date:""};



@Input()
myList!: Examen[];

@Input() 
myboolean!: boolean;

myPatientList!: Patient[];
myProtocoleList!: Protocole[];
  patientID!: number;

  constructor(private examenService: ExamenServService, private patientService: PatientServService, private protocoleService: ProtocoleServService) { }

  ngOnInit(): void {

    this.patientService.getItems().subscribe({

      next : (data)=>{
        
        this.myPatientList=data as Patient[];
      },
      error: err =>{
        this.error=err;
        console.log(err)}


    })



    this.protocoleService.getItems().subscribe({


      next: (data)=>{

        this.myProtocoleList=data as Protocole[];
      },

      error: err=> {

        this.error=err;
        console.log(err)

      }


    })

  }


  createExamen(){

    if(!this.verifyExam()){
      this.error="Veuillez verifier le formulaire!"
    }

    this.examen.patient=this.selectedPatient;
    this.examen.protocole=this.selectedProtocole;

   this.examenService.post(this.examen).subscribe({


    next:(data)=>{
      
      this.myList.push(this.examen)//(data as Examen)
      this.myList.sort((objA, objB) => new Date(objA.date).getTime() - new Date(objB.date).getTime())
      this.error="";
    this.message="commit "+JSON.stringify(data);

    },

    error:err=>{

      this.message="";
      this.error=JSON.stringify(err)

    }

   })

  }


  verifyExam(): boolean{

    if(

      this.examen.date==""||
      this.examen.manipulateur==""||
      this.examen.medecinPrescripteur==""||
      this.examen.medecinRadiologue==""||
      this.examen.patient==null||
      this.examen.protocole==null


    )return false;

    return true;
  }


}
