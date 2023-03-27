import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  title = "Buscar Pais..."
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
          console.log(respuesta);
          this.paises = respuesta
          console.log(this.paises)
          this.termino = ''
        },
        error: (error) => {
          this.hayError = true;
          console.log(error);
        }
      })

    console.log(this.termino)

  }

  mostrarSugerencias(termino: string){
    // para que me borre el termino despues de 3 segundos
    this.hayError = false
    //TODO crear sugerencia
  }
}
