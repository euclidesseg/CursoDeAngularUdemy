import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaisModule } from '../pais/pais.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PaisModule,
    AppRoutingModule
  ],
  exports:[
    SidebarComponent,
    
  ],
})
export class SharedModule { }
