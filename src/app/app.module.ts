import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { MeetingroomComponent } from './component/meetingroom/meetingroom.component';
import { NavComponent } from './component/nav/nav.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ClientComponent } from './component/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateClientComponent } from './component/update-client/update-client.component';
import { BirthdayComponent } from './component/birthday/birthday.component';
import { MarriageComponent } from './component/marriage/marriage.component';
import { DisplayMeetingroomComponent } from './component/display-meetingroom/display-meetingroom.component';
import { UpdateMeetingroomComponent } from './component/update-meetingroom/update-meetingroom.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MeetingroomComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    ClientComponent,
    UpdateClientComponent,
    BirthdayComponent,
    MarriageComponent,
    DisplayMeetingroomComponent,
    UpdateMeetingroomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
