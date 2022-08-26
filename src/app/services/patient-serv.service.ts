import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable, of } from 'rxjs';
import { GlobalConstComponent } from '../const/global-const/global-const.component';
import { Patient } from '../modeles/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientServService {

  private url= GlobalConstComponent.url+'/patient';


   headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  

  constructor(private http: HttpClient, private readonly keycloak: KeycloakService) { 

    
  }


  getItems(): Observable<object> {
  
    return this.http.get(this.url);
  }


  postItem(patient: Patient): Observable<object> {
   
    let jsonPatient="{\"lastName\": \""+patient.lastName+"\",\"firstName\": \""+patient.firstName+"\",\"sex\": \""+patient.sex+"\",\"birth\": \""+patient.birth+"\"}"  
   return this.http.post<Patient>(this.url,jsonPatient, {'headers':this.headers});

  }


  deleteProduct(patientID: number):  Observable<object>{



    return this.http.delete(this.url+'/'+patientID);
  }

  update(patient: Patient): Observable<object>{

    const httpOptions: { headers: any; observe: any; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response'
    };
    


    let jsonPatient="{\"lastName\": \""+patient.lastName+"\",\"firstName\": \""+patient.firstName+"\",\"sex\": \""+patient.sex+"\",\"birth\": \""+patient.birth+"\"}"  ;

    return this.http.put(this.url+'/'+patient.id,patient);
    // this.http.put(this.url, jsonPatient);
    // return this.http.put<Patient>(this.url+'/'+patient.id, jsonPatient);


  }

  


}
