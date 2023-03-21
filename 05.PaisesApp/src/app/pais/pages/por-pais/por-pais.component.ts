import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  hayError: boolean = false
  constructor(private paisService: PaisService) { }
  termino: string = "Hola mundo"

  buscar() {
    if (this.termino.trim().length === 0) {
      return
    }
    
    this.paisService.buscarPorPais(this.termino)
      .subscribe({
        next: (respuesta) => { console.log(respuesta); console.log( respuesta[0].capital)},
        error: (error) => { this.hayError = true; console.log(error)}
      })

    console.log(this.termino)
    // this.termino = ''
  }
}
