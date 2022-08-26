import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompteRendu } from 'src/app/modeles/compte-rendu.model';
import { CompteRenduServService } from 'src/app/services/compte-rendu-serv.service';

@Component({
  selector: 'app-compterendu-update',
  templateUrl: './compterendu-update.component.html',
  styleUrls: ['./compterendu-update.component.css']
})
export class CompterenduUpdateComponent implements OnInit {

  error="";
  message="";
  cr1!: CompteRendu;

  constructor(private route: ActivatedRoute, private crservice: CompteRenduServService) { }

  ngOnInit(): void {

    let string: any=this.route.snapshot.paramMap.get('billing');
    let obj = JSON.parse(string);
    let cr: CompteRendu= obj ;
    this.cr1=cr;




  }



  editCR(cr: CompteRendu){


    this.crservice.update(cr).subscribe({

      next:(data)=> {
        this.error="";
        this.message="Commit: "+ JSON.stringify(data)},
      error: err =>{
        this.message=""
        this.error=JSON.stringify(err)}

    });

  }

}
