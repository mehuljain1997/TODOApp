import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  public ProductId;
  msg: any
  Token: any
  constructor(private http : HttpClient, private loginservice: LoginService) { }




  deleteRecordByPId(data: any): Observable<any> {  


    const headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`} 




   return this.http.delete<any>('http://localhost:3000/product/' + data, {headers});
  }
  


}
