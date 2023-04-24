import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404PagesComponent } from "./shared/pages/error404-pages/error404-pages.component";


const routes:Routes =[
    // la siguiente ruta indica que va a cargra un componente que esta en otro modulo
    // y por ende se importa el modulo  nos suscribimos a la promesa ya que la carga de un modulo
    // se hace en modo asyncrono entonces estamos entrando desde el modulo principal hasta el 
    // modulo de autenticacion atravez de su path y al cargar este modulo se cargara su ruta
    // principal que es layoutPageComponent
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( (module) => module.AuthModule),
    },
    // hacemos lo mismo con nuestro modulo de heores y habrimos su ruta principal
    {
        path: 'heroes',
        loadChildren: () => import('./herores/herores.module').then( (module) => module.HeroresModule),
    },
    {
        path: '404',
        component:Error404PagesComponent,
    },

    // la siguiente ruta solo se activara si la ruta coincide exsactamente con la cadena vacia
    // es decir, es aqui donde entrara la ruta por defecto cuando se inicie la pagina
    {
        path:'',
        redirectTo: 'heroes',
        pathMatch:"full"
    },
    {
        path:'**',
        redirectTo:'404'
    }
]
@NgModule({
    declarations:[],
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}