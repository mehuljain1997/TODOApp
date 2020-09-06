import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteService } from './delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router: Router, private deleteService: DeleteService) { }

  public k: any;
  responsez: any;
  response: any;
  ngOnInit() {
   
  }

  
  DeleteToHome() {
    this.router.navigate(['//home'])

  }

  deleteByPId(Id){

 this.k = Id;

    this.responsez = Id;
    this.deleteService.deleteRecordByPId(Id).subscribe((result: any) => {

      alert(result.message)
      this.response = result.message;
  

  })

}
}
