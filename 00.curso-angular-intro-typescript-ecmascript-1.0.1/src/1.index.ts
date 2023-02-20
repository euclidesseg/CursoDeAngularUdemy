let puntos: number | string | boolean = 95       //De esta manera en TS establezco una variable que resibe varios tipos
let habilidades: number | string[] = ['uno','dos','3']; //Arreglo de JS se le puede agrear el tipo

function sumar(a:number, b:number):number{          //de esta forma establezco que esta funcion me deve retornar un numero
    return a + b;
}