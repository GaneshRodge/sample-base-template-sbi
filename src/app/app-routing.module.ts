import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sidebar-main/home/home.component';
import { ContactComponent } from './components/sidebar-main/contact/contact.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/sidebar-main/login/login.component';
import { DealerFinanceComponent } from './components/sidebar-main/dealer-finance/dealer-finance.component';
import { VendorFinanceComponent } from './components/sidebar-main/vendor-finance/vendor-finance.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dealer-finance', component: DealerFinanceComponent},
  { path:'vendor-finance', component: VendorFinanceComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent}

  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
