import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import {PropertiesModule} from "./properties/properties.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PropertiesModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
