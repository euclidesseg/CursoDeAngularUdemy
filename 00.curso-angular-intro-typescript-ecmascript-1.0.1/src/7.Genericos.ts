
// para indicar que una funcion es generica se agrega una notacion de parentesis angulares
// del nombre de la funcion y dentro de ellos la palabra T igual manera en su argumento esa letra se agrega por convencion
//ahora me va a recibir cualquier tipo de dato

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');

// En algunas ocaciones vamos a trabajar con datos que pueden variar ejemplo una peticion http que me puede cambiar el tipo de retorno
// de otra funcion
let soyNumero = queTipoSoy(250)

let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9]);

//tambien le pude cambiar el tipo de retorno o agregar un tipo de dato explicito  de la siguiente manera
let soyExplicito = queTipoSoy<number>(100);
console.log(soyExplicito);
