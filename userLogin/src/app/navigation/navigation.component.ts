import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../shared/services/user.login.services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public userName;
  constructor(private userServices:UserLoginService) { }

  ngOnInit() {
    let users:any = JSON.parse( localStorage.getItem('currentUser'));
    console.log(users); 
    this.userName = users.FirstName + users.LastName;
  }

  Logout(){
    this.userServices.userLogout();
  }


}
