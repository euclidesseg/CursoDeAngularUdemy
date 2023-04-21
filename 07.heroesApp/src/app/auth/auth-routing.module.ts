import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from '../herores/pages/new-page/new-page.component';


// En Angular, RouterModule.forRoot(routes) se utiliza para configurar las rutas
//  principales de la aplicación y sólo se llama una vez en el archivo app.module.ts.
//  Por otro lado, RouterModule.forChild(routes) se utiliza para configurar 
// las rutas de los módulos secundarios y se llama en el archivo de módulo secundario correspondiente.

// Es decir que este routingmodule  solo lo importamos en su modulo correspondiente
const routes: Routes = [
    {
        path:'',
        component:LayoutPageComponent,
        // Acontinuacion indicarmos que las demas rutas de este modulo seran rutas hijas
        // y de esta manera desde el modulo principal podriamos no solo acceder al LayoutComponent
        // si no a los demas comonenentes con la siguiente sintaxis http://localhost:50202/auth
        children:[
            {
                path:'new-hero',
                component: NewPageComponent,
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class AuthRoutingModule {

}