
// la desestructuraciond de argumentos en una funcion es sumamante util ya que ayuda a que el codigo
// sea mas facil de leer

// creamos una interfaz producto
interface Producto {
    desc: string;
    precio: number;
}

// creamos un objeto de tipo Producto
const telefono:Producto ={
    desc: 'Nokia A1',
    precio: 2000,
}
const tableta:Producto ={
    desc: 'Samsung ',
    precio: 3000,
}

//declaramos la funcion que me va a resibir los dos objetos anteriores y me va a retornar un arreglo con el precio y el ISV
function calculaISV( productos: Producto[] ) : [number, number] {
    let total = 0
    // productos.forEach(( producto )=>{
        // del arreglo de producto solo nesesito el preciom, entonces para no tener que escribir producto.prcio
        // desestructuramos el el arreglo para solo tomar el precio
    productos.forEach(( {precio} )=>{
        total += precio;
    })
    return [total, total * 0.15]
}


let productos = [telefono, tableta] 
const[total, isv] = calculaISV(productos);
console.log('Total', + total);
console.log('ISV', + isv);