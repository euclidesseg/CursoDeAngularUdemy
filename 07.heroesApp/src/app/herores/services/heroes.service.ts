import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
