import { Injectable } from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

import * as GeneralEnpoint from '../../../environment/pais.environments'
import { Country } from '../interfaces/pais.interface'


@Injectable({
    providedIn: 'root'
    // agregar provideIN: root
    // indica que este servicio se podra usas de manera global
    // y asi no hay que especificarlo en los providers del modulo
})

export class PaisService {
    constructor( private http : HttpClient ){}
    // Esta url viene desde los environment
    private apiUrl = GeneralEnpoint.generalEnpoint;

    // get que me retorna los parametros que necesito para las peticiones 
    // en esos veremos que haci varias maneras de hacerlo
    get httpParams():HttpParams{
        return new HttpParams().set('fields','altSpellings,flags,name,population')
    }

    buscarPorPais(termino : string) : Observable<Country[]>{
        const url = `${this.apiUrl}/name/${termino}?fields=altSpellings,flags,name,population `
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
        return this.http.get<Country[]>(url,{params: this.httpParams})
    }

    buscarPorCodigo(code:string):Observable<Country[]>{
        const url = `${this.apiUrl}/alpha/${code}`
        return this.http.get<Country[]>(url)
    }

    buscarPorRegion(region : string):Observable<Country[]>{
        const httpParams = new HttpParams()
        .set('fields','altSpellings,flags,name,population')
        const url = `${this.apiUrl}/region/${region}`
        return this.http.get<Country[]>(url,{params:httpParams}) 
        .pipe(
            tap(console.log)
        )
        //indicamos que le vamos a mandar parametros en la utl para que nos retorne solo lo que necesitamos
        // se ha dejado en la busqueda por pais la url mas larga par notar que se puede hacer de dos maneras
    }
}