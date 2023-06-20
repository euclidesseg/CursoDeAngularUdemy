import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dinamic-page.component.html',
  styleUrls: ['./dinamic-page.component.css']
})
export class DinamicPageComponent {
  constructor(private formBuilder: FormBuilder) { }



  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array([ //msera un arreglo formscontrols de strings
      ['Metal Gear', Validators.required],
      ['MDeathetal Strading', Validators.required]
    ])
    // el arreglo seria ['Metal Gear', 'Death Stranding'] ya que los segundos corchetes indican solo las validaciones
    // y el valor por defecto que tendra cada dato
  })
  public newFavorite : FormControl = new FormControl('',[Validators.required])

  // si usaramos solo formGroup seria de la siguiente manera
  // public myForm2 = new FormGroup({
  //   favoriteGames: new FormArray([])
  // })

  // getter para obtener los datos del favoiteGame
  
  
  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray; // indico que el control que va a retornar es un form array ya que es un form array sus elementos tambien seran controls
  }

  // Eliminar un elemento de un formArray
  onDeleteFavorite(index: number):void{
    this.favoriteGames.removeAt(index); // llamamos a nustro getter que ya lo tenemos
  }

  // agregar elementos a un formarray
  onAddToFavorite():void{
    if(this.newFavorite.invalid) return;
    // extraemos el valor del formcontrol
    const newGame:any = this.newFavorite.value;
    this.favoriteGames.push(this.formBuilder.control(newGame,Validators.required));

    this.newFavorite.reset();
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    else {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
   ( this.myForm.controls['favoriteGames'] as FormArray) = this.formBuilder.array([])
   this.myForm.reset()
  }


  isValidField(nombreDeCampo: string): boolean | null {
    return this.myForm.controls[nombreDeCampo].errors && this.myForm.controls[nombreDeCampo].touched
  }


  
  // Este metodo es el mismo de formularios basicos pero devemos tener en cuenta que este validara un controlArray 
  // entonces agregaremos un nuevo metodo
  isValidFieldInArray(formArray: FormArray, index: number): boolean | null { // nesetio saber cual es el arreglo de controles y saber cual es el indice que esta fallando
    return formArray.controls[index].errors && formArray.controls[index].touched
  }



  getFieldError(nombreDeCampo: string): string | null {
    if (!this.myForm.controls[nombreDeCampo]) return null
    else {
      const errors = this.myForm.controls[nombreDeCampo].errors || {}
      for (const key of Object.keys(errors)) {
        console.log(key)
        switch (key) {
          case 'required':
            return 'Este campo es requerido'
          case 'minlength':
            return `Minimo ${errors['minlength'].requiredLength} caracteres`
        }
      }
      return ''
    }
  }



}
