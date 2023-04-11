import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { VentasModule } from './ventas/ventas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
  // nececitamos importar el modulo de rutas para que el app module sepa cual es el modulo
    AppRoutingModule,
    VentasModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
