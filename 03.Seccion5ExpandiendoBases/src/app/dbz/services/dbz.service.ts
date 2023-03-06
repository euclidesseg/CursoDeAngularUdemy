import { ReturnStatement } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

//# El decorador indica que una clase va a se podra inyectar en otros componentes
@Injectable()
export class DbzService {


    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 10000
        }
    ]

    get getPerconajes(): Personaje[] {
        return [...this._personajes]
    }

    setPersonaje(pareametro: Personaje) {
        this._personajes.push(pareametro);
    }
    //   agregarNuevoPersonaje(parametro:Personaje){
    //     this._personajes.push(parametro);
    //   }

}