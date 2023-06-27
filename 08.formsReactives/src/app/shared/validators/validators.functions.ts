import { FormControl, ValidationErrors } from "@angular/forms";


// ============================= expresiones regulares para correos y para nombre ====================
export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'; // valida que un campo que pida nombre y apellido tenga mas de dos palabras
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; // valida que un campo de correo tenga un dominio luego del arroba
// ===================================================================================================


// la idea de canBeStrider es regresar un objeto con el error 
// y para eso recibimos un formcontrol
export const canBeStrider = (control: FormControl): ValidationErrors | null => { // no puede ser straider

    const value: string = control.value.trim().toLowerCase(); // pasa a minusculas

    // si hay un error regresamos un objeto con el mensaje de error
    if (value === 'strider') {
        return {
            isStrider: true,
        }
    }
    
    return null
}