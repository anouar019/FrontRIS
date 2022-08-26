import { Component, Input, OnInit } from '@angular/core';
import { Protocole } from 'src/app/modeles/protocole.model';
import { ProtocoleServService } from 'src/app/services/protocole-serv.service';

@Component({
  selector: 'app-protocole-create',
  templateUrl: './protocole-create.component.html',
  styleUrls: ['./protocole-create.component.css']
})
export class ProtocoleCreateComponent implements OnInit {


  @Input()
  myList!: Protocole[];

  @Input()
  myboolean!: boolean;

  myProtocole:Protocole={id:0,type:"",injection:"",membre:"",technique:"", date:""};

  error: String='';
  message: String='';

  constructor(private protocoleService: ProtocoleServService) { }

  ngOnInit(): void {
    // let mydate=new Date();
    // console.log(("0" + mydate.getDay()).slice(-2))
    // this.date=mydate.getFullYear()+"-"+("0" + mydate.getMonth()).slice(-2)+"-"+("0" + mydate.getDay()).slice(-2);
    // this.myProtocole.date=this.date;
  }



  createProtocole(){

    console.log("inside create")

    this.protocoleService.postItem(this.myProtocole).subscribe({
      next: (data) =>{
                      this.myList.push(data as Protocole)
                      this.myList.sort((a,b)=>a.id-b.id)
                      this.protocoleReinitialise();
                      this.error=new String();
                      this.message="Protocole created";

                    

                    },
      error: err => {this.error="Veuillez saisir correctement les informations ";
                      this.message='';
      }
    })

  }


  protocoleReinitialise(){

    this.myProtocole={id:0,type:"",injection:"",membre:"",technique:"", date:""};

  }

}
