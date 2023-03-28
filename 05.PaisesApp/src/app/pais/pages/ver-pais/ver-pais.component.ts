import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  hayError:boolean = false
  title : string = ''
  pais!:Country
  constructor(
    private paisService : PaisService,
    private activatedRoute : ActivatedRoute
    ){}
  ngOnInit(): void {

  // debido a que params es un observable, por esa razon usamos switcMap ese operador 
  // recibe un observable y deburlve otro
    this.activatedRoute.params
    .pipe(
      switchMap(({code}) => {
        return this.paisService.buscarPorCodigo(code)
      }),
      tap(console.log)
    )
    .subscribe({
      next:(resp) =>{
        this.pais = resp[0]
        this.title = this.pais.name.common
        console.log(this.pais)
      },
      error:(err) => {
        this.hayError = true
        console.log(err)
      }
    })

    // aqui params es un observable por eso nos suscribimos a el
    // this.activatedRoute.params
    // .subscribe( ({code}) =>{
    //   console.log(code);

    //   this.paisService.buscarPorCodigo(code)
    //   .subscribe({
    //     next:(respuesta) => {
    //       this.pais = respuesta[0]
    //       console.log (this.pais);
    //       this.title = this.pais.name.nativeName.spa.official
    //     },
    //     error:(respuesta) => {console.log(respuesta)}
    //   })
    // })
  }

}
