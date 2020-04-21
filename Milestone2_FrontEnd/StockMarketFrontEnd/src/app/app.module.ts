import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HearderComponent } from './components/hearder/hearder.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { IPOListComponent } from './components/userhome/ipo-list/ipo-list.component';
import { CompareCompanyComponent } from './components/userhome/compare-company/compare-company.component';
import { CompareSectorComponent } from './components/userhome/compare-sector/compare-sector.component';
import { ImportDataComponent } from './components/adminhome/import-data/import-data.component';
import { ManageCompanyComponent } from './components/adminhome/manage-company/manage-company.component';
import { ManageExchangeComponent } from './components/adminhome/manage-exchange/manage-exchange.component';
import { UpdateIPODetailsComponent } from './components/adminhome/update-ipodetails/update-ipodetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HearderComponent,
    SignupComponent,
    UserhomeComponent,
    AdminhomeComponent,
    IPOListComponent,
    CompareCompanyComponent,
    CompareSectorComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIPODetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
