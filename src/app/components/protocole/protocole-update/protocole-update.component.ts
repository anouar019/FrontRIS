import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Protocole } from 'src/app/modeles/protocole.model';
import { ProtocoleServService } from 'src/app/services/protocole-serv.service';

@Component({
  selector: 'app-protocole-update',
  templateUrl: './protocole-update.component.html',
  styleUrls: ['./protocole-update.component.css']
})
export class ProtocoleUpdateComponent implements OnInit {


  protocole: Protocole ={"id":0,injection:"",technique:"", type: "", membre:"", date: ""};

  date: Date=new Date();

  error="";
  message="";

  constructor(private route: ActivatedRoute, private protocoleServ:ProtocoleServService) { 


    this.route.params.subscribe(

      {

        next : (data)=>{

          let temp=data as Protocole;
          this.protocole.id=temp.id;
          this.protocole.date=temp.date;
          this.protocole.injection=temp.injection;
          this.protocole.membre=temp.membre;
          this.protocole.technique=temp.technique;
          this.protocole.type=temp.type

        }
        
      }

    )

  }

  ngOnInit(): void {

  }

  editProtocole(protocole: Protocole){


    this.protocoleServ.update(protocole).subscribe({

      next:(data)=> {
        this.error="";
        this.message="Commit: "+ JSON.stringify(data)},
      error: err =>{
        this.message=""
        this.error=JSON.stringify(err)}

    });


  }

}
