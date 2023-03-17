import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import * as GeneralEnpoint from '../../../environment/pais.environments'
import { Observable } from 'rxjs'

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

    buscarPorPais(termino : string) : Observable<any>{
        const url = `${this.apiUrl}/name/${termino}`
        // Para obtener la respuesta esta vez lo haremos de manera diferente ya que en vez de obtenerla en una argumento
        // Lo aremos retornando le peticion y como esto retorna a un observable debemos indicar el tipo
        // de retorno del metodo
        return  this.http.get(url)
        // y para esto nos suscribimos sl observable pero en nuestro metodo del componente
    }
}