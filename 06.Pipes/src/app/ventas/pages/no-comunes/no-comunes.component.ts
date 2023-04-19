import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // i18nSelected
  nombre: string = 'Esteban';
  genero: string = 'masculino'

  // si genero es femenino va a mostrar invitarla si no, mostrara invitarlo
  // es decir el pipe evalua sobre la propiedad genero
  invitacionMap ={
    'femenino': 'invitarla',
    'masculino': 'invitarlo'

  }
  // i18nPlural

  // y para este pipe tambien necesitamos crear un map para que entienda como debe mostrar el dato o el texto

  clientes:string[] = [
    'Maria',
    'Juan',
    'Ana',
    'Miguel'
  ]
  clientesMap = {
    '=0': 'No tenemos ningun cliente esperndo',
    '=1': 'tenemos 1 cliente esperndo',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarGenero(){
    if(this.genero == 'masculino'){
      this.nombre = "Melisa"
      this.genero = 'femenino'
    }else if(this.genero == 'femenino'){
      this.nombre =  "Esteban"
      this.genero = 'masculino'
    }
  }

  borrarCliente(){
    this.clientes.pop()
  }


  // KeyValue pipe
  persona = {
    nombre: 'frnando',
    edad : 26,
    direccion: 'Antioquia Colombia'

  }

  // json Pipe
  heroes =[
    {
      nombre : 'Superman',
      vuela: true,
    },
    {
      nombre: 'robin',
      vuela : false,
    },
    {
      nombre : 'acuaman',
      vuela : false
    }
      
  ] 


  // async pype 
  // para usarlo creamos una promesa

  miObservable = interval(3000);


  promesa =  new Promise((resolve) => {
      const arreglo:string[] = ['Juan', 'Ana', 'Mairia'];
      setTimeout(() => {
        resolve(arreglo);
      }, 2000);
    });
  

  valorPromesa = new Promise((resolve) =>{
    setTimeout(() => {
      resolve('esta es la data de la promesa');
    }, 3000);
  });
}
