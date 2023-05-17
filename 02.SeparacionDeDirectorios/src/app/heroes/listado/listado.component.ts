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

// Notas:La expresión this.heroeBorrado = this.heroes.shift() || ''; 
// utiliza el operador lógico OR (||) para asignar el valor resultante a la variable

// si this.heroes.shift() devuelve un valor falsy (por ejemplo, si el array this.heroes está vacío),
//  entonces se considera como falso y se asigna '' 