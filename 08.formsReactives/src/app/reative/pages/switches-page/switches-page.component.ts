import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css']
})
export class SwitchesPageComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  public myForm: FormGroup = new FormGroup({
    gender: new FormControl('M', [Validators.required]),
    wantNotifications: new FormControl(true, [Validators.required]),
    termsAndNotifications: new FormControl(false, [Validators.requiredTrue]) // que tiene que ser un valor verdadero
  });


  // este objeto simula a mi formulario en case de venir desde un apirest o atravez de input y se asignaria
  // al formulario dentro del OnInit
  public person = {
    gender:'F',
    wantNotifications:'false',
  }
  isValidField(nombreDeCampo: string): boolean | null { // me retornara error o null
    return this.myForm.controls[nombreDeCampo].errors && this.myForm.controls[nombreDeCampo].touched
    // [nombreDeCampo] esta sintaxis en el formulario me dice que voy a obtener un control de mi Formulario y un control
    // es uno de los campos del mismo
    // this.myForm.controls[nombreDeCampo].errors esto me dice que sea verdadero si hay error
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    else {
      const {termsAndNotifications, ...newPerson} = this.myForm.value; // me crea un nuevo objeto de persona y me excluye la propiedad termsAndNotifications
      this.person = newPerson;
      console.log(this.myForm.value)
      console.log(this.person)

    }
  }
}


// Notas: el valor de person no tiene el valor de termsAndNotifications esto se debe a que este dato se 
// en ocaciones solo se usa para validar el formulario, no para guardar su valor en base de datos.
// pero cuando vamos a mandar la persona hasta la persistencia con el metodo onSave 
// a persona se le asignara todo el valor del formulario incluyendo termsAndNotifications
// por lo que nos dara un error o dependiendo del backend para eso usamos la desestructuracion de el formulario myForm
// para sacar el valor de termsAndNotifications