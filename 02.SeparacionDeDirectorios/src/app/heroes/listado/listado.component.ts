import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  // pra comprender la directiva *ngFor crearemos un arreglo de heroes
  heroes: string[] = ['Ironman', 'Spiderman', 'Goku'];

  heroeBorrado:string = '';

  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';
  }
}
