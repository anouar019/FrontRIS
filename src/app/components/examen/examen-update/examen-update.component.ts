import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Examen } from 'src/app/modeles/examen.model';
import { ExamenServService } from 'src/app/services/examen-serv.service';
import { PatientServService } from 'src/app/services/patient-serv.service';
import { ExamenListDetailComponent } from '../examen-list/examen-list-detail/examen-list-detail.component';

@Component({
  selector: 'app-examen-update',
  templateUrl: './examen-update.component.html',
  styleUrls: ['./examen-update.component.css']
})
export class ExamenUpdateComponent implements OnInit {

  error="";
  message="";
  examen!: Examen;

  constructor(private route: ActivatedRoute, private examenService: ExamenServService) { }

  ngOnInit(): void {

    let string: any=this.route.snapshot.paramMap.get('billing');
    let obj = JSON.parse(string);
    let examen1: Examen= obj ;
    this.examen=examen1;

  }


  editExamen(examen: Examen){

   this.examenService.update(examen).subscribe({

    next:(data)=> {
      this.error="";
      this.message="Commit: "+ JSON.stringify(data)},
    error: err =>{
      this.message=""
      this.error=JSON.stringify(err)}

  });

  }


}
