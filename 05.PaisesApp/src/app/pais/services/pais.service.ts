import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'

import * as GeneralEnpoint from '../../../environment/pais.environments'
import { Country } from '../interfaces/pais.interface'


@Injectable({
    providedIn: 'root'
    // agregar provideIN: root
    // indica que este servicio se podra usas de manera global
    // y asi no hay que especificarlo en los providers del modulo
})

export class PaisService {
    constructor(
        private http : HttpClient
    ){}
    // Esta url viene desde los environment
    private apiUrl = GeneralEnpoint.generalEnpoint

    buscarPorPais(termino : string) : Observable<Country[]>{
        const url = `${this.apiUrl}/name/${termino}`
        // Para obtener la respuesta esta vez lo haremos de manera diferente ya que en vez de obtenerla en una argumento
        // Lo aremos retornando le peticion y como esto retorna a un observable debemos indicar el tipo
        // de retorno del metodo
        return  this.http.get<Country[]>(url);
        // y para esto nos suscribimos al observable pero en nuestro metodo del componente

            // La siguiente funcion pipe() es una funcion que maneja operadores de rxjs
            // el operadores son unas funciones que se ejecutan en vace al producto de una peticion
            // en este caso usamos el operador catchError que lo que hace es transformar el error 
            // en un observable mediante la funcion of en este caso ele observable que nos retorna
            // en caso de error es una rreglo basio pero es opcional ya que en el componente
            // lo estamos haciendo mediante funcion error

            // .pipe(
            //     catchError((err) => of([]))
            // );
    }
    buscarPorcapital(termino:string):Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${termino}`
        return this.http.get<Country[]>(url)
    }
}