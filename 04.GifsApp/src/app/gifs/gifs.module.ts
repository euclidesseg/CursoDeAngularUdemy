import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchGifsComponent } from './search-gifs/search-gifs.component';
import { ListGifsComponent } from './list-gifs/list-gifs.component';
import { GifsService } from './services/gifs.service';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchGifsComponent,
    ListGifsComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    GifsService
  ]
})
export class GifsModule { }
