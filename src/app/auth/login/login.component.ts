import { Component, OnInit,ViewChild } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { NgForm } from '@angular/forms';
import { Userlogin } from 'src/app/userlogin';
import { Router } from '@angular/router'; 

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  constructor(private login:LoginService, private router: Router) { }

  ngOnInit(): void {
  }
    
    @ViewChild('f') loginForm: NgForm;

      addNewUserlogin() {
        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;
        
    
    
        this.login
          .createUserlogin(new Userlogin(username,password))
          .subscribe((data) => this.router.navigate(['/'], { 'queryParams': data })
          );
       
      }
      
    
  }


