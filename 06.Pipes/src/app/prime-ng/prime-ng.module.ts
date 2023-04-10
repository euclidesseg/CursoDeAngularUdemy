import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';


// Lo unico que va hace este modulo es importar el modulo y exportarlo
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
