import { Component, OnInit , ViewChild} from '@angular/core';
import { SignupService } from 'src/app/signup.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private signup:SignupService) { }

  ngOnInit(): void {
  }
  @ViewChild('f') registerForm: NgForm;

  addNewUser() {
    const username = this.registerForm.value.username;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const password2 = this.registerForm.value.password2;
    const first_name = this.registerForm.value.first_name;
    const last_name = this.registerForm.value.last_name;


    this.signup
      .createUser(new User(username,email,password,password2,first_name,last_name))
      .subscribe((data) => {
        console.log(data);
      });
   
  }
  
}


