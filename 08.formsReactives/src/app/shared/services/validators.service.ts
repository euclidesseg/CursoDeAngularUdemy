import { Injectable } from "@angular/core";
import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";

@Injectable({
    providedIn: "root"
})
export class ValidatorService {

    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    public canBeStrider = (control: FormControl): ValidationErrors | null => {

        const value: string = control.value.trim().toLowerCase();

        if (value === 'strider') {
            return {
                isStrider: true,
            }
        }
        return null
    }

    //  ===================================

    isValidField(form: FormGroup, nombreDeCampo: string): boolean | null {
        return form.controls[nombreDeCampo].errors && form.controls[nombreDeCampo].touched
    }
    // devido a que este es un servicio validador de servicio debe recibir el formulario y el campo que validara 
}

// export declare type ValidationErrors = {
//   [key: string]: any;
// };
// Un validatorErrors no es mas que un objeto que tiene una llave que define el nombre del error
// y un valor que define que es el error