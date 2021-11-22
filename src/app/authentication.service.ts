import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authUser(user:any){
    let UserArray =[]
    if (localStorage.getItem('users')){
      UserArray = JSON.parse(localStorage.getItem('users'))

    }
    return UserArray.find(u => u.email === user.email && u.password === user.password)
  }
}
