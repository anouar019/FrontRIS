import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Protocole } from 'src/app/modeles/protocole.model';
import { ProtocoleServService } from 'src/app/services/protocole-serv.service';

@Component({
  selector: 'app-protocole',
  templateUrl: './protocole.component.html',
  styleUrls: ['./protocole.component.css']
})
export class ProtocoleComponent implements OnInit {

  myboolean= true;
  myList!: Protocole[];

  constructor(public readonly keycloak: KeycloakService,private protocoleService: ProtocoleServService) { }

  ngOnInit(): void {

    this.updateList();

  }

  updateList(){


    this.protocoleService.getItems().subscribe(
      data=>{
                this.myList=data as Protocole[];
           }
      
    );

  }


  showProtocoleList(bool: boolean){

    this.myboolean=bool;

  }

}
