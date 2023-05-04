import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroesImagePipe'
})
export class HeroesImagePipe implements PipeTransform {

  // Este método transforma la imagen del héroe en una cadena que representa la ruta de la imagen en la aplicación
  transform(heroe: Hero): string {
    // Si el héroe no tiene una ID y no tiene una imagen alternativa, devuelve una imagen predeterminada
    if(!heroe.id && !heroe.alt_image){
      return 'assets/no-image.png'
    }
    // Si el héroe tiene una imagen alternativa, devuelve esa imagen (que debe ser una URL completa desde Internet)
    if(heroe.alt_image) return heroe.alt_image;
    // De lo contrario, devuelve la imagen predeterminada para ese héroe (que está ubicada en la carpeta "assets/heroes" y se nombra como la ID del héroe + ".jpg")
    return `assets/heroes/${heroe.id}.jpg`
  }

}
