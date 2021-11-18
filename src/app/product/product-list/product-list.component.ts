import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products;
  constructor(private ProductsService:ProductsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true
    }, 8000)
    this.getproducts();
    this.getratings();
   
  
  }
  getproducts() {
    this.ProductsService.getproducts().subscribe(data => {
      this.products = data;
      this.products = this.products.results
      console.log(this.products);
    })
  }
  
  getratings () {
    this.ProductsService.getratings().subscribe(data => {
      this.products = data;
      this.products = this.products.results
      console.log(this.products);
    })
}
}
