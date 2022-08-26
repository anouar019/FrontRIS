import { Component, Input, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Document } from 'src/app/modeles/document.model';
import { Patient } from 'src/app/modeles/patient.model';
import { DocumentServService } from 'src/app/services/document-serv.service';
import { PatientServService } from 'src/app/services/patient-serv.service';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent implements OnInit {

@Input()
  myList!: Document[];

  @Input()
  myboolean!: boolean;

  patientsList!: Patient[]
  selectedPatient!: Patient;
  base64Output !: string;
  nameOfFile!: string;

  doc: Document={id:0,localedate:"",myfileBase64: this.base64Output, nameFile:this.nameOfFile,patient:this.selectedPatient, typeDocument:""}

  error="";
  message="";
  

  

  constructor(private patientService: PatientServService, private docService: DocumentServService) { }

  ngOnInit(): void {

    this.patientService.getItems().subscribe({

      next : (data)=>{
        
        this.patientsList=data as Patient[];
      },
      error: err =>{
        this.error=err;
        console.log(err)}


    })

  }


  onFileSelected(event) {

    this.nameOfFile=event.target.files[0].name;

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


  createDOC(){

    this.doc.patient=this.selectedPatient;
    this.doc.nameFile=this.nameOfFile;
    this.doc.myfileBase64=this.base64Output;
    console.log(JSON.stringify(this.doc))

   

    if(this.verifyDocument())
    {
      this.docService.postItem(this.doc).subscribe({
        next: (data) =>{
                        this.myList.push(this.doc)//(data as Document)
                        this.myList.sort((a,b)=>a.id-b.id)
                        this.documentReinitialise();
                        this.error="";
                        this.message="Document created";

                      

                      },
        error: err => {this.error="Veuillez saisir correctement les informations";
                        this.message='';
        }
      })
    }

    else {
      this.message='';
    this.error="Veuillez saisir correctement les informations";}


  }


  private documentReinitialise(){
    this.doc={id:0,localedate:"",myfileBase64: this.base64Output, nameFile:this.nameOfFile,patient:this.selectedPatient, typeDocument:""};
  }

  private verifyDocument(): boolean
  {

    if(

      this.doc.patient==null ||
      this.doc.typeDocument=="" ||
      this.doc.nameFile=="" ||
      this.doc.myfileBase64==""

    )return false;

    return true;



    
  }


}
