import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PrimeNg';
  nombre : string = 'Euclides seGundo Perez FernandeZ'
  valor  : number = 1000
  objeto = {
    nombre : 'euclides'
  }
  constructor(private primeNgConfig : PrimeNGConfig){}

  ngOnInit(): void {
    // para efecto over en nuestro p-Fieldset
    this.primeNgConfig.ripple = true
  }
  getNombre(){
    console.log(this.nombre)

  }
}
