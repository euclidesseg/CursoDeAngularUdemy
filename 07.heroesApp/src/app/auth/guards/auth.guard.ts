import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class AuthGurd implements CanMatch, CanActivate {

    constructor(){}
    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        console.log('CanMatch')
        console.log(route, segments)
        return true
        // route parametro par la ruta que se queire abrir
        // segments segmentos de url que esta solicitando 

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |Observable<boolean>  {
        // aqui hay cosas un poco diferentes
        // el estate indica que es la fotografia de como esta la ruta en ese momento

        console.log('Canactivate')
        console.log(route, state)
        return true
    }
    
  

}
// para que esto sea un guard debe implementar las interfaces CanMatch y CanActivavte
// CanMatch = poder entrar a la ruta 
// Cuando una ruta hace "match" en Angular, significa que la URL del navegador coincide con 
// la ruta definida en la configuración de enrutamiento de tu aplicación Angular.

// CanActivavte = pder activar la ruta al la que se entro es decir cargar el componente

// Nota:
// En Angular, los "segments de rutas" se refieren a las partes individuales de una 
// URL que se utilizan para navegar y enrutar en una aplicación de Angular. 
// Cada segmento de ruta representa un nivel o una sección de la ruta completa.

// Por ejemplo, consideremos la siguiente URL: https://miaplicacion.com/productos/categoria/zapatos
// 
// En esta URL, los segments de ruta serían:
// 
// productos: representa la sección de la aplicación relacionada con los productos.
// categoria: representa la sección que muestra una categoría específica de productos.
// zapatos: representa la categoría de productos específica, en este caso, "zapatos".