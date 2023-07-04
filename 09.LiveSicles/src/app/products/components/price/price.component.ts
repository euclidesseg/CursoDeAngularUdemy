import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector:'product-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class ProductPrice implements OnInit, OnChanges, OnDestroy {

  public interval$?: Subscription
  @Input() public price:number = 0;

  ngOnInit(): void {
    console.log('OnInit')
    this.interval$ = interval(1000).subscribe(value => console.log("Tick: " + value))
    // agregamos la referencia a la suscripcion
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('Componente: HIJO onchanges');

  }

  ngOnDestroy(): void {
    console.log('Componente: HIJO ngOnDestroy');
    this.interval$?.unsubscribe();
    // cuando el componente se destruya nos desuscribimos
  }

}
