import { ProductsService } from 'src/app/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.scss']
})
export class SearchproductsComponent implements OnInit {
  products;
  
  

  constructor(private productsservice:ProductsService) { }
 

  ngOnInit(): void {
    this.postsearchproducts();
  }
  postsearchproducts(){
  this.productsservice.getproducts().subscribe(data=>{
    this.products=data;
    this.products = this.products.results
    

    console.log(this.products);
  }

  )
}}
