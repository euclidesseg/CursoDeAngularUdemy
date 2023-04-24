import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageeComponent } from './pages/search-pagee/search-pagee.component';

const routes: Routes = [
  {
    // al cargar este modulo siempre se cargara una ruta hija de este archivo de enrutamiento
    path: '',
    component: LayoutPageComponent,

    // Acontinuacion indicarmos que las demas rutas de este modulo seran rutas hijas
    // y de esta manera desde el modulo principal podriamos no solo acceder al LayoutComponent
    // si no a los demas comonenentes con la siguiente sintaxis http://localhost:50202/heroes
    children: [
      {
        path: 'new-hero',
        component: NewPageComponent,
      },
      {
        path: 'search',
        component: SearchPageeComponent
      },
      {
        path: 'edit/:id',
        component: NewPageComponent
      },
      {
        path: 'list',
        component: ListPageComponent
      },

      // Este path es mas un comodin esto significa que va a recibir un id de algun heroe
      // es decir cuando alguien entre a esta ruta y mande un id muestre ese componente
      // el componente verificara si el heroe existe o no para continuar o no
      // es decir para navegar hasta esta ruta solo se debe mandar el parametro y listo ya 
      // que no tiene nombre ninguno
      {
        path: ':id',
        component: HeroPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroresRoutingModule { }
