import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import * as containers from './containers';
import * as components from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ...containers.components,
    ...components.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,

    MatButtonModule,
    MatRadioModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [containers.AppComponent]
})
export class AppModule { }
