import { Component, OnInit, ElementRef } from '@angular/core';
import { ProductServices } from 'src/app/shared/services/product.services';
import { fromEvent } from 'rxjs';
import { IproductData } from '../../shared/model/productData';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public prodData:IproductData[];
  public isHide:boolean = true;
  public currentRating;

  constructor(private el:ElementRef , private productServices:ProductServices) { }

  ngOnInit() {

    
      this.productServices.ProductList()
      .subscribe(data => {
        this.prodData = data;
        console.log(data);
      });


   }

   public hide(){
     if(this.isHide){
       this.isHide = !this.isHide;
     }
     else{
       this.isHide = !this.isHide;
     }

   }

   AddRating(data){
     this.currentRating = data;
     this.currentRating = ': The new rating was ' + data 
   }

}
