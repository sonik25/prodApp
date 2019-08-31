import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from 'src/app/shared/services/product.services';
import { FilterPipe } from '../../pipes/filter.pipes';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productId:any ;
  public prodDetails:any;

  constructor(private AR:ActivatedRoute, private productServices:ProductServices) { }

  ngOnInit() {
    this.AR.params
    .subscribe(data => {
      this.productId = data['id']
    })

    this.productServices.ProductDetails(this.productId)
      .subscribe(data => {
        this.prodDetails = data;
        // console.log(data);
      });

    
      
  }

}
