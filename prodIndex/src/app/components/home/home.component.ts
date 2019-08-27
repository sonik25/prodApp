import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeImgUrl:string = 'http://lorempixel.com/400/200/';

  constructor() { }

  ngOnInit() {
  }

}
