import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  PId: number;
  PType: String;
  PName: String;
  Token
  constructor(private http: HttpClient,private loginservice: LoginService) { }



  Updaterecord(data: any): Observable<any>
  {

  this.PId = data.PId;;


  const headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`} 

   return this.http.put(`http://localhost:3000/product/${this.PId}` , data, {headers})
  }

 
}
