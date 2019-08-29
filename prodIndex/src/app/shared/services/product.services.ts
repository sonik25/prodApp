import {Injectable} from '@angular/core';
import { IproductData } from '../model/productData';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn:'root'})

export class ProductServices{
    public productInfo:string = '../../../assets/productapi.json';
    constructor(private http: HttpClient){}
    ProductList():Observable<IproductData[]>{
        return this.http.get<IproductData[]>(this.productInfo);
    }
}




