import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBloodDetailsComponent } from './add-blood-details/add-blood-details.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "main", component : MainPageComponent},
  {path : "register", component : RegisterComponent},
  {path : "admin", component : AdminPageComponent},
  {path : "admin_page", component: AdminMainPageComponent},
  {path : "add_blood_details", component : AddBloodDetailsComponent},
  {path : "profile", component : ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
