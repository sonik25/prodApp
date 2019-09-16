import {Injectable} from '@angular/core';
import {UserRegisterService} from '../shared/services/user.register.services';
import { CanActivate, Router} from '@angular/router';
@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate{
    constructor(private userServices:UserRegisterService, private router:Router){

    }
    canActivate(){
        let token = localStorage.getItem('currentUser');
        if(!token){
            alert('Please Login First');
            this.router.navigateByUrl('/login');
            return false;
        }
        else{
            return true;
        }
    }

} 