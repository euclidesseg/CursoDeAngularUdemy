import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-pagee',
  templateUrl: './search-pagee.component.html',
  styles: [
  ]
})
export class SearchPageeComponent{

  constructor(private heroService:HeroesService){}

  public searchInput = new FormControl('')
  public selectedHero?:Hero
  // para poder usar esta propiedad FormControl se deve importar un modulo llamado ReactiveFormsModule
  // lo hacemos en nuestro modulo principal

  // search input almacenara los datos escritos en el input mediante el control de formularios

  public heroes:Hero[] = []

  // lo que haremos aqui se puede agregar en el html con las propiedades de angular material
  // pero lo haremos de otra manera

  searchHero(){
    // tomamos el valor del input para asignarlo a value y hacer la peticion
    const value:string = this.searchInput.value || '' // si es nulo que tome un string vacio
    if(value == '') this.heroes = []
    this.heroService.getSuggestions(value)
    .subscribe((response) =>{this.heroes = response})
  }

  // Metodo para seleccionar una opcion luego que obtenemos los resultados con el metodo searchHeroe
  onSelectedOption(event: MatAutocompleteSelectedEvent){
    if( !event.option.value) {
      this.selectedHero = undefined
      return
    }
    const hero:Hero = event.option.value
    this.searchInput.setValue(hero.superhero) // para llenar el input con el valor seleccionado en el mat-option
    this.selectedHero = hero
  }
}
