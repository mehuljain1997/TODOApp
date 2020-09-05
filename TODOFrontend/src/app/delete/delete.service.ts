import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  public ProductId;
  msg: any
  constructor(private http : HttpClient) { }




  deleteRecordByPId(data: any): Observable<any> {  

   return this.http.delete<any>('http://localhost:3000/product/' + data);
  }
  


}
