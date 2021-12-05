import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Component1 } from './component1/component1.component';
import { Component2 } from './component2/component2.component';
import { Component3 } from './component3/component3.component';
import { Component4 } from './component4/component4.component';
import { Component5 } from './component5/component5.component';
import { Component6 } from './component6/component6.component';
import { Component7 } from './component7/component7.component';
import { Component8 } from './component8/component8.component';
import { Component9 } from './component9/component9.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'menu',pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'first', component: Component1},
  {path: 'second', component: Component2},
  {path: 'third', component: Component3},
  {path: 'fourth', component: Component4},
  {path: 'fifth', component: Component5},
  {path: 'sixth', component: Component6},
  {path: 'seventh', component: Component7},
  {path: 'eights', component: Component8},
  {path: 'nineths', component: Component9},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Component1, Component2, Component3, Component4, Component5, Component6, Component7, Component8, Component9, MenuComponent, NotFoundComponent]