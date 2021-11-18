import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userlogin } from './userlogin';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private SERVER_URL = "https://backend-store-api.herokuapp.com/";


  constructor(private httpClient: HttpClient ) { }
  public fetchData(){  
		return this.httpClient.get(`${this.SERVER_URL}login`);  
	} 
  createUserlogin(userlogin: Userlogin) {
    return this.httpClient.post(this.SERVER_URL + 'login/', userlogin);
  } 

}
