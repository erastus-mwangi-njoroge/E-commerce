import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { NgForm } from '@angular/forms';
import { Userlogin } from 'src/app/userlogin';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private login: LoginService) { }

    @ViewChild('f') loginForm: NgForm;

  ngOnInit(): void {
  }

      addNewUserlogin() {
        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;



        this.login
          .createUserlogin(new Userlogin(username, password))
          .subscribe((data) => {
            console.log(data);
          });

      }


  }


