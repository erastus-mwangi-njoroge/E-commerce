import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class SignupService{
  private SERVER_URL = "https://backend-store-api.herokuapp.com/";

  constructor(private httpClient: HttpClient) { }
  public fetchData(){  
		return this.httpClient.get(`${this.SERVER_URL}register`);  
	}  
  
  createUser(user: User) {
    return this.httpClient.post(this.SERVER_URL + 'register/', user);
  }
}