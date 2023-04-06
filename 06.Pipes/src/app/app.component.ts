import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeNg';
  nombre : string = 'Euclides seGundo Perez FernandeZ'
  valor  : number = 1000
  objeto = {
    nombre : 'euclides'
  }
  getNombre(){
    console.log(this.nombre)
  }
}
