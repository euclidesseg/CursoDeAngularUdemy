import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower : string = "euclides"
  nombreUpper : string = "EUCLIDES"
  nombreCompleto : string = "euCliDes PEreZ"

  // siempre tomara la fecha actual 
  // sin el pipe se vera asi Wed Apr 12 2023 08:27:20 GMT-0500 (hora estándar de Colombia)
  fecha: Date = new Date();

}
