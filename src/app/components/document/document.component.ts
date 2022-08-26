import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AsyncSubject, Observable, ReplaySubject } from 'rxjs';
import { Document } from 'src/app/modeles/document.model';
import { DocumentServService } from 'src/app/services/document-serv.service';



@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {






 
  
  constructor(public readonly keycloak: KeycloakService,private documentService: DocumentServService) {
  }
 

  myList!: Document[];
  someData="test";
  test="ok";
  myboolean= true;

  ngOnInit(): void {

    this.updateList();

  }

  updateList(){

    this.documentService.getItems().subscribe(
      data=>{this.myList=data as Document[];
           }
      
    );

  }


  base64Output !: string;

  onFileSelected(event) {
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.base64Output = base64;
    });
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }


  showDocumentList(bool: boolean){

    this.myboolean=bool;

  }

}



  