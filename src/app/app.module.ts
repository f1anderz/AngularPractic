import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component6Component } from './component6/component6.component';
import { Component7Component } from './component7/component7.component';
import { Component8Component } from './component8/component8.component';
import { Component9Component } from './component9/component9.component';

@NgModule({
  declarations: [
    AppComponent,
    Component6Component,
    Component7Component,
    Component8Component,
    Component9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
