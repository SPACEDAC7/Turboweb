import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import {MemberService} from "./services/member.service";

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    Http,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
