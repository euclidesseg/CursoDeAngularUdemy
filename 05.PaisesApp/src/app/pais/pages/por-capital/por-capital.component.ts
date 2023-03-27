import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  title = "Buscar Capital...."
  hayError:boolean = false
  capital:string = ''
  paises : Country[] = []

  constructor(private paisService : PaisService){}

  buscar(query:string){
    this.capital = query
    if (this.capital.trim().length === 0) {
      return
    }
    this.paisService.buscarPorcapital(this.capital)
    .subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.paises = respuesta;
        this.hayError = false;
      },
      error: (respuesta) => {
        console.log(respuesta)
        this.hayError = true
      }
    })
  }

  mostrarSugerencias(event:string){
    this.hayError = false
  }
}
