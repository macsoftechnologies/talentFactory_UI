import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { HelloComponent } from './hello/hello.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { AlertComponent } from './components/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { CompanyComponent } from './company/company.component';
import { LearningResourceComponent } from './learning-resource/learning-resource.component';
import { CandidateComponent } from './candidate/candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    CandidateComponent,
    CompanyComponent,
    LearningResourceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
