import { Component, OnInit } from '@angular/core';
import { ProductlistComponent} from '../productlist/productlist.component';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  public rate;

  constructor() { }

  ngOnInit() {
  }

  public ShowRating(){
    this.rate;

  }

}
