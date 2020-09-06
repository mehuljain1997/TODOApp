import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginresister',
  templateUrl: './loginresister.component.html',
  styleUrls: ['./loginresister.component.css']
})
export class LoginresisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){

    this.router.navigate(['/login'])
  }


}
