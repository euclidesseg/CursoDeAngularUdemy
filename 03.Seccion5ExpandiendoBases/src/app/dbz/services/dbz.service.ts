import { Injectable } from "@angular/core";

//# El decorador indica que una clase va a se podra inyectar en otros componentes
@Injectable()
export class DbzService{
    constructor(){
        console.log('se activo el servicio');
    }
}