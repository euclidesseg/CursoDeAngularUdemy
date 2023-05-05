import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit{

  public hero?:Hero

  constructor(
    private heroService:HeroesService,
    private activateRoute:ActivatedRoute,
    // el servicio de activateRoute nos permite obtener la ruta que nos llega a esta 
    // componente atravez de la ruta de este mismo.
    private router:Router,
    ){}

  ngOnInit(): void {
    this.getHeroe()
  }


  getHeroe(){
    //obtenemos acceso a todos los parametros de la ruta como un observable
    this.activateRoute.params
    .pipe(
      switchMap((params) => this.heroService.getHeroById(params['id']))

      // tambien puedo desestructurar el obgeto de parametros de la ruta
      // switchMap(({id}) => this.heroService.getHeroById(id))
    )
    .subscribe((hero) =>{
      if(!hero) return this.router.navigate(['/heroes/list']);
      console.log(hero)
      this.hero = hero;
      return;
    })

  }
}
