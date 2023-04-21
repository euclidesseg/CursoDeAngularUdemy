import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'


// En Angular, RouterModule.forRoot(routes) se utiliza para configurar las rutas
//  principales de la aplicación y sólo se llama una vez en el archivo app.module.ts.
//  Por otro lado, RouterModule.forChild(routes) se utiliza para configurar 
// las rutas de los módulos secundarios y se llama en el archivo de módulo secundario correspondiente.

// Es decir que este routingmodule  solo lo importamos en su modulo correspondiente
const routes:Routes = [];
@NgModule({
    imports:[RouterModule.forChild( routes ) ],
    exports:[ RouterModule],

})
export class AuthRoutingModule{

}