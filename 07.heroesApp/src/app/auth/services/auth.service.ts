import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, map, of, tap} from 'rxjs';

import { environments } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }




  // ==========================================================================
  // Devuelve el usuario actual o undefined si no hay ninguno
  get currentUser(): User | undefined {
    if (!this.user) return undefined; // Si no hay usuario, devuelve undefined
    return structuredClone(this.user); // Devuelve una copia estructurada del usuario
  }
  // ==========================================================================




  // ==========================================================================
  // Función para iniciar sesión
  login(email: string, password: string): Observable<User> {

    // Simulación de una solicitud HTTP para iniciar sesión
    // http.post('login',{ email, password });

    return this.http.get<User>(`${this.baseUrl}/users/1`) // Ejemplo de solicitud HTTP GET para obtener el usuario
      .pipe(
        tap(user => this.user = user), // Asigna el usuario obtenido a la propiedad 'user'
        tap(user => localStorage.setItem('token', 'aASDgjhasda.asdasd.aadsf123k')), // Guarda el token en el almacenamiento local
      );
  }
  // ==========================================================================



  // ==========================================================================
  // Verifica si hay un usuario autenticado 
  //este metodo lo vamos a colocar en los guards
  checkAutentication(): Observable<boolean> | boolean { // devuelve true si no o false si esta autenticado
    if(!localStorage.getItem('token')) return false // : Esta línea verifica si no hay un token almacenado en el localStorage.
    const token = localStorage.getItem('token')  // Esta línea obtiene el token almacenado en el localStorage
    // lo que indica que si hay un token en el local storage
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => this.user = user),
      map(user => !! user), // retorna true si el usuario existe es por eso que se hace doble negacion
      catchError(err => of(false))
    )
  }

  // ==========================================================================



  // ==========================================================================
  logout() {
    this.user = undefined; // Establece la propiedad 'user' como undefined para indicar que no hay usuario actual
    localStorage.clear(); // Limpia todos los datos almacenados en el localStorage, incluyendo el token
  }  
  // ==========================================================================

}

// El operador tap en RxJS es un operador de "efecto secundario" 
// que se utiliza para realizar acciones o realizar manipulaciones
// en los datos dentro de un flujo de observables sin modificar los datos mismos.
// No transforma ni filtra los valores del flujo, sino que permite realizar acciones
// adicionales basadas en esos valores sin alterar el flujo en sí.