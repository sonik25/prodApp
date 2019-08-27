import { Component, OnInit, ElementRef } from '@angular/core';
import { ProductServices } from 'src/app/shared/services/product.services';
import { fromEvent } from 'rxjs'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private el:ElementRef) { }

  ngOnInit() {
    let productData = this.el.nativeElement.querySelector('#search');
  }

}
