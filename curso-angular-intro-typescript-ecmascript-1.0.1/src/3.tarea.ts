interface SuperHeore {
    nombre: string;
    edad?: number;
    direccion:  Direccion;
    mostrarDireccion: () => string
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeore = {
    nombre: 'job',
    edad: 26,
    direccion: {
        calle: 'Main st',
        pais: 'usa',
        ciudad: 'NY'
    },

    mostrarDireccion() {
        let { calle, pais, ciudad } = this.direccion
        return this.nombre + ',' + this.edad + ',' + calle;
    }

}
const datos = superHeroe.mostrarDireccion()
console.log(datos)
