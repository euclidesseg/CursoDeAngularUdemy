import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones      : string[] = ['asia', 'america', 'africa','europe', 'oceania',];
  regionActiva  : string = '';
  paises        : Country[] = [];
  hayError      : boolean = false;

  constructor(private paisService : PaisService){}

  activarRegion(region : string){
    if(region == this.regionActiva){return}
    this.regionActiva = region;

    this.paisService.buscarPorRegion(region)
    .subscribe({
      next: (respuesta) => {
        this.paises = respuesta;
        console.log(this.paises);
      },
      error: (err) =>{
        console.log('error en la respuesta', err);
        this.hayError = true
        setTimeout(() => {
          this.hayError = false
        }, 2000);
      }
    })
  }
}
