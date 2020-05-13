import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { UserhomeComponent } from "./components/userhome/userhome.component";
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LogoutComponent } from './components/logout/logout.component';
import { IPOListComponent } from './components/userhome/ipo-list/ipo-list.component';
import { CompareCompanyComponent } from './components/userhome/compare-company/compare-company.component';
import { CompareSectorComponent } from './components/userhome/compare-sector/compare-sector.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { ImportDataComponent } from './components/adminhome/import-data/import-data.component';
import { ManageCompanyComponent } from './components/adminhome/manage-company/manage-company.component';
import { ManageExchangeComponent } from './components/adminhome/manage-exchange/manage-exchange.component';
import { UpdateIPODetailsComponent } from './components/adminhome/update-ipodetails/update-ipodetails.component';
import { LoginGuard } from './guard/login.guard' //路由守卫
import { EmailConfirmComponent } from './components/email-confirm/email-confirm.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'userhome', component: UserhomeComponent, children: [
      { path: 'ipolist', component: IPOListComponent },
      { path: 'compare-company', component: CompareCompanyComponent },
      { path: 'compare-sector', component: CompareSectorComponent },
      { path: '**', redirectTo: 'ipolist' }
    ], canActivate: [LoginGuard]
  },
  {
    path: 'adminhome', component: AdminhomeComponent, children: [
      { path: 'import-data', component: ImportDataComponent },
      { path: 'manage-company', component: ManageCompanyComponent },
      { path: 'manage-exchange', component: ManageExchangeComponent },
      { path: 'update-ipodetails', component: UpdateIPODetailsComponent },
      { path: '**', redirectTo: 'import-data' }
    ], canActivate: [LoginGuard]
  },
  { path: 'changepassword', component: ChangePasswordComponent, canActivate: [LoginGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [LoginGuard] },
  { path: 'email-confirm', component: EmailConfirmComponent, canActivate: [LoginGuard] }

];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: true }), NgbModule],// 浏览器查看路由事件日志
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }), NgbModule],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
