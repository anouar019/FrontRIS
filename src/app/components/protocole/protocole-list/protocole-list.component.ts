import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Protocole } from 'src/app/modeles/protocole.model';
import { ProtocoleServService } from 'src/app/services/protocole-serv.service';

@Component({
  selector: 'app-protocole-list',
  templateUrl: './protocole-list.component.html',
  styleUrls: ['./protocole-list.component.css']
})
export class ProtocoleListComponent implements OnInit {

  @Input()
  myList!: Protocole[];

  searchFormGroup!: FormGroup;
  
 

  error='';

  constructor(public readonly keycloak: KeycloakService,private protocoleService: ProtocoleServService ,private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.searchFormGroup=this.fb.group(
      {
        keyword: this.fb.control("")
      }
    );

  }


  handleSearchProtocole(){



    
  }


  setProtocole(protocole: Protocole){

    this.router.navigate(["protocoleUpdate", protocole]);


  }


  handleDeleteProtocole(protocole: Protocole){

    this.error='';

    let conf= confirm("Are you sure?");
    if(conf==false) return;



    this.protocoleService.deleteProduct(protocole.id).subscribe({
      next : (data)=>{
        //this.handleGetAllProducts();
        
        let index=this.myList.indexOf(protocole);
        this.myList.splice(index,1);
      },
      error: err =>{
        this.error=err}
    })

  }

}
