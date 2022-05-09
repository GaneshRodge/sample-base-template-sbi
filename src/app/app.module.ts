import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarMainComponent } from './components/sidebar-main/sidebar-main.component';
import { SidebarSecondaryComponent } from './components/sidebar-secondary/sidebar-secondary.component';
import { DashboardComponent } from './components/sidebar-main/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/sidebar-main/home/home.component';
import { ContactComponent } from './components/sidebar-main/contact/contact.component';
import { LoginComponent } from './components/sidebar-main/login/login.component';
import { VendorFinanceComponent } from './components/sidebar-main/vendor-finance/vendor-finance.component';
import { DealerFinanceComponent } from './components/sidebar-main/dealer-finance/dealer-finance.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarMainComponent,
    SidebarSecondaryComponent,
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    VendorFinanceComponent,
    DealerFinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
