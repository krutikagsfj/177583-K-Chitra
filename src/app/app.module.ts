import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule}from '@angular/common/http'

import { AppComponent } from './app.component';
import { GameCityComponent } from './game-city/game-city.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCityComponent
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
