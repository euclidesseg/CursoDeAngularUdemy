import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const rtx5090 ={
  name:'RTX 5090',
  price:'3000',
  inStorage:'5'
}
@Component({
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit {

  constructor(private fBuilder:FormBuilder){}
  ngOnInit(): void {
     this.myForm.reset(rtx5090) // asignar valor por defecto cuando al formulario cuando llega a travez de url
  }

  // metodo getter validador
  isValidField(nombreDeCampo:string):boolean | null{ // me retornara error o null
    return this.myForm.controls[nombreDeCampo].errors && this.myForm.controls[nombreDeCampo].touched
    // [nombreDeCampo] esta sintaxis en el formulario me dice que voy a obtener un control de mi Formulario y un control
    // es uno de los campos del mismo
  }

  // metodo para obtener el tipo de error y en funcion mostrar el mensaje de error
  getFieldError(nombreDeCampo:string):string | null{
    if(!this.myForm.controls[nombreDeCampo] ) return null // si no viene error campo nombreDeCampo retorna null
    else{
      const errors = this.myForm.controls[nombreDeCampo].errors || {} // esto me obtiene todos los errores de un campo del formulario en un objeto
      for(const key of Object.keys(errors)){ // me dara un arreglo con todas las llaves que objtenga del objeto errors
          console.log(key)
        switch(key){
          case 'required':
            return 'Este campo es requerido'
          case'minlength':
            return `Minimo ${errors['minlength'].requiredLength} caracteres`
        }
      }
      return ''
    }
  }
  // Creando el formulario de tipo formGroup
  public myForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    price:new FormControl(0,[Validators.required, Validators.min(0)]),
    inStorage:new FormControl(0,[Validators.required, Validators.min(0)]),
  })

  // Creando el formulario con builder
  // public myForm:FormGroup = this.fBuilder.group({
  //   name:['',[Validators.required, Validators.minLength(3)]],
  //   price:[0,[Validators.required, Validators.min(0)]],
  //   inStorage:[0,[Validators.required, Validators.min(0)]],
  // })
  // despues de crear el areglo de validaciones debemos comprobar el formulario en nuestro metodo Onsave

  onSave():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched(); // esto me disparara todas las validaciones en el formulario
      return;
    }

     console.log(this.myForm.value);
     this,this.myForm.reset({price:0,inStorage:0}); //reestableces el formulario
  }


}

//Notas:  name:new FormControl('',[],[]),  name:['',[],[]],

// '' = representa el valor por defecto ese valor se mostrara en el html
// [] = el primer corchete representa validador sincrono puede ser una unica validacion o un arreglo de validaciones
// [] = el segundo corchete representa validador asincrono puede ser una unica validacion o un arreglo de validaciones
// al establces el valor por defecto tambien indico el tipo de datos que tendra eseo campo
