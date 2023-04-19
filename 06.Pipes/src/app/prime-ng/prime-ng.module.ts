import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset'
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton'



// Lo unico que va hace este modulo es importar el modulo y exportarlo
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    SplitButtonModule,
  ]
})
export class PrimeNgModule { }
