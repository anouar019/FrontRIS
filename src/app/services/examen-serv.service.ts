import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GlobalConstComponent } from '../const/global-const/global-const.component';
import { Examen } from '../modeles/examen.model';
import { Patient } from '../modeles/patient.model';
import { Protocole } from '../modeles/protocole.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenServService {

  private url= GlobalConstComponent.url+'/examen';


  headers = new HttpHeaders({'Content-Type':'application/json'});
 

 constructor(private http: HttpClient) { 

   
 }

  
 getItems(): Observable<object> {
  
  return this.http.get(this.url);
}



update(examen: Examen): Observable<object>{

  const httpOptions: { headers: any; observe: any; } = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    observe: 'response'
  };
  
  return this.http.put(this.url+'/'+examen.id,examen);


}


delete(id: number): Observable<object>{


  return this.http.delete(this.url+'/'+id);
}

post(examen: Examen): Observable<object>{

  let jsonPatient="{\"id\": "+examen.patient.id+"}" 
  let jsonProtocole="{\"id\": "+examen.protocole.id+"}" 

  let jsonExamen="{\"manipulateur\": \""+examen.manipulateur+"\",\"medecinPrescripteur\": \""+examen.medecinPrescripteur+"\",\"medecinRadiologue\": \""+examen.medecinRadiologue+"\",\"date\": \""+examen.date;  
  
  jsonExamen=jsonExamen+ "\",\"patient\":"+jsonPatient+",\"protocole\":"+jsonProtocole+"}"

  console.log(jsonExamen)

  return this.http.post(this.url,jsonExamen, {'headers':this.headers});
  
}


}
