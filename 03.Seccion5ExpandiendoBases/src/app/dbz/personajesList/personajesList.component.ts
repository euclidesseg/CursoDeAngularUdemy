import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponentList {
  
  constructor( private dbzService: DbzService){}
  // Inidicamos que vamos a recibir un arreglo desde un componente padre
  // ahora vamos a nuestro main-component para agregar en ese template el selector de este componente

  // @Input() personajes:Personaje [] = []

    get personajes(){
      return this.dbzService.getPerconajes
    }
}
