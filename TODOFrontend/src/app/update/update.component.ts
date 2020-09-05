import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  xy: any;
  abc: any;
  pid: Number;
  Pname: string;
  Ptype: string;var
  body: any;
  constructor(private router: Router, private updateserve : UpdateService) { }

  ngOnInit() {

  }

  updatefunction(prdctid,prdctname,prdcttype){

 this.abc = {}
 this.body = {
  "PId":prdctid,
  "Ptitle": prdcttype,
  "PName": prdctname            
}
 this.updateserve.Updaterecord(this.body).subscribe((result: any)=> {

      alert(result.message)
   this.xy = result.message;



 })





  
}

  UpdateToHome() {

    this.router.navigate(['/home']);

  }

}
