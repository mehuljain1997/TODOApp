import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';
// import { CreateComponent } from './create.component';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CreateService {
 Pid: number;
 Pname: String;
 Ptype: string;
 Token: any
  constructor(private http : HttpClient,private loginservice: LoginService) { }

 
  
  SaveRecord(data: any): Observable<any> {
 
    const headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`} 

    return this.http.post("http://localhost:3000/product", data ,{headers})


  }
}
