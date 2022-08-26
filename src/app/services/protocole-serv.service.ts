import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GlobalConstComponent } from '../const/global-const/global-const.component';
import { Protocole } from '../modeles/protocole.model';

@Injectable({
  providedIn: 'root'
})
export class ProtocoleServService {


  private url= GlobalConstComponent.url+'/protocole';
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private http: HttpClient) { }





getItems():Observable<object> {
  return this.http.get(this.url);
}


update(protocole: Protocole): Observable<object> {

  return this.http.put(this.url+'/'+protocole.id,protocole);

}

deleteProduct(id: number):Observable<object>
{

  return this.http.delete(this.url+'/'+id);

}


postItem(protocole: Protocole):Observable<object>
{

  let jsonProtocole="{\"injection\": \""+protocole.injection+"\",\"membre\": \""+protocole.membre+"\",\"technique\": \""+protocole.technique+"\",\"type\": \""+protocole.type+"\"}"  ;

  console.log(jsonProtocole)
  return this.http.post<Protocole>(this.url,jsonProtocole, {'headers':this.headers});

}

}