import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder :  15000
    },
    {
      nombre: 'Vegeta',
      poder :  10000
    }
  ]


  nuevo: Personaje = {
    nombre: 'Goten',
    poder  : 7000
  }

  agregarNuevoPersonaje(parametro:Personaje){
    this.personajes.push(parametro);
  }
}
