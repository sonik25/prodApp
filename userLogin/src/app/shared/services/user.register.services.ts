import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {IuserRegister} from '../model/userRegister';
@Injectable({providedIn:'root'})

export class UserRegisterService{
    private registerEndpoint:string = 'http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync';
    public header:HttpHeaders;
    constructor(private http:HttpClient){
        this.header = new HttpHeaders({'Content-Type':'application/json'})
    }

    userRegister(data:IuserRegister){
        return this.http.post(this.registerEndpoint,JSON.stringify(data),{headers:this.header})

    }

}