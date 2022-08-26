import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GlobalConstComponent } from '../const/global-const/global-const.component';
import { CompteRendu } from '../modeles/compte-rendu.model';

@Injectable({
  providedIn: 'root'
})
export class CompteRenduServService {

  private url= GlobalConstComponent.url+'/compterendu';


  headers = new HttpHeaders({'Content-Type':'application/json'});
 

 constructor(private http: HttpClient) { 

   
 }


 getItems(): Observable<object> {
  
  return this.http.get(this.url);
}


update(cr: CompteRendu): Observable<object>{

  console.log(JSON.stringify(cr))

  return this.http.put(this.url+'/'+cr.id,cr);

}

delete(cr: CompteRendu): Observable<object>{

  return this.http.delete(this.url+'/'+cr.id);

}


post(cr: CompteRendu): Observable<object>{

  let jsonExamen="{\"id\": "+cr.examen.id+"}" ;
  
  let jsonCR="{\"titre\": \""+cr.titre+"\",\"corp\": \""+cr.corp+"\",\"medecinLogin\": \""+cr.medecinLogin+"\",\"secretaireLogin\": \""+cr.secretaireLogin+"\",\"signature\": \""+cr.signature+"\",\"etat\": \""+cr.etat;  
  

  jsonCR=jsonCR+ "\",\"examen\":"+jsonExamen+"}"

  console.log(jsonCR)

  return this.http.post(this.url,jsonCR, {'headers':this.headers});
}

}