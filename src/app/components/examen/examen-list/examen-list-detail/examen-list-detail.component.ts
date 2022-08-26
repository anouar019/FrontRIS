import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Examen } from 'src/app/modeles/examen.model';
import { Patient } from 'src/app/modeles/patient.model';
import { Protocole } from 'src/app/modeles/protocole.model';

@Component({
  selector: 'app-examen-list-detail',
  templateUrl: './examen-list-detail.component.html',
  styleUrls: ['./examen-list-detail.component.css']
})
export class ExamenListDetailComponent implements OnInit {


  examen!: Examen;
 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


    let string: any=this.route.snapshot.paramMap.get('billing');
    let obj = JSON.parse(string);
    let examen1: Examen= obj ;
    this.examen=examen1;

  }

}
