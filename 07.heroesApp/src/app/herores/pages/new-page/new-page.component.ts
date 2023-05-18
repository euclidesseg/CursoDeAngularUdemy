import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit{

  constructor(
    private herosServise:HeroesService,
    private activateRoute:ActivatedRoute,
    private router: Router, // esta me sierve par redireccionar hasta el listado nuevamente si el id no
    // no existe
    private snackbar: MatSnackBar,
    private materialDialog: MatDialog
    ){}

  ngOnInit(): void {
   if(!this.router.url.includes('edit')) return
    //  si no incluye la palabra edit no le dare un valor por defecto al formulario
    // y con esto garantizo que cuando entre a guardar un nuevo heroe el formulario no tenga ningun valor
    // y cuando entro a editar desde el listado ya venga con el valor
    this.activateRoute.params
    .pipe(
      switchMap((params) => this.herosServise.getHeroById(params['id']))
    )
    .subscribe((hero)=>{
      if(!hero) return this.router.navigateByUrl('/');

      this.heroForm.reset(hero)
      // El .reset resetea el formulario actual y si las claves o no nombres del objeto
      // que le mando como paraametro coinciden con los de mi formulario los establece automaticamente 
      // incluyendo sus valores
      return
    })
  }



  public publishers = [
    {id: 'DC Comics', value: 'Dc - Comics'},
    {id: 'Marvel Comics', value: 'Marvel - Comics'}
  ]

  // definicion del formulario reactivo
  // este formulario va a manejar todas las propiedades de nuestra interface
  // donde cada una sera un formControl que entrara desde el html

  public heroForm = new FormGroup(
    {
      id:               new FormControl <string>(''),
      superhero:        new FormControl <string>('', {nonNullable:true}), // indico que superhero siempre va a ser un string y no sera null
      publisher:        new FormControl <Publisher>(Publisher.DCComics, {nonNullable:true}),
      alter_ego:        new FormControl(''),
      first_appearance: new FormControl(''),
      characters:       new FormControl(''),
      alt_image:        new FormControl(''),
    }
    
    // Notas: FormGroup es una clase de Angular que se utiliza para
    // agrupar varios objetos FormControl en una estructura de datos colectiva

    // Es una forma eficiente y escalable de
    // manejar formularios complejos en la aplicación Angular
    // el form control es de un tipo de datos generico en el cual yo especifico el tipo de dato que va a resibir
  );


  onSubmitForm():void{
    // console.log({formIsvalid:this.heroForm.valid, value:this.heroForm.value})
    if(this.heroForm.invalid)return
    if(this.currentHero.id){
      this.herosServise.updateHero(this.currentHero)
      .subscribe((hero) => {
        //mostrar snakbar
        this.showSnackbar(`${hero.superhero} udated!`)
      })
    }
    else{
      this.herosServise.addHero(this.currentHero)
      .subscribe((hero) => {
        this.showSnackbar(`${hero.superhero} created!`)
        this.router.navigate(['/heroes/edit',hero.id])
      })
    }
  }


  // cuando intentamos enviar este formulario con heroForm.value nos da error ya que no es del mismo tipo
  // exacto de lo que esper el updateHero de nuestro servicio es por eso que nos creamos un get
  get currentHero():Hero{
    const hero = this.heroForm.value as Hero; // que lo trate como un hero
    return hero
  }



  // miestra un mensage cuando se actualiza o se crea un nuevo heroe
  showSnackbar(message:string):void{
    this.snackbar.open(message, 'done',{duration:2500})
  }

  // me habrira un matDialog para confirmar que quiero eliminar el registro
  onConfirmDeletion(){

    if(!this.currentHero.id)throw Error('hero.id is required!')

    const dialogRef = this.materialDialog.open(ConfirmDialogComponent, {
      data:this.heroForm.value, // este es el datos que le voy a enviara al componente
      
      // en el parametro del metodo open siempre va a ir el componente
      // que queremos mostrar como un matDialog
    });

    // aqui me suscribo al valor que me emite el observable del dialogregf del componente confirmDialogRef
    // y de acuerdo a si es falso o verdadero desido si eliminar o no el metodo
    dialogRef.afterClosed().subscribe(result => {
      if(!result)return
      this.herosServise.deleteHeroByid(this.currentHero.id)
      .subscribe((response) =>{
        if(!response)return
        this.router.navigate(['/heroes'])
      })
    });


  }
}




