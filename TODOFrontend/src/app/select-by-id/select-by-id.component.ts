import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SelectByPIdService } from './select-by-pid.service';

@Component({
  selector: 'app-select-by-id',
  templateUrl: './select-by-id.component.html',
  styleUrls: ['./select-by-id.component.css']
})
export class SelectByIdComponent implements OnInit {

  xyz: any;
  @Input() selectidmessage: String
  constructor(private router: Router, private selectByPIdServie :SelectByPIdService ) { }
  
 
public p: any;
 xy: any;

  
  fetchByPId(py) {

 this.p = py;

    this.selectByPIdServie.getRecordByPId(py).subscribe((result: any) => {

      this.xy = result;   
    })
 

  }

  ngOnInit() {

    this.fetchByPId(this.p)
    
  }



  MoveToHome() {
    this.router.navigate(['/home'])
  }

}
