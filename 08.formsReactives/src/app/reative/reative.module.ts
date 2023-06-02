import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReativeRoutingModule } from './reative-routing.module';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';


@NgModule({
  declarations: [
    DinamicPageComponent,
    SwitchesPageComponent,
    BasicPageComponent,
  ],
  imports: [
    CommonModule,
    ReativeRoutingModule
  ]
})
export class ReativeModule { }
