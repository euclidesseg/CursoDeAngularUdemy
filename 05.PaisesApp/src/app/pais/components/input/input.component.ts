import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})

export class InputComponent{
    @Output() onQuery:EventEmitter<string> = new EventEmitter<string>()



    termino:string = " Colombia"
    buscar(){
        this.onQuery.emit(this.termino)
    }
}