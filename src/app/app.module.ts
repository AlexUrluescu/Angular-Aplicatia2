import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoaneComponent } from './persoane/persoane.component';
import { BunVenitComponent } from './bun-venit/bun-venit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersoaneComponent,
    BunVenitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
