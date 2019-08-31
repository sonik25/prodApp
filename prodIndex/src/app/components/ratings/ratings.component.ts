import { Component, OnInit, Input, EventEmitter ,Output } from '@angular/core';
import { ProductlistComponent} from '../productlist/productlist.component';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  @Input() public rate;
  @Output() public item = new EventEmitter();
  public view:boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

  public ShowRating(){
      this.item.emit(this.rate);
      this.view = true;

  }

}
