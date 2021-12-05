import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Component1 } from './component1/component1.component';
import { Component2 } from './component2/component2.component';
import { Component3 } from './component3/component3.component';
import { Component4 } from './component4/component4.component';
import { Component5 } from './component5/component5.component';
import { Component6 } from './component6/component6.component';
import { Component7 } from './component7/component7.component';
import { Component8 } from './component8/component8.component';
import { Component9 } from './component9/component9.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
    Component7,
    Component8,
    Component9,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
