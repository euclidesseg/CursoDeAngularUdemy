import { Component, Input } from "@angular/core";
import { Country } from "../../interfaces/pais.interface";

@Component({
    selector: 'app-tabla-pais',
    templateUrl:'./pais-tabla.component.html',
    styleUrls:['./pais-tabla.component.css']
})


export class PaisTablaComponent{

    @Input() paises!:Country[]
    @Input() hayError!: boolean

}