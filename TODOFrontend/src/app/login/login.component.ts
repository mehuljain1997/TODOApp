import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginservice: LoginService) { }
  body: any;
  response: any
  ngOnInit() {
  }

  generatetoken(user,pass){

    this.body = {
      "username":user,
      "password": pass            
    }

    this.loginservice.Tokengenerate(this.body).subscribe((result: any) => {

      this.response = result.accessToken;

      if(this.response!= undefined) {

        localStorage.setItem('token',this.response)
        alert('Please use this Token: - '+this.response)
        this.router.navigate(['/home'])

      }
      else {

        this.response= result.message
        alert(this.response)
        this.router.navigate(['/login'])

      }

      
      });
    




  }
}
