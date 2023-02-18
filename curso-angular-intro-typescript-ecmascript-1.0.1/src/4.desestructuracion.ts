interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalle;
}
interface Detalle{
    autor:string;
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'perfect',
    detalles: {
        autor: 'ed sheran',
        anio: 2016
    }
}

// aplicando desestructuracion

let{volumen, segundo, cancion, detalles, detalles:{autor, anio}} = reproductor
console.log(volumen);
console.log(segundo);
console.log(cancion);
console.log(autor);
console.log(anio);