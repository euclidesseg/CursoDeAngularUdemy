import { Pipe, PipeTransform } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";

@Pipe({
    name:'sortBy'
})
export class SortByPipe implements PipeTransform{
    // indicamos que el primer dato que se va a capitalizar es un arreglo de heroes
    // Y que el valor del argumento va a estar controlado por una propiedad del argumento
    // es decir, solo se aceptare una propiedad que este dentro del arreglo del hero
    transform(heroes:Hero[], sortBy? :keyof Hero | ''):Hero[] {
        switch(sortBy){
            case 'name':
                return heroes.sort((a,b) =>(a.name > b.name) ? 1:-1)
            case 'color':
                return heroes.sort((a,b) =>(a.color > b.color) ? 1:-1)
            case 'canFly':
                return heroes.sort((a,b) =>(a.canFly > b.canFly) ? -1: 1)
            default:
                return heroes
        }
    }

    // "keyof" es una palabra clave de TypeScript que se utiliza
    //  para obtener el tipo de las claves en un objeto.
    //  eje  sortBy ==='color' indica que colo es un apropiedad de ese arreglo
    //  y de esta manera se indica que sera un dato con tipado mediano
 

    // En TypeScript, "unknown" es un tipo de datos que representa un valor desconocido
    //  en tiempo de compilación. Este tipo de datos se utiliza cuando no se sabe de antemano
    //  el tipo de valor que se va a recibir o se va a procesar en una función
}