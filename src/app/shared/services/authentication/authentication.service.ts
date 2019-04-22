import { Injectable } from '@angular/core';

/* Authenticates the user on the basis of value in local storage */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor() { }
  
  /* 
  Resturns a boolean value representing if the user has been authenticated on the basis of value in local storage
  @param:
  @return: boolean value indicating if the user is authenticated
  */
  isAuthenticated() : boolean{
    var isAuthenticated = localStorage.getItem("authenticated");
    if (isAuthenticated){
      return true;
    }
    return false;
  }
}

