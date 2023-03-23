import { Component } from '@angular/core';
import { Country, Name } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  hayError: boolean = false
  termino: string = ""
  paises: Country[] = []
  constructor(private paisService: PaisService) { }

  buscar(query:string) {
    this.termino = query
    if (this.termino.trim().length === 0) {
      return
    }

    this.paisService.buscarPorPais(this.termino)
      .subscribe({
        next: (respuesta) => {
          this.hayError = false
          console.log(respuesta);
          this.paises = respuesta
          console.log(this.paises)
          this.termino = ''
        },
        error: (error) => {
          this.hayError = true; console.log(error);
          // para que me borre el termino despues de 3 segundos
          setTimeout(() => {
            this.termino = ''
            this.hayError = false
          }, 3000);
        }
      })

    console.log(this.termino)

  }
}
