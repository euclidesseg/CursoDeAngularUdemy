import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
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


  // para hacer un debouse time
  getSuggestions(query:string):Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
    // esta peticion me traera los heroes cuyo nombre contenga toda la query o una letra del query 
  }


  // agregar heroe
  addHero(hero: Hero):Observable<Hero>{ // que me retorne un observable y este observable retornara un heroe
    return this.http.post<Hero>(`${this.baseUrl}/heroes/`, hero )
    // que me retorne un heroe y que el segundo parametro sea al objeto heroe
  }

  // actualizar
  updateHero(hero: Hero):Observable<Hero>{
    if(!hero.id) throw Error('Hero id is required')
    
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero ) 
    // el segundo parametro seria lo que se conoce como e cuerpo de la peticion lo que se envia por el body
    // patch solo me actualiza partes del objeto
  }
  deleteHeroByid(id: string):Observable<Boolean>{

    return this.http.delete(`${this.baseUrl}/heroes/${id}`) 
    .pipe(
      catchError((error) => of(false)),
      map((response) => true)
    );
    // patch solo me actualiza partes del objeto
  }
}
