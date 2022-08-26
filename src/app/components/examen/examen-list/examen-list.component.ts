import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Examen } from 'src/app/modeles/examen.model';
import { ExamenServService } from 'src/app/services/examen-serv.service';

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css']
})
export class ExamenListComponent implements OnInit {



  @Input()
  myList!: Examen[];

  searchFormGroup!: FormGroup;

  error='';

  constructor(public readonly keycloak: KeycloakService,private fb: FormBuilder, private router: Router, private examenService: ExamenServService) { }

  ngOnInit(): void {



    this.searchFormGroup=this.fb.group(
      {
        keyword: this.fb.control("")
      }
    );

  }

  setExamen(examen: Examen){

    this.router.navigate(["examenUpdate", {billing:JSON.stringify(examen)}]);

  }

  handleSearchExamen(){}

  getExamen(examen:Examen){


    this.router.navigate(["examenDetails", {billing:JSON.stringify(examen)}]);

  }

  handleDeleteExamen(examen: Examen){

    this.error='';

    let conf= confirm("Are you sure?");
    if(conf==false) return;



    this.examenService.delete(examen.id).subscribe({
      next : (data)=>{
        //this.handleGetAllProducts();
        
        let index=this.myList.indexOf(examen);
        this.myList.splice(index,1);
      },
      error: err =>{
        this.error=err;
        console.log(err)}
    })
    

  }

}
