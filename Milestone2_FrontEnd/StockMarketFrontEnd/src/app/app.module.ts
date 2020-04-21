import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HearderComponent } from './components/hearder/hearder.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HearderComponent,
    SignupComponent,
    UserhomeComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
