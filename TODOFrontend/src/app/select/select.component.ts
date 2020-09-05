import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectService } from './select.service';
import { DeleteService } from '../delete/delete.service'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  abc : any;
  xy: any ;
  xyz: any;
  isLoading = false
  constructor(private router: Router, private selectService : SelectService, private deleteService: DeleteService) { }

  ngOnInit() {
    this.findAllData();
   
  }


  BackToHome() {

      this.router.navigate(['/home'])
  }


   findAllData() {
     this.abc = {};
     this.selectService.getAllRecord(this.abc).subscribe((result: any) => {
     this.xy = result;

     })
    

   }


   deleteRow(PID)
   {   
 
    this.deleteService.deleteRecordByPId(PID).subscribe((result: any) => {
     this.findAllData();

  })
     
   }

   


}
