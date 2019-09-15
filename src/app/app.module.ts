import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './myservice.service';
import { AngularFireModule } from'@angular/fire';
import { AngularFirestoreModule } from'@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetComponent } from './bet/bet.component';
import { ImdbapiComponent } from './imdbapi/imdbapi.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BetComponent,
    ImdbapiComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
