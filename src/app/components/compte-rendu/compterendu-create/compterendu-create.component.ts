import { Component, Input, OnInit } from '@angular/core';
import { CompteRendu } from 'src/app/modeles/compte-rendu.model';
import { Examen } from 'src/app/modeles/examen.model';
import { CompteRenduServService } from 'src/app/services/compte-rendu-serv.service';
import { ExamenServService } from 'src/app/services/examen-serv.service';

@Component({
  selector: 'app-compterendu-create',
  templateUrl: './compterendu-create.component.html',
  styleUrls: ['./compterendu-create.component.css']
})
export class CompterenduCreateComponent implements OnInit {


  error="";
  message="";
  selectedExam!: Examen;
  CR: CompteRendu={id:0, examen: this.selectedExam,titre:"",corp:"", etat:"NULL",medecinLogin:"", secretaireLogin:"", signature:"", extension1:"", extension2:"", extension3:""};




  @Input()
  myList!: CompteRendu[];

  @Input()
  myboolean!: boolean;

  examensList!: Examen[];

  constructor(private examenServ: ExamenServService, private crService: CompteRenduServService) { }

  ngOnInit(): void {


    this.examenServ.getItems().subscribe({

      next : (data)=>{
        
        this.examensList=data as Examen[];
      },
      error: err =>{
        this.error=err;
        console.log(err)}


    })


  }



  createCR(){

    if(!this.verifyExam()){
      this.error="Veuillez verifier le formulaire!"
    }

    this.CR.examen=this.selectedExam;

   this.crService.post(this.CR).subscribe({


    next:(data)=>{
      
      this.myList.push(this.CR)//(data as CompteRendu)
      this.myList.sort((objA, objB) => new Date(objA.examen.date).getTime() - new Date(objB.examen.date).getTime())
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

      this.CR.titre==""||
      this.CR.corp==""||
      this.CR.medecinLogin==""||
      this.CR.secretaireLogin==""||
      this.selectedExam==null


    )return false;

    return true;
  }



}
