import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BasicosComponent } from "./ventas/pages/basicos/basicos.component";
import { NumerosComponent } from "./ventas/pages/numeros/numeros.component";
import { NoComunesComponent } from "./ventas/pages/no-comunes/no-comunes.component";
import { OrderComponent } from "./ventas/pages/order/order.component";

const routes:Routes = [
    {
        path:'basicos',
        component:BasicosComponent,
        pathMatch:'full'

    },
    {
        path:'numeros',
        component:NumerosComponent,
    },
    {
        path:'no-comunes',
        component:NoComunesComponent,
    },
    {
        path:'order',
        component:OrderComponent,
    },
    {
        path:'**',
        redirectTo:'basicos'
    }
]


@NgModule({
    declarations:[

    ],
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{}