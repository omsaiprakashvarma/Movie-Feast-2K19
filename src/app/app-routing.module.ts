import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetComponent } from './bet/bet.component';
import { AppComponent } from './app.component';
import { ImdbapiComponent } from './imdbapi/imdbapi.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"bet", component:BetComponent},
  {path:"testing", component:ImdbapiComponent},
  {path:"log", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
