import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }


  Tokengenerate(data: any): Observable<any> {

    return this.http.post("http://localhost:3000/login", data )


  }
}
