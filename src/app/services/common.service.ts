import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  /**
   * get function to call http get request.
   */
  get(url){
    return this.http.get(environment.url + url).pipe(
      map((data: any) => {
        return data;
      })
    ); 
  }

  /**
   * post function to call http post request.
   */
  post(url, data){
    return this.http.post(environment.url + url, data).pipe(
      map((data: any[]) => {
        return data;
      })
    );
  }
}
