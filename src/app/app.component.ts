import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'frontPacs4';
  public isLogged= false;
  public profilUser: KeycloakProfile| null=null;
  public test!: string[];


  constructor(public readonly keycloak: KeycloakService){}

  public async ngOnInit() {


    
    this.isLogged=await this.keycloak.isLoggedIn();
    //type rolesUser= Array<(id: number, text: string)>

    
      this.profilUser= await this.keycloak.loadUserProfile();
    //  this.test= await this.keycloak.getUserRoles();

    

  }


  

  public closeSession(){

    //console.log(this.keycloak.getUserRoles())
     this.keycloak.logout();

  }

  
 
  public test1(){

    // console.log(this.keycloak.getToken.)
    console.log(this.isLogged)
  }


  public  hasRole(role: string): boolean{

    
    
    return this.keycloak.getUserRoles().includes(role)
    //return this.test.includes(role)

  }

  // public async authenticated(): Promise<boolean>{

  //   return this.keycloak.isLoggedIn()
  // }

}
