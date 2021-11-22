import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private httpClient:HttpClient) { }
  getProfile(){
    return this.httpClient.get('https://backend-store-api.herokuapp.com/api/userprofiles/');
  }
  
}
