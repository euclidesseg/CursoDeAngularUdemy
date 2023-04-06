import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ButtonModule} from 'primeng/button'
import {CardModule} from 'primeng/card'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
