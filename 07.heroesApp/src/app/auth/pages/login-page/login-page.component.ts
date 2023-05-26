import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin(): void {
    this.authService.login('fernando@gmail.com', '123456') // Llama a la función de inicio de sesión del servicio authService con las credenciales del usuario
      .subscribe(user => {
        // El inicio de sesión fue exitoso, se ejecuta esta función dentro de la suscripción
  
        this.router.navigate(['/']); // Redirige al usuario a la ruta principal ("/") utilizando el servicio de enrutamiento 'router'
      });
  }
  

}
