import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { VentasModule } from './ventas/ventas.module';

// cambiar el locale de la app
import localEs from '@angular/common/locales/es-CO';
import localFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localEs)
registerLocaleData(localFr)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
  // nececitamos importar el modulo de rutas para que el app module sepa cual es el modulo
    AppRoutingModule,
    VentasModule
  ],
  exports:[
  ],
  providers: [
    // cambiar el idioma de la app principalmente para los pipes usados
    {provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
