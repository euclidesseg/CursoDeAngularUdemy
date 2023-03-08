import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
})
export class SearchGifsComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>// especificamos el tipo de elemento y que va a recibir un HTMLInputElement
  // debido a que usamos un tipado estricto devemos indicar a ts que el txtBuscar no hay 
  // que inicializarlo ya que no va a ser vacio lo hacemos con el operador!
  // o tambien podemos poner como false la estructura estricta en tsconfig.json
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    this.txtBuscar.nativeElement.value = "";
  }
}
