import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get user():User | undefined {
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logout(); // Llama a la función de cierre de sesión del servicio authService para cerrar la sesión del usuario
    this.router.navigate(['/auth/login']); // Redirige al usuario a la ruta de inicio de sesión ("/auth/login") utilizando el servicio de enrutamiento 'router'
  }
  

}
