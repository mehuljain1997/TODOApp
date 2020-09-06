import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectvalue =  ["create","delete", "update", "selectAll", "seleteById"]
 
  loading = false;
  status = 1002;



 
  
  title = []
  count = []

 
  constructor(private router: Router, private homeservice: HomeService) {        
  }

  ngOnInit() {


  }

  logout(){
    console.log('inside logout')
    localStorage.removeItem('token')
    alert('login again')
  }

  addproduct(){
 
    this.router.navigate(['/create']);
}


SelectRecord() {
  this.loading = true;

  setTimeout(()=> {

  this.loading = false
  this.router.navigate(['/select'])
  },2000)


}



SelectByPId() {

  this.router.navigate(['/selectByPId']);

}

DeleteRecord()
{

  this.router.navigate(['/deleteById']);
}

UpdateRecord() {

  this.router.navigate(['/update']);
}


}


