import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IuserLogin} from '../shared/model/userLogin';
import {UserLoginService} from '../shared/services/user.login.services';
import { LoginRegx } from './loginregx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Login:FormGroup;
  public submitted:boolean = false;
  
  public profileImg = 'https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120';

  constructor(private fb:FormBuilder, private loginService:UserLoginService) { }

  ngOnInit() {
    this.Login = this.fb.group({
        UserName:['',[Validators.required,LoginRegx.UserName]],
        Password:['',[Validators.required,LoginRegx.Password]]
    })
  }; 

  Save(data:IuserLogin){
    this.submitted = true;
    if(!this.Login.valid){ return; }
    console.log(data);
  }
  

}
