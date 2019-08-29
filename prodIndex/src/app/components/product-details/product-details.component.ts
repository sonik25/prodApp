import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productId:any ;

  constructor(private AR:ActivatedRoute) { }

  ngOnInit() {
    this.AR.params
    .subscribe(data => {
      this.productId = data['id']
    })

    
      
  }

}
