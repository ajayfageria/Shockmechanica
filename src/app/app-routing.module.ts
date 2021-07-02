import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { ServiceorderComponent } from './serviceorder/serviceorder.component';
import { MainComponent } from './main/main.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'service-order', component: ServiceorderComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
