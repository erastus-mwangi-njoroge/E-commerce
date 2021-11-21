import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.scss']
})
export class SearchproductsComponent implements OnInit {
  products;

  constructor() { }

  ngOnInit(): void {
  }

}
