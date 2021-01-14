import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import * as containers from './containers';

@NgModule({
  declarations: [
    ...containers.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [containers.AppComponent]
})
export class AppModule { }
