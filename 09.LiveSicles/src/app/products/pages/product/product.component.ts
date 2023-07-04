import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isVisibleProduct: boolean = false;
  public price:number = 10;
  constructor() {

  }
  ngOnChanges(changes:SimpleChanges): void {
    console.log({changes})
    console.log('ngOnDestroy')

  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')

  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')

  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')

  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')

  }
  ngDoCheck(): void {
    console.log('ngOnDestroy')
    // se dispara si hubo un cambio en una propiedad y esa propiedad hace un cambio en el template
  }
  ngOnInit(): void {
    console.log('ngOnDestroy')

  }

  incrementPrice(){
    this.price ++;
  }
}
