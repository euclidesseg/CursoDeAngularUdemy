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

      const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) =>{ // creamos un observable
        console.log(email)
        if(email === 'fernando@google.com'){
          subscriber.next({emailExiste:true});
          subscriber.complete();
        }else{
          subscriber.next(null);
          subscriber.complete();
        }
      }).pipe(
        delay(3000)
      );
      return httpCallObservable;
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
// { [key: string]: any; };, lo que sugiere que ValidationErrors es un objeto 
// con claves de tipo string y valores de tipo any.

// return this.http.get<any[]>(`http://localhost:3000/user?q=${email}`)
//       .pipe({
//         map(resp =>{
//           return(resp.length === 0)? null: {emailExiste:true}
//         })
//       })
// Basicamente lo que haremos es esto en donde hacemos una peticion a un backend con el email 
// posterior mente esto reggresara una respuesta y si la respuesta es nula significa que si podemos agregar ese correo
// de lo contrario no se podra agregar.

// Cuando creas un Observable, estás creando una secuencia de eventos que se pueden observar
// (escuchar). El subscriber es el objeto que "escucha" estos eventos y reacciona a ellos.