import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public publishers = [
    {id: 'DC Comics', value: 'Dc - Comics'},
    {id: 'Marvel Comics', value: 'Marvel - Comics'}
  ]

  // definicion del formulario reactivo
  // este formulario va a manejar todas las propiedades de nuestra interface
  // donde cada una sera un formControl que entrara desde el html

  public heroForm = new FormGroup(
    {
      id:               new FormControl <string>(''),
      superhero:        new FormControl <string>('', {nonNullable:true}), // indico que superhero siempre va a ser un string y no sera null
      publisher:        new FormControl <Publisher>(Publisher.DCComics, {nonNullable:true}),
      alter_ego:        new FormControl(''),
      first_appearance: new FormControl(''),
      characters:       new FormControl(''),
      alt_image:        new FormControl(''),
    }
    // el form control es de un tipo de datos generico en el cual yo especifico el tipo de dato que va a resibir
  );


  onSubmitForm():void{
    console.log({formIsvalid:this.heroForm.valid, value:this.heroForm.value})
  }
}







// Notas: FormGroup es una clase de Angular que se utiliza para
// agrupar varios objetos FormControl en una estructura de datos colectiva

// Es una forma eficiente y escalable de
// manejar formularios complejos en la aplicación Angular
