import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
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
    // el servicio de activateRoute nos permite obtener los parametros dela ruta que nos llega a esta
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
      delay(1000),// hace que tarde 3 segundos en empezar la peticion para que se cargue el loadding en el html
      switchMap((params) => this.heroService.getHeroById(params['id']))

      // tambien puedo desestructurar el obgeto de parametros de la ruta
      // switchMap(({id}) => this.heroService.getHeroById(id))
    )
    // tesnicamente debido al que el metodo pipe obtiene lo que nos retorna el metodo get nos suscribimos
    // directamente al resultado del pipe
    .subscribe((hero) =>{
      if(!hero) return this.router.navigate(['/heroes/list']);
      console.log(hero)
      this.hero = hero;
      return;
    })
    //
  }

  goBack():void{
    this.router.navigateByUrl('heroes/list')
  }
}
// delay() y switchMap() son dos operadores de RxJS que se combinan utilizando el método pipe()
// para crear una cadena de operadores que transforman los datos de un flujo observable.
// n este caso, el operador delay(1000) introduce un retraso de 1 segundo antes de continuar
// con la siguiente operación, y el operador switchMap() se utiliza para cancelar cualquier
// solicitud anterior y obtener un héroe por su ID a través del método getHeroById()
