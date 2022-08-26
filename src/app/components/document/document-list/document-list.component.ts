import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Document } from 'src/app/modeles/document.model';
import { DocumentServService } from 'src/app/services/document-serv.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {


  @Input()
  myList!: Document[];

  searchFormGroup!: FormGroup;

  error='';

  constructor(public readonly keycloak: KeycloakService, private fb: FormBuilder, private router: Router, private documentService: DocumentServService) { }

  ngOnInit(): void {


    this.searchFormGroup=this.fb.group(
      {
        keyword: this.fb.control("")
      }
    );

  }


  handleSearchDocument(){}

  getDocument(doc: Document){

    this.onClickDownloadPdf(doc)

  }

  handleDeleteExamen(doc: Document){

    this.error='';

    let conf= confirm("Are you sure?");
    if(conf==false) return;



    this.documentService.delete(doc.id).subscribe({
      next : (data)=>{
        //this.handleGetAllProducts();
        
        let index=this.myList.indexOf(doc);
        this.myList.splice(index,1);
      },
      error: err =>{
        this.error=err;
        console.log(err)}
    })
    

  }


  downloadPdf(base64String, fileName) {
    const source =  `data:application/octet-stream;base64,${base64String}`;
    //const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}`
    link.click();
  }
  onClickDownloadPdf(doc: Document){
    let base64String = doc.myfileBase64;
    this.downloadPdf(base64String,doc.nameFile);
  }


}
