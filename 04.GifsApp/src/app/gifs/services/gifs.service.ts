import { Injectable } from '@angular/core';
import * as  Resource  from '../../shared/resource/api-giphy.resouce'

@Injectable({
  providedIn: 'root'
  // agregar provideIN: root
  // indica que este servicio se podra usas de manera global
  // y asi no hay que especificarlo en los providers
})
export class GifsService {

  constructor() { }

  // creacion de una propiedad para almacenear strings de las razones de busqueda de usuario
  private _historial:string[] = ['goku']

  // traer el apyKey desde resource
  private apiKey = Resource.ApiKey;

  // obtener los valores del historial
  get getHistorial(){
    return [...this._historial]
    // se usa el operador spred para no modificar el arreglo original
  }

  //insertar valores al historial
  buscarGifts(valorBusqueda:string){
    valorBusqueda = valorBusqueda.trim().toLocaleLowerCase();
    //almacenamos todo en munuscula
    if(this.getHistorial.includes(valorBusqueda)){
      return;
    }else{
      if(this.getHistorial.length === 10 ){
        this._historial.pop()
      }
    }
    this._historial.unshift(valorBusqueda);
    console.log(this.getHistorial)
  }
}
