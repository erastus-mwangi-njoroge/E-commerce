import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {
   }
   getproducts(){
     return this.http.get('https://backend-store-api.herokuapp.com/api/products/');
     
   }
   getratings(){
    return this.http.get('https://backend-store-api.herokuapp.com/api/ratings/');
   }
   getcategory(){
    return this.http.get('https://backend-store-api.herokuapp.com/api/categories/');
   }
   

}

