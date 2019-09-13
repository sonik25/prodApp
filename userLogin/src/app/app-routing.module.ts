import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path:'',
  component:HomeComponent
  }, 
  {
    path:'home',
    component:HomeComponent
    }, 
  {
    path:'login',
    component:LoginComponent
  },
  {
  path:'register',
  component:RegistrationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
