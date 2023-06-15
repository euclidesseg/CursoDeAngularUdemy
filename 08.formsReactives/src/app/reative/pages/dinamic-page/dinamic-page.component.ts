import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dinamic-page.component.html',
  styleUrls: ['./dinamic-page.component.css']
})
export class DinamicPageComponent {
  constructor(private formBuilder: FormBuilder) { }

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array([ //msera un arreglo formscontrols de strings
      ['Metal Gear', Validators.required, ],
      ['MDeathetal Strading', Validators.required,]
    ])
    // el arreglo seria ['Metal Gear', 'Death Stranding'] ya que los segundos corchetes indican solo las validaciones
    // y el valor por defecto que tendra cada dato
  })
  // si usaramos solo formGroup seria de la siguiente manera
  // public myForm2 = new FormGroup({
  //   favoriteGames: new FormArray([])
  // })

  // getter para obtener los datos del favoiteGame
  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray; // indico que el control que va a retornar es un form array ya que es un form array sus elementos tambien seran controls
  }
  onSubmit():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    else{
      console.log(this.myForm.value);
      this.myForm.reset();
    }
  }
}
