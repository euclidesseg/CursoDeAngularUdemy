import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisService } from './services/pais.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  // exportamos estos componentes para usarlos donde importemos este modulos
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  providers:[
    PaisService,
  ]

})
export class PaisModule { }
