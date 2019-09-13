import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {IuserLogin} from '../model/userLogin';
@Injectable({providedIn:'root'})
export class UserLoginService{
    private loginEndpoint:string = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public header : HttpHeaders;
    constructor(private http:HttpClient){

        this.header = new HttpHeaders({'Content-Type':'application/json'}) ;
    }

    userLogin(data:IuserLogin){
        return this.http.post(this.loginEndpoint, JSON.stringify(data), {headers:this.header});
    }
}
