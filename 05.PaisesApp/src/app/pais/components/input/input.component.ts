import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit{
    
    termino:string = ""
    @Input() title!:string;
    @Output() onQuery    : EventEmitter<string> = new EventEmitter<string>()
    @Output() onDebounce : EventEmitter<string> = new EventEmitter<string>()
    // el onDibounce se va a emitir cuando la persona deja de escribir

    debouncer : Subject<string> = new Subject<string>()

    ngOnInit(){
        // nos suscribimos a los eventos del observable que acabamos de crear con Subject
       this.debouncer
       .pipe(debounceTime(3000) )
        // no se va a emitir el subscribe hasta que el observable deje de emitir valores por 3 seg
       .subscribe((valor) =>{
        console.log(valor)
        this.onDebounce.emit(valor)
        })
    }

    buscar(){
        this.onQuery.emit(this.termino)
    }

    teclaPrecionada(){
        this.debouncer.next(this.termino)
        // usamos next porque ya estamos subscritos a todos sus eventos en el NgOnInit
    }
}

/*
    se podría decir que el método next() de un Subject en RxJS
    es similar al método emit() en Angular.
    entonces emito desde tecla precionada y me notifican en ngOnInit

    flujo: emito el termino desde teclaprecionada y me notifican en 
    ngOnInit emitiendo hasta otro componente el valor recibido en la funcion callback

    recordemos que aun obseervble nos suscribimos y el debouncer al ser un
    obcervable ya nos suscribimos pero tambien podemos usar operadores de rxjs

    usaremos el operador deboucetime
*/