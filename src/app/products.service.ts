import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }
  getproducts() {
    return this.http.get('https://backend-store-api.herokuapp.com/api/products/');

  }
  getratings() {
    return this.http.get('https://backend-store-api.herokuapp.com/api/ratings/');
  }
  getcategory() {
    return this.http.get('https://backend-store-api.herokuapp.com/api/categories/');
  }
  postlipanampesa(data) {
    return this.http.post('https://backend-store-api.herokuapp.com/api/c2b/register/', data);
  }
  postsearchproducts(data) {
    return this.http.post('https://backend-store-api.herokuapp.com/api/products-search/', data );
  }
  postsendconfirmationsms(phone_number, message) {
    return this.http.post('https://backend-store-api.herokuapp.com/send_message/',
      {
        phone_number: phone_number
        , message: message
      });
  
  }


}

