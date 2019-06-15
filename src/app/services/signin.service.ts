import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor( private commonService : CommonService) { }

  // invokes signup endpoint with post request
  signup(data){
    return this.commonService.post(`/api/signup`,data)
  }

  // invokes signin endpoint with get request
  signin(data){
    return this.commonService.get(`/api/signin?userName=${data.userName}&password=${data.password}`)
  }

}
