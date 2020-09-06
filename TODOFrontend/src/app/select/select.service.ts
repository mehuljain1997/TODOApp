import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SelectService {
 Token
  constructor(private http : HttpClient, private loginservice:LoginService) { }

  getAllRecord(data: any): Observable<any> {
 

  
    const headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`} 

    return this.http.get("http://localhost:3000/product", {headers});

  }
  
}
