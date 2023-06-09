import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

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
    this.myForm.reset(rtx5090)
  }


  // Creando el formulario de tipo formGroup
  // public myForm:FormGroup = new FormGroup({
  //   name:new FormControl('',[],[]),
  //   price:new FormControl(0,[],[]),
  //   inStorage:new FormControl(0,[],[]),
  // })

    // Creando el formulario con builder
  public myForm:FormGroup = this.fBuilder.group({
    name:['',[Validators.required, Validators.minLength(3)],[]],
    price:[0,[Validators.required, Validators.min(0)],[]],
    inStorage:[0,[Validators.required, Validators.min(0)],[]],
  })
  // despues de crear el areglo de validaciones debemos comprobar el formulario en nuestro metodoOnsave

  onSave():void{
    if(this.myForm.invalid) return
     console.log(this.myForm.value)
     this,this.myForm.reset({price:0,inStorage:0}) //reestableces el formulario
  }

  
}

//Notas:  name:new FormControl('',[],[]),  name:['',[],[]],

// '' = representa el valor por defecto ese valor se mostrara en el html
// [] = el primer corchete representa validador sincrono puede ser una unica validacion o un arreglo de validaciones
// [] = el segundo corchete representa validador asincrono puede ser una unica validacion o un arreglo de validaciones
// al establces el valor por defecto tambien indico el tipo de datos que tendra eseo campo