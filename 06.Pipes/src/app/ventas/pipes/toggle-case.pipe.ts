import { Pipe, PipeTransform } from "@angular/core";

// El decorador pipe indica que esto sera un pipe
// en nombre es el que vamoa a usar en el html para transformr el dato
@Pipe({
    name:'toggleCase'
})

// el metodo pipeTransform tranforma el dato
export class ToggleCasePipe implements PipeTransform{

    // value: es el tipo de datos que va a recibir el pipe ej Euclides | togglecase
    // args son todos los demas argumentos que se van a recivir en el pipe 
    
    // este pipe va a recibir un booleano que dependiendo de si es false o true va a modificar el dato
    // como le pusimos el igual es opcional
    transform(value: string, toUpper:boolean = false):string {
        console.log(value, toUpper)
       return (toUpper)
       ? value.toUpperCase():
       value.toLocaleLowerCase();
    }

}