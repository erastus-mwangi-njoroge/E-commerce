import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService{
  private SERVER_URL = "https://backend-store-api.herokuapp.com/api/";

  constructor(private httpClient: HttpClient) { }
  public fetchData(){  
		return this.httpClient.get(`${this.SERVER_URL}/register`);  
	}  
}