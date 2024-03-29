import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroresRoutingModule } from './herores-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageeComponent } from './pages/search-pagee/search-pagee.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroesImagePipe } from './pipes/heroes-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageeComponent,
    CardComponent,

    //pipes
    HeroesImagePipe,
     ConfirmDialogComponent,

  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeroresRoutingModule,
    MaterialModule

  ]
})
export class HeroresModule { }
