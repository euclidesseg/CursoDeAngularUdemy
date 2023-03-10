import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as  Resource from '../../shared/resource/api-giphy.resouce'

@Injectable({
  providedIn: 'root'
  // agregar provideIN: root
  // indica que este servicio se podra usas de manera global
  // y asi no hay que especificarlo en los providers
})
export class GifsService {


  constructor(
    // importamos el http que nos permite hacer las peticiones post get put delete
    private http: HttpClient
  ) { }

  // creacion de una propiedad para almacenear strings de las razones de busqueda de usuario
  private _historial: string[] = ['goku']

  // traer el apyKey desde resource
  private apiKey = Resource.ApiKey;

  // declaramos un arreglo donde guardaremos todas las imagenes que nos trera la peticion
  public imagenes: any[] = []
  
  // obtener los valores del historial
  get getHistorial() {
    return [...this._historial]
    // se usa el operador spred para no modificar el arreglo original
  }

  //insertar valores al historial
  buscarGifts(valorBusqueda: string) {
    valorBusqueda = valorBusqueda.trim().toLocaleLowerCase();
    //almacenamos todo en munuscula
    if (this.getHistorial.includes(valorBusqueda)) {
      return;
    } else {
      if (this.getHistorial.length === 10) {
        this._historial.pop()
      }
    }
    this._historial.unshift(valorBusqueda);
    console.log(this.getHistorial)
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=' + this.apiKey + '&q=' + valorBusqueda + '=10'

  /*  fetch(url)
      //esta funcion nos devuelve una promesa esta primera promesa le mansamos un parametro que es 
      // una funcion declarada  la cual pide como parametro un objeto esta funcion se llama en otra funcion
      // la cual seria un proceso1 mandan en el objeto una funcion llamada json
      // 
      .then(function (respuesta) {
        respuesta.json()
          // a su vez json tambien nos devuelve otra promesa a la que nos suscribimos tambien
          // a esta promesa tambien le mandamos una funcion que pide un array parametro
          .then(function (data) {
            console.log(data)
          })
      })
      .catch(function (respuesta) {
        console.log(respuesta, 'error')
      })
      */
  
      // para no usar fetch lo hacemos con un objeto de angular que es el encargado de hacer peticiones http
      // este objeto es el HttpClient

      this.http.get(url)
      // si trabajaramos con promesa usariamos .then 
      // pero usamos mejor un subscribe y le mandamos una funcion como argumento
      //  y dentro de ella pedimos un parametro de cualquier tipo
      .subscribe((response:any) => {
        console.log(response.data)
         this.imagenes = response.data
      })
    }
}
