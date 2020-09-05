import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  PId: number;
  PType: String;
  PName: String;
  constructor(private http: HttpClient) { }



  Updaterecord(data: any): Observable<any>
  {

  this.PId = data.PId;;
 

   
   // return this.http.post("http://localhost:3000/notes", body )
   return this.http.put(`http://localhost:3000/product/${this.PId}` , data)
  }

 
}
