import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products'; 
@Component({
  selector: 'll-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = true;
  products;
  constructor(private ProductsService:ProductsService) { 
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true
    }, 8000)
    this.getproducts();
   
  
  }
  getproducts() {
    this.ProductsService.getproducts().subscribe(data => {
      this.products = data;
      this.products = this.products.results
      console.log(this.products);
    })
  }
}