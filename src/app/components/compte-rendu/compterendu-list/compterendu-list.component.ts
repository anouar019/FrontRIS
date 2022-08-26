import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { CompteRendu } from 'src/app/modeles/compte-rendu.model';
import { CompteRenduServService } from 'src/app/services/compte-rendu-serv.service';

@Component({
  selector: 'app-compterendu-list',
  templateUrl: './compterendu-list.component.html',
  styleUrls: ['./compterendu-list.component.css']
})
export class CompterenduListComponent implements OnInit {


  @Input()
  myList!: CompteRendu[];

  error='';

  searchFormGroup!: FormGroup;

  constructor(public readonly keycloak: KeycloakService,private fb: FormBuilder, private router: Router, private crserv: CompteRenduServService) { }

  ngOnInit(): void {

    this.searchFormGroup=this.fb.group(
      {
        keyword: this.fb.control("")
      }
    );

  }


  handleSearchPatient(){}

  setCR(cr: CompteRendu){

    this.router.navigate(["crUpdate", {billing:JSON.stringify(cr)}]);

  }

  handleDeleteProducts(cr: CompteRendu){


    this.error='';

    let conf= confirm("Are you sure?");
    if(conf==false) return;


    this.crserv.delete(cr).subscribe({

      next:(data)=>{

      let index= this.myList.indexOf(cr);
      this.myList.splice(index,1);
      },
      error: err => {

        this.error=err;

      }

    });


    
    

  }

}
