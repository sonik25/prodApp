import { HttpClient} from '@angular/common/http';

export class ProductServices{
    public productInfo:string = '/src/assets/productapi.json';
    constructor(private http: HttpClient){}
    ProductList(){
        return this.http.get(this.productInfo)
    }
}