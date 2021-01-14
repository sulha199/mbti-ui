import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import * as containers from './containers';
import * as components from './components';

@NgModule({
  declarations: [
    ...containers.components,
    ...components.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [containers.AppComponent]
})
export class AppModule { }
