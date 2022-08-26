import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GlobalConstComponent } from '../const/global-const/global-const.component';
import { Document } from '../modeles/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentServService {


  private url= GlobalConstComponent.url+'/document';


  headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getItems(): Observable<object> {
  
    return this.http.get(this.url);
  }


  delete(id: number): Observable<object>{

    return this.http.delete(this.url+'/'+id);
}
  

postItem(document: Document): Observable<object>{

  let jsonPatient="{\"id\": "+document.patient.id+"}" ;

  let jsonDocument="{\"nameFile\": \""+document.nameFile+"\",\"myfileBase64\": \""+document.myfileBase64+"\",\"typeDocument\": \""+document.typeDocument+"\",\"localedate\": \""+document.localedate;  

  jsonDocument= jsonDocument+"\",\"patient\":"+jsonPatient+"}"

  console.log("inside: "+jsonDocument)
  

  return this.http.post<Document>(this.url,jsonDocument, {'headers':this.headers});

}

}

