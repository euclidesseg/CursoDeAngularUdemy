import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css']
})
export class SwitchesPageComponent {

  constructor(){}

  public myForm : FormGroup = new FormGroup({
    gender: new FormControl('M', [Validators.required]),
    wantNotifications: new FormControl('M', [Validators.required]),
    termsAndNotifications: new FormControl('M', [Validators.requiredTrue]) // que tiene que ser un valor verdadero
  });

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }  
    else{
      console.log(this.myForm.value)
    }
  }
}
