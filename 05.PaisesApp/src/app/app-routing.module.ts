import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component'

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component'
import { PorRegionComponent } from './pais/pages/por-region/por-region.component'
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component'


const routes:Routes = [
    // primer componente que mostrare
    {
        path: '',                   // Si esta basio indica el primer componente que quiero mostrar
        component:PorPaisComponent, // el primer modulo que mostrare
        pathMatch: 'full'           // que cuando estemos en una url basia caiga en este lugar
    },
    {
        path:'region',
        component: PorRegionComponent,
        
    },
    {
        path:'capital',
        component: PorCapitalComponent,

    },
    {
        path:'pais/:code',            //Indico que cuando valla a ir a la ruta de este componente
                                    // le debo mandar un argumento atravez de la ruta
        component: VerPaisComponent,
    },
    // Ruta 404 no encontrada
    {
        path:'**',                 // cualquiera otra que no sea las que estan arriba
        redirectTo: ''             // tambien podria hacer un componente para la ruta 404
    }

]


@NgModule({
    //importamos el RouterModule para que haga las configuraciones propieamente de las rutas
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }