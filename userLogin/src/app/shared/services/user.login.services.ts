import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {IuserLogin} from '../model/userLogin';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({providedIn:'root'})
export class UserLoginService{
    private loginEndpoint:string = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public header : HttpHeaders;
    constructor(private http:HttpClient){

        this.header = new HttpHeaders({'Content-Type':'application/json'}) ;
    }

    userLogin(data:IuserLogin):Observable<IuserLogin>{
        return this.http.post<IuserLogin>(this.loginEndpoint, JSON.stringify(data), {headers:this.header})
        .pipe(map(data => {
            if(data && data.UserIdentity){
                localStorage.setItem('currentUser',JSON.stringify(data))
                return data;
            }
            return data;
        }))
    };
    userLogout(){
        localStorage.removeItem('currentUser');
        location.reload();
    }
}
