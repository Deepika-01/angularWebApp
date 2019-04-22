import { Injectable } from '@angular/core';
import { Router, CanActivate,  } from '@angular/router';
import { AuthenticationService } from './../../shared/services/authentication/authentication.service';

/* class implements CanActivate and guards in deciding if a route can be activated.
 * If return `true`, navigation will continue. If returns `false`,
 * navigation will be cancelled */
@Injectable({ providedIn : "root"})
export class AuthGuard implements CanActivate{
    constructor( private authService: AuthenticationService, private router : Router){
        
    }
    
    /* method is used to decide if a route can be activated.
    @param:
    @return: returns the boolean value indicating if the route can be activated
    */
    canActivate() : boolean{
        if(this.authService.isAuthenticated()){
            return true;
        }
        this.router.navigateByUrl('');
        return false;
    }
}