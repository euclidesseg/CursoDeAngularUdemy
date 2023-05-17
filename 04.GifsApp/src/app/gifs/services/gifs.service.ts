import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as  Resource from '../../shared/resource/api-giphy.resouce'
import { Gif } from '../interfaces/gifs.interface';
import { SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
  // agregar provideIN: root
  // indica que este servicio se podra usas de manera global
  // y asi no hay que especificarlo en los providers del modulo
})
export class GifsService {


  constructor(
    // importamos el http que nos permite hacer las peticiones post get put delete
    private http: HttpClient
  ) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    // Aqui nos da error porque esto puede ser nulo, entonces ponemos ! poara indicar a js que sabemos lo que hacemos
    // si no esta el historial con || indicamos que me retorne un arrego basio

    // ||: El operador lógico OR evalúa la expresión a su izquierda 
    // (JSON.parse(localStorage.getItem('historial')!)) y, 
    // si ese valor es considerado falsy (es decir, se evalúa como falso), 
    // se evalúa y devuelve el valor de la expresión a su derecha ([] bacio en este caso).

    // Ahora hacemos lo mismo con la ultima busqueda 
    this.imagenes = JSON.parse(localStorage.getItem('ultimaBusqueda')!) || []
  }

  // creacion de una propiedad para almacenear strings de las razones de busqueda de usuario
  private _historial: string[] = []

  // traer el apyKey desde resource
  private apiKey = Resource.ApiKey;

  // declaramos un arreglo donde guardaremos todas las imagenes que nos trera la peticion
  public imagenes: Gif[] = []

  // obtener los valores del historial
  get getHistorial() {
    return [...this._historial]
    // se usa el operador spred para no modificar el arreglo original
  }

  //insertar valores al historial
  buscarGifts(valorBusqueda: string = '') {
    valorBusqueda = valorBusqueda.trim().toLocaleLowerCase();
    //almacenamos todo en munuscula
    if (!this.getHistorial.includes(valorBusqueda)) {
      // validamos que no exista ya un valor igual a ala busqueda dentro del arreglo
      // si no lo incluye insertamos el valor al arreglo
      this._historial.unshift(valorBusqueda);
      console.log(this.getHistorial)
      this._historial = this._historial.splice(0, 10)
      // Guardamos la informacion de los arreglos ¿ de los historiales de busqueda en nustro localStoage
      localStorage.setItem('historial', JSON.stringify(this._historial))
      // el segundo parametro debe ser un string por esa razon usamos JSON.stringgify para pasar el arreglo a string
      // Para obtener los datos desde el local storage lo hacemos desde nuestro constructor

    }
    const params = new HttpParams()
    .set('api_key',this.apiKey,)
    .set('limit','10',)
    .set('q',valorBusqueda,)
    console.log(params)
    const urlGif = Resource.Url

    /*  fetch(urlGif)
        //esta funcion nos devuelve una promesa esta primera promesa le mansamos un parametro que es 
        // una funcion declarada  la cual pide como parametro un objeto esta funcion se llama en otra funcion
        // la cual seria un proceso1 en mandan en el objeto una funcion llamada json
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

    this.http.get<SearchGifsResponse>(`${urlGif}/search`,{params}) // escribimos el tipo de enpoin
      // si trabajaramos con promesa usariamos .then 
      // pero usamos mejor un subscribe y le mandamos una funcion como argumento
      //  y dentro de ella pedimos un parametro de cualquier tipo
      .subscribe((response) => {
        console.log(response.data)
        this.imagenes = response.data

        localStorage.setItem('ultimaBusqueda', JSON.stringify(this.imagenes))
        // Devo guardar el resultado de la respuesta en el localStorage para mostrarla al recargar la pagina
      })
  }
  // Con fetch nos suscribimos a una promesa y con un http nos suscribimos a un observable
}
