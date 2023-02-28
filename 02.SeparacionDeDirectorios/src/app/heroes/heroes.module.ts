import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    // Las declaraciones son un arreglo que basicamente dicen que componentes contiene este 
    // modulo y definen las cosas que estaran invisible que en este caso serian los componentes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //los exports significan que cosas se haran visibles fueran de este modulo
    // por ejemplo el app.listado.html esta en el app.module principal esta afuera
    exports:[
        ListadoComponent,
    ],

    // En estos imports simpre iran van solo modulos y lo primero que importamos es el commonModule
    imports:[
        CommonModule
        // El common module es fundamental cuando estamos trabajando con directivas personalizadas de 
        // angular
    ]
})
export class HeroesModule{

}