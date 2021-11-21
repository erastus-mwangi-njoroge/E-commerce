import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  postsearchproducts (data){
    return this.http.post('https://backend-store-api.herokuapp.com/api/products-search/',{data});
   }
}
