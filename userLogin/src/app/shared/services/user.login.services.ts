import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {IuserLogin} from '../model/userLogin';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IuserRegister } from '../model/userRegister';
import { Router } from '@angular/router';
@Injectable({providedIn:'root'})
export class UserLoginService{
    public loggedIn:BehaviorSubject<IuserLogin>;
    public currentUser:Observable<IuserLogin>;
    private loginEndpoint:string = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public header : HttpHeaders;
    constructor(private http:HttpClient,private router:Router){
        this.loggedIn= new BehaviorSubject<IuserLogin>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.loggedIn.asObservable();

        this.header = new HttpHeaders({'Content-Type':'application/json'}) ;
    }

    get userLoggedin():IuserLogin{
        return this.loggedIn.value;
    }

    userLogin(data:IuserLogin):Observable<IuserLogin>{
        return this.http.post<IuserLogin>(this.loginEndpoint, JSON.stringify(data), {headers:this.header})
        .pipe(map(data => {
            if(data && data.UserIdentity){
                localStorage.setItem('currentUser',JSON.stringify(data));
                this.loggedIn.next(data);
                //return data;
            }
            return data;
        }))
    };
    userLogout(){
        localStorage.removeItem('currentUser');
        // location.reload();
        this.loggedIn.next(null);
        this.router.navigateByUrl('/login');
    }
}
