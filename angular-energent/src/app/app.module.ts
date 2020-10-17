import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AngebotComponent } from './angebot/angebot.component';
import { AngebotDetailComponent } from './angebot-detail/angebot-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AngebotComponent,
    AngebotDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
