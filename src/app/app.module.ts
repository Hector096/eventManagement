import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from './service/token/token.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { HeaderComponent } from '../app/components/navigation/header/header.component';
import { LoginComponent } from '../app/components/login/login.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { SignupComponent } from '../app/components/signup/signup.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpServiceService} from '../app/service/http-service.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    FooterComponent,
    ForgetpassComponent,
    DashboardComponent
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi: true
  },HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
