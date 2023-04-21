import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroresRoutingModule } from './herores-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageeComponent } from './pages/search-pagee/search-pagee.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageeComponent
  ],
  imports: [
    CommonModule,
    HeroresRoutingModule
  ]
})
export class HeroresModule { }
