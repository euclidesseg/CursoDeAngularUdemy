import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  constructor(private fBuilder:FormBuilder){}


    // Creando el formulario con builder
  public myForm:FormGroup = this.fBuilder.group({
    name:['',[],[]],
    price:[0,[],[]],
    inStorage:[0,[],[]],
  })
    

  onSave():void{
    console.log(this.myForm.value)
  }

  // Creando el formulario de tipo formGroup
  // public myForm:FormGroup = new FormGroup({
  //   name:new FormControl('',[],[]),
  //   price:new FormControl(0,[],[]),
  //   inStorage:new FormControl(0,[],[]),
  // })
}

//Notas:  name:new FormControl('',[],[]),  name:['',[],[]],

// '' = representa el valor por defecto ese valor se mostrara en el html
// [] = el primer corchete representa validador sincrono
// [] = el segundo corchete representa validador asincrono