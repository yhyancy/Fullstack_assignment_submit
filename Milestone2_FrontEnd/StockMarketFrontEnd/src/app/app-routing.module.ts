import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { UserhomeComponent } from "./components/userhome/userhome.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userhome', component: UserhomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
