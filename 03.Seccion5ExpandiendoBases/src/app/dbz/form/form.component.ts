import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector   : 'app-form',
  templateUrl: './form.component.html',
  styleUrls  : ['./form.component.css']
})
export class FormComponent {

  // Recibe el arreglo con datos iniciales desde el componente padre
  @Input() nuevo: Personaje = {
    nombre: '',
    poder :  0
  }


  @Output() onNewPersonaje: EventEmitter<Personaje>= new EventEmitter<Personaje>();
  //# Indicamos que nuestro evento va a emitir un nuevo personaje es decir una onjeto de tipo personaje
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.onNewPersonaje.emit(this.nuevo)
    //# se envia el objeto personaje porque es el unico que satisface la interfaz de personaje
    console.log( this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
