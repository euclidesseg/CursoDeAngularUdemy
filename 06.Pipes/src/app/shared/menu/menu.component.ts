import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
  items:MenuItem [] = []
    //   arreglo de tipo MenuItem de prime

  ngOnInit(): void {
        // llenamos el arreglo con su tipado de MenuItem
        this.items = [ 
            {
                label: 'Pipes de Angular',
                icon : 'pi pi-desktop',
                items:[
                    {
                        // cada item tiene su label que seria su texto y un routerlink 
                        // para redireccionar a su componente segun el componente de prime
                        label:'Textos Y fechas',
                        icon: 'pi pi-align-left',
                        routerLink: 'basicos'
                    },
                    {
                        label:'numeros',
                        icon: 'pi pi-dollar',
                        routerLink:'numeros'
                    },
                    {
                        label:'no-comunes',
                        icon: 'pi pi-globe',
                        routerLink:'no-comunes'
                    }
                ]
            },
            {
                label:'Pipes Personalizados',
                icon:'pi pi-cog',
                items:[
                    {
                        label:'Otros elemento',
                        icon:'pi pi-cog',
                        routerLink:'order'
                    }
                ]
            }
        ];
  }
}
