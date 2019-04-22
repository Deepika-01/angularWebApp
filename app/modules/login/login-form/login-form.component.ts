import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from './../../../shared/models/user'

import { NetworkRequestService } from './../../../shared/services/network-request/network-request.service';
import { LocalStorageService } from './../../../shared/services/local-storage/local-storage.service';

/* Creates a login form and stores a value with name of the user if the user is authenticated*/
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  loginForm : FormGroup;
  url = "assets/files/users.json";
  users : IUser[];
  
  /* ctor with a private instance of the router for navigation */
  constructor(private router:Router, 
    private networkRequestService: NetworkRequestService,
    private localStorageService : LocalStorageService) { }
    
    /* Creates a form with username and password controls at the time of initialization */
    ngOnInit() {
      this.networkRequestService.fetchData(this.url).subscribe(observer=> {
        this.users = observer['users']
      })
      this.createForm();
    }
    
    /* Creates a form group with username and password fields. Both username and password are required fields */
    createForm(){
      this.loginForm = new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('', Validators.required)
      })
    }
    
    /* Called when a user has entered username and password.
    * if the user is authenticated, saves the value in the local storage and
    * navigate to home page of the application
    */
    login(){
      var username : string = this.loginForm.get('username').value;
      var password : string = this.loginForm.get('password').value;
      
      var userAuthenticated = this.checkIfUserAuthenticated(username, password)
      if (userAuthenticated){
        this.localStorageService.storeInLocalStorage( "authenticated", username);
        this.router.navigateByUrl('/onboard');
      }
    }

    /* Checks if the user is authenticated
    * @param:   username    username entered by the user
    * @param:   password    password entered by the user 
    * return:   boolean     true in case user is authenticated
    */
    private checkIfUserAuthenticated(username: string, password: string) {
      var response = false;
      this.users.forEach(user => {
        if (user.username == username && user.password == password){
          response = true;
        }
      });

      return response;
    }
    
    /* Resets the fields on the login form */
    reset(){
      this.loginForm.reset({'username' : '', 'password':''})
    }
    
  }
  