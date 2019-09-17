import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../shared/services/user.login.services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public userName;
  //users:any = JSON.parse( localStorage.getItem('currentUser'));
  // console.log(users); 
  //  this.userName = users;
  constructor(private userServices:UserLoginService) { }

  ngOnInit() {
    this.userServices.currentUser.subscribe(item => {
      this.userName = item;
    })

  }

  Logout(){
    this.userServices.userLogout();
  }


}
