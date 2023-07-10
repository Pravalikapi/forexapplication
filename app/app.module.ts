import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CurrencyrateComponent } from './currencyrate/currencyrate.component';
import { GraphComponent } from './graph/graph.component';
import { TransfermoneyComponent } from './transfermoney/transfermoney.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { AdminComponent } from './admin/admin.component';
//import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { RateComponent } from './rate/rate.component';
import { ChooserecipentComponent } from './chooserecipent/chooserecipent.component';
import { MyselfComponent } from './myself/myself.component';
import { SomeonelseComponent } from './someonelse/someonelse.component';
import { BusinessComponent } from './business/business.component';
import { ReviewComponent } from './review/review.component';
import { SuccesspageComponent } from './successpage/successpage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';


const routes: Routes = [
  { path: '', component: MaincontentComponent },
  { path: 'conversion', component: CurrencyrateComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'rate', component:RateComponent },
  { path: 'chooserecipient', component:ChooserecipentComponent },
  { path: 'myself', component:MyselfComponent },
  { path: 'someoneelse', component:SomeonelseComponent },
  { path: 'business', component:BusinessComponent },
  { path: 'review', component:ReviewComponent },
  
  { path: 'success', component:SuccesspageComponent },
  { path: 'adminhome', component:AdminhomeComponent },
 

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingpageComponent,
    CurrencyrateComponent,
    GraphComponent,
    TransfermoneyComponent,
    TransactionhistoryComponent,
    AdminComponent,
    NavbarComponent,
    MaincontentComponent,
    FooterComponent,
    AboutComponent,
    RateComponent,
    ChooserecipentComponent,
    MyselfComponent,
    SomeonelseComponent,
    BusinessComponent,
    ReviewComponent,
    SuccesspageComponent,
    AdminhomeComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
