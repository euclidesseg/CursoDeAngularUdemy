import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector   : 'app-form',
  templateUrl: './form.component.html',
  styleUrls  : ['./form.component.css']
})
export class FormComponent {

  // Recibe el arreglo con datos iniciales desde el componente padre
  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder :  0
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo)
    console.log('se ha agregado el personaje ' + this.nuevo.nombre);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
    console.log(this.personajes);
  }
}
