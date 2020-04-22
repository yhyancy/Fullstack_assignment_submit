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


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'userhome', component: UserhomeComponent, children: [
      { path: 'ipolist', component: IPOListComponent },
      { path: 'compare-company', component: CompareCompanyComponent },
      { path: 'compare-sector', component: CompareSectorComponent },
      { path: '**', redirectTo: 'ipolist' }
    ]
  },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'logout', component: LogoutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
