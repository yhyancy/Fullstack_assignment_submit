import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms' //引入表单-实现模板表单验证以及表单双选购绑定
// import { ReactiveFormsModule } from '@angular/forms' //引入响应式表单
import { UserService } from './services/user.service' //引入服务-实现点击sign in,post提交数据
import { HttpClientModule } from '@angular/common/http'; // 数据交互



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
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LogoutComponent } from './components/logout/logout.component';

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
    UpdateIPODetailsComponent,
    ChangePasswordComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
    // ReactiveFormsModule //声明响应式表单
  ],
  providers: [UserService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
