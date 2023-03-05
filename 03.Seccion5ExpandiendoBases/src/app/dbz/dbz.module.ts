import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponentList } from './personajesList/personajesList.component';
import { FormComponent } from './form/form.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponentList,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    MainPageComponent
  ],
  providers:[
    DbzService,
  ]
})
export class DbzModule { }
