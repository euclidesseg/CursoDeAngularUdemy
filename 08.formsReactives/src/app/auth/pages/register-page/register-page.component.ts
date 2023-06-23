import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

    constructor(private fBuilder : FormBuilder){}



    public myForm : FormGroup = this.fBuilder.group({
      name : ['',[Validators.required] ], // para name usaremos una expresion regular
      email : ['',[Validators.required] ], // para email usaremos una expresion regular
      username : ['',[Validators.required] ],
      password : ['',[Validators.required, Validators.maxLength(8)] ], // para password usaremos una expresion regular
      password2 : ['',[Validators.required, Validators.minLength(8)] ],
    })

    isValidField(){
      // TODO: obtener desde un servicio
    }

    onSubmit(){
      this.myForm.markAllAsTouched();
    }
}
