import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { CompteRendu } from 'src/app/modeles/compte-rendu.model';
import { CompteRenduServService } from 'src/app/services/compte-rendu-serv.service';

@Component({
  selector: 'app-compte-rendu',
  templateUrl: './compte-rendu.component.html',
  styleUrls: ['./compte-rendu.component.css']
})
export class CompteRenduComponent implements OnInit {


  myList!: CompteRendu[];

  myboolean= true;

  constructor(public readonly keycloak: KeycloakService,private CRService: CompteRenduServService) { }

  ngOnInit(): void {

    this.updateList();
  }


  updateList(){

    this.CRService.getItems().subscribe(
      data=>{this.myList=data as CompteRendu[];
           }
      
    );

  }


  showCRList(bool: boolean){

    this.myboolean=bool;

  }

}
