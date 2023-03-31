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
  termino : string = ""
  paises  : Country[] = []
  paisesSugeridos : Country[] = []
  sugerencias     : boolean = true
  sugerenciassearch     : boolean = true

  constructor(private paisService: PaisService) { }

  buscar(query:string) {
    this.termino = query
    if (this.termino.trim().length === 0) {
      return
    }
    this.sugerencias = false
    this.paisService.buscarPorPais(this.termino)
      .subscribe({
        next: (respuesta) => {
          this.paises = respuesta
          console.log(this.paises)
        },
        error: (error) => {
          this.hayError = true;
          console.log(error);
        }
      })
    this.termino = ''
  }

  mostrarSugerencias(termino: string){
    // para que me borre el termino despues de 3 segundos
    this.hayError = false
    this.termino = termino
    this.sugerenciassearch = false

    // cuando el usuario precione y deje suelto 3 segundos necesito buscar en el servicio lo que 
    // ha escrito 
  
    this.paisService.buscarPorPais(termino)
    .subscribe({
      next:(respuesta) =>{
        // aqui tenemos una propiedad llamada paises sugeridos que nos guardara la informcion
        // de lo que el usuario busque
        this.paisesSugeridos = respuesta.splice(0,5)
        
      },
      error: (err) => {this.paisesSugeridos = []}
    })
  }

  buscarSugerido(){
    this.buscar(this.termino);
  }
}
