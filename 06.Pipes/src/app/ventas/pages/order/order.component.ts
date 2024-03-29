import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{
  
  public isUppercase:boolean = false;
  public orderBy?: keyof Hero;
  public heroes: Hero[] = [
    {
      name:'superman',
      canFly:true,
      color:Color.blue
    } ,
    {
      name:'batman',
      canFly:false,
      color:Color.black
    } ,
    {
      name:'ironman',
      canFly:true,
      color:Color.red
    } ,
    {
      name:'linterna Verde',
      canFly:true,
      color:Color.green
    } ,

  ]
  toogleUpperCase():void{
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value:keyof Hero){
    this.orderBy = value;
  }
}
