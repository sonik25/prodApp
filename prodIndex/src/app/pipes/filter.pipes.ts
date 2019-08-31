import {Pipe, PipeTransform} from '@angular/core';
import {IproductData} from '../shared/model/productData';
@Pipe({
    name:'searchData'
})

export class FilterPipe implements PipeTransform {
    transform(items: IproductData[], searchText: string){
      if(!items) return [];
      if(!searchText) return items;
  searchText = searchText.toLowerCase();
  return items.filter( (e:IproductData) => e.product.toLowerCase().indexOf(searchText)> -1);
    
     }
  }

