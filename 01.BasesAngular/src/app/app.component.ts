import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasesAngular';

  // Usando la interpolacion
  public numero    : number = 10;
  public numeroBase: number = 3;

  public operar(numero:number): void {
    this.numero = this.numero + numero;
  }

}
