import { AuthenticationService } from 'src/app/authentication.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { menuList as staticMenuList } from '../../data/menus';
import { ProductsService } from 'src/app/products.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() topFixed: boolean;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled: boolean;
  menuList = [];
  isLessThenLargeDevice;
  constructor(private breakpointObserver: BreakpointObserver, private productservice: ProductsService,private router:Router, private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.menuList = staticMenuList;
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }
  onsignup() {
    this.router.navigate(['/login']);
  }


  loggedin() {
    return localStorage.getItem('token');
  }
  onlogout() {
    localStorage.removeItem('token');
    // this.router.navigate(['/login']);
  }

  addsearchproducts(form: NgForm) {
    this.productservice.postsearchproducts(form.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/searchproducts']);
    });

  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }
}