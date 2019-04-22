import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './../services/local-storage/local-storage.service';
import { Router } from '@angular/router';

/* Displays heafder for the application with the name stored in the local storage when the user logs in */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username : string;
  
  constructor(private localStorageService: LocalStorageService,
    private router:Router) { }
  
  /* 
  method is used to diplay the name of the user at the time of initialization in the header which was set in local storage while the user logs in
  @param:
  @return: 
  */
  ngOnInit() {
    this.username = localStorage.getItem("authenticated");
  }

  /* Logs out the user by removing the username from the local storage */
  logout(){
    this.localStorageService.removeFromLocalStorage("authenticated");
    this.router.navigateByUrl('/login');
  }
  
}
