import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl:string = environments.baseUrl
  constructor(private http:HttpClient) { }

  getHeero():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }
  getHeroById(id:string):Observable<Hero|undefined>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    // devido a que esta peticion puede retornar un err ya que el id puede no existir agregamos 
    // el operador pipe para atrapar el error
    .pipe(
      catchError((error) => of(undefined))
      );
      // of() es una función que se utiliza para crear un nuevo Observable
      // que emite uno o varios valores de forma síncrona
      // emite los valores proporcionados como argumentos en orden
      // De esta manera, si ocurre un error en el flujo de datos, 
      // el Observable devolverá el valor undefined en lugar del error. 
      // Si da error voy a regresar un observable que retorna undefined
  }
}
