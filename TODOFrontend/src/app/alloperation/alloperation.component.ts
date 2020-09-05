import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alloperation',
  templateUrl: './alloperation.component.html',
  styleUrls: ['./alloperation.component.css']
})
export class AlloperationComponent implements OnInit {
  message: any = 'it is  alloperation component  message ';
  constructor() { }

  ngOnInit() {

  }

  changefunction(pnm){
this.message = pnm 

  }

}
