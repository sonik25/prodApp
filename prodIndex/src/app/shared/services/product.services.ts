import {Injectable} from '@angular/core';
import { IproductData } from '../model/productData';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as opt from 'rxjs/operators';


@Injectable({providedIn:'root'})

export class ProductServices{
    public productInfo:string = '../../../assets/productapi.json';
    constructor(private http: HttpClient){}
    ProductList():Observable<IproductData[]>{
        return this.http.get<IproductData[]>(this.productInfo);
    }

    ProductDetails(id:number):Observable<IproductData[]>{
        return this.http.get<IproductData[]>(this.productInfo)
                                .pipe(opt.map((data:any) => {
                                    return data.find((item:any) => item.productId == id);
                                } ));

    }
}




