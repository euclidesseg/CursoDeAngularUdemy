import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private gifsService: GifsService
  ) {
    this.mostrarHistorial
   }

  get mostrarHistorial() {
    return this.gifsService.getHistorial
  }

  buscar(busqueda:string){
    this.gifsService.buscarGifts(busqueda)
  }
}
