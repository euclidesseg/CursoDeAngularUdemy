
//Desestructurar el siguiente arreglo
const dbz: string[] = ['Goxu', 'Begueta', 'Tron']
// En las desestructuracion de objetos lo importante es la posicion
// por lo que si queremos solo una propiedad podemos separar por comas paa ignorar
const [ , , p1] = dbz

console.log(p1);