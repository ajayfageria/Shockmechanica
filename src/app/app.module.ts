
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './header/nav/nav.component';
import { SitesectionComponent } from './main/sitesection/sitesection.component';
import { WorkgridComponent } from './main/workgrid/workgrid.component';
import { ClientListComponent } from './main/client-list/client-list.component';
import { ServicesRangeComponent } from './main/services-range/services-range.component';
import { CaptainintroComponent } from './main/captainintro/captainintro.component';
import { TeampersonComponent } from './main/teamperson/teamperson.component';
import { ContactComponent } from './main/contact/contact.component';
import { GmpComponent } from './main/gmp/gmp.component';
import { BodyComponent } from './body/body.component';
import { ServiceorderComponent } from './serviceorder/serviceorder.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrdersListComponent } from './admin-dashboard/orders-list/orders-list.component';
import { NewadminComponent } from './admin-dashboard/newadmin/newadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
    SitesectionComponent,
    WorkgridComponent,
    ClientListComponent,
    ServicesRangeComponent,
    CaptainintroComponent,
    TeampersonComponent,
    ContactComponent,
    GmpComponent,
    BodyComponent,
    ServiceorderComponent,
    LoginComponent,
    AdminDashboardComponent,
    ProductListComponent,
    BlogComponent,
    AboutUsComponent,
    OrdersListComponent,
    NewadminComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
