import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-const',
  templateUrl: './global-const.component.html',
  styleUrls: ['./global-const.component.css']
})
export class GlobalConstComponent implements OnInit {

  public static url: string="http://localhost:8080"
  
  constructor() { }

  ngOnInit(): void {
  }

}
