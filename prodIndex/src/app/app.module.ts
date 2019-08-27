import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes} from './apps.routs';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductlistComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
