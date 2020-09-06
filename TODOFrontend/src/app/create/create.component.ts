import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateService } from './create.service';
import { AlloperationComponent } from '../alloperation/alloperation.component'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  response: any;
  body: any;
  

  constructor(private router: Router, private createservice : CreateService,) { 

  }

  ngOnInit() {
    var x = new AlloperationComponent()


  }

  createfunction(prdctid, pname, ptype) {

  //  this.createservice.getBody(prdctid,pname,ptype);
       this.body = {
      "PId":prdctid,
      "PType": ptype,
      "PName": pname            
    }
    this.createservice.SaveRecord(this.body).subscribe((result: any) => {

      this.response = result;

      alert(this.response.message)
      });
     

  }


  BackToHome() {
    this.router.navigate(['/home'])
  }





  


  

  

}
