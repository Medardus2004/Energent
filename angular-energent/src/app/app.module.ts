import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AngebotComponent } from './angebot/angebot.component';
import { AngebotDetailComponent } from './angebot-detail/angebot-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EnergentComponent } from './energent/energent.component';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    AngebotComponent,
    AngebotDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NavbarComponent,
    EnergentComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
