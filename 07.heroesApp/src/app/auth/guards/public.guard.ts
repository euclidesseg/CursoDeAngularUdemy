import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { Observable, map, tap} from "rxjs";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})
export class PublicGuard implements CanMatch, CanActivate {

    constructor(private autService:AuthService, private router: Router){}

    private checkAuthStatus():boolean | Observable<boolean>{
        return this.autService.checkAutentication()
        .pipe(
            tap(isAutenticated =>{
                if( !!isAutenticated )this.router.navigate(['/']) 
                // si esta autenticado que me lleve a la pagina principal
            }),
            // debido a que el canMatch me va a dejar pasar solo si se retorna true transformamos el dato
            // a retornar con map para que me retorne un true
            map(isAutenticated => ! isAutenticated)
        )
    }
    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
        return this.checkAuthStatus();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>  {
        return this.checkAuthStatus();
    }
}

// debido a que cuando preciono logout se me borra el localstorage
// la funcion checkAutentication del servicio me va a retornar false y por ende el 
// checkAuthStatus me va a retornar false cuando eso pasa transformamos el dato obtenido con map
