import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
export const routes:Route[]=[{
    path: '',
    component:HomeComponent
},
{
    path:'home',
    component:HomeComponent
},
{
    path:'product',
    component:ProductlistComponent
},
{
    path:'product-details/:id',
    component:ProductDetailsComponent

}
]