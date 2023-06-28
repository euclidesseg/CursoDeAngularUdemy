import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorAsync implements AsyncValidator {

  constructor() { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email)
    return of({
      emailTaken: true
    }).pipe(

      delay(5000)
    )
  }


  registerOnValidatorChange?(fn: () => void): void { //opcional
    throw new Error('Method not implemented.');
  }
}

// para poder usar esta clase como un validador asyncrono debemos implementar un una interfaz a esta 




// validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
//   throw new Error('Method not implemented.');
// }

// control: AbstractControl  = no es mas que nuestro formControl y tambien podria ser un array
// : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> 
//  debe retornar un promesa de tipo ValidationsErrors o null 
//  o puede regresar un ovservable de tipo ValidationsErrors o null 


// export declare type ValidationErrors = {
//   [key: string]: any;
// };
// Un validatorErrors no es mas que un objeto que tiene una llave que define el nombre del error
// y un valor que define que es el error