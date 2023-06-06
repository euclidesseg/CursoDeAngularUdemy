import { Component } from '@angular/core';

interface MenuItem{
  title: string;
  route: string
}
@Component({
  selector: 'shared-app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  public reactiveMenu:MenuItem[] = [
    {title:'Básicos',route:'./reactive/basic'},
    {title:'Dinámicos',route:'./reactive/dynamic'},
    {title:'Swhitches',route:'./reactive/switches'}
  ]
  public authMenu:MenuItem[] = [
    {title:'Registro',route:'./auth'},

  ]
  
}
