import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-list-gifs',
  templateUrl: './list-gifs.component.html',
})
export class ListGifsComponent {

  constructor(
    private gifsService: GifsService
  ){ }
  get resultadosGifs(){
    return this.gifsService.imagenes
  }

}
