import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  apiPath=environment.apiPath;

  __cutomeruserLogin(data:any){
    return this.http.post(this.apiPath+"/api/login", (data))
  }
}
