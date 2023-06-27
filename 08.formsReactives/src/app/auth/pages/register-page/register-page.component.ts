import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  * as customValidators from 'src/app/shared/validators/validators.functions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

    constructor(private fBuilder : FormBuilder){}



    public myForm : FormGroup = this.fBuilder.group({
      name : ['',[Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern)] ], // para name usaremos una expresion regular
      email : ['',[Validators.required, Validators.pattern(customValidators.emailPattern)] ], // para email usaremos una expresion regular
      username : ['',[Validators.required, customValidators.canBeStrider] ],
      password : ['',[Validators.required, Validators.minLength(8)] ], // para password usaremos una expresion regular
      password2 : ['',[Validators.required, Validators.minLength(8)] ],
    })

    isValidField(){
      // TODO: obtener desde un servicio
    }

    onSubmit(){
      this.myForm.markAllAsTouched();
    }


    // El Validator.pattern es una función utilizada en validadores en el 
    // desarrollo de aplicaciones web para verificar si un valor cumple con un patrón específico.
    // En el código proporcionado, se utiliza para validar el formato de los campos "name" y "email" 
    // en un formulario.

    // estas funciones reciben una expresion regular como parametro.
    // Validators.pattern(customValidators.emailPattern) se utiliza para validar el campo "email" 
    // y asegurarse de que cumpla con un patrón de expresión regular específico

    // al igual que Validators.pattern(customValidators.firstNameAndLastnamePattern)
}
