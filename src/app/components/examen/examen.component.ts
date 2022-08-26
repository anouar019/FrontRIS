import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Examen } from 'src/app/modeles/examen.model';
import { ExamenServService } from 'src/app/services/examen-serv.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  myboolean= true;

  myList!: Examen[];


  constructor(public readonly keycloak: KeycloakService,private examenService: ExamenServService) { }

  ngOnInit(): void {

    this.updateList();
  }

  showExamenList(bool: boolean){

    this.myboolean=bool;

  }

  updateList(){

    this.examenService.getItems().subscribe(
      data=>{this.myList=data as Examen[];
        this.myList.sort((objA, objB) => new Date(objA.date).getTime() - new Date(objB.date).getTime())
           }
      
    );

  }

}
