import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IuserLogin} from '../shared/model/userLogin';
import {UserLoginService} from '../shared/services/user.login.services';
import { LoginRegx } from './loginregx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Login:FormGroup;
  public submitted:boolean = false;
  public ValidateError:string;
  public profileImg = 'https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120';
  public UserId;

  constructor(private fb:FormBuilder, private loginService:UserLoginService, private router:Router) { }

  ngOnInit() {
    this.Login = this.fb.group({
      'UserLogin':this.fb.group({
        UserName:['',[Validators.required,LoginRegx.UserName]],
        Password:['',[Validators.required]]
      })
    })
  }; 

  Save(data:IuserLogin){
    this.submitted = true;
    if(!this.Login.valid){ return; }
    console.log(data);
    this.loginService.userLogin(data)
    .subscribe(item =>{
      if(item.UserIdentity){
        this.UserId=item.UserIdentity;
        //alert("Login Successful");
        this.router.navigateByUrl('/home');
        console.log(item);
      }
      else{
        console.log(item.Error);
        this.ValidateError = item.Error;
      }
    })
  }
  

}
