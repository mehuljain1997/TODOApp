import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SelectByIdComponent } from './select-by-id.component';


@Injectable({
  providedIn: 'root'
})
export class SelectByPIdService {

  
  constructor(private http: HttpClient) {

   }



  
  getRecordByPId(data: any): Observable<any> {
 
    return this.http.get('http://localhost:3000/product/'+ data);

  }


}
