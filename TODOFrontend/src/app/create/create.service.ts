import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { CreateComponent } from './create.component';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
 Pid: number;
 Pname: String;
 Ptype: string;
  constructor(private http : HttpClient) { }

 
  
  SaveRecord(data: any): Observable<any> {


    return this.http.post("http://localhost:3000/product", data )


  }
}
