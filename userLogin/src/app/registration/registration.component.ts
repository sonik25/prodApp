import { Component, OnInit } from '@angular/core';
import {Validator, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IuserRegister} from '../shared/model/userRegister';
import { UserRegisterService } from '../shared/services/user.register.services';
import {RegistrationRegx} from './registrationRegx';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public Register:FormGroup;
  public submitted:boolean = false;
  constructor(private fb:FormBuilder , private RegisterService:UserRegisterService , private router:Router) { }

  ngOnInit() {
    this.Register = this.fb.group({
      'FirstName':['',[Validators.required,RegistrationRegx.FirstName]],
    'LastName':['',[Validators.required,RegistrationRegx.LastName]],
    'MobileNo':['',[Validators.required,RegistrationRegx.MobileNo]],
    'EmailId':['',[Validators.required,RegistrationRegx.EmailId]],
    'Address':['',[Validators.required,RegistrationRegx.Address]],
    'UserLogin':this.fb.group({
      'UserName':['',[Validators.required,RegistrationRegx.UserName]],
      'Password':['',[Validators.required,RegistrationRegx.Password]]
    })
    
    })
  };

  Save(data:IuserRegister){
    this.submitted = true;
    if(!this.Register.valid){return;}
    console.log(data);
    this.RegisterService.userRegister(data).subscribe(item=>{
      console.log(item);
      alert("Registration Successfull !!!");
      this.router.navigateByUrl('/login');
    })

  }

}
