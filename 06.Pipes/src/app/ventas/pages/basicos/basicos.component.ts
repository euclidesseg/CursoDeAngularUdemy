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
}
