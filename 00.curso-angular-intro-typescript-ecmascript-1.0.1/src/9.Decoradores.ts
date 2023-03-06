

// un decorador es una función que se utiliza para agregar funcionalidad adicional 
// a una clase existente sin modificar su implementación original.

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
// 1. el parametro constructor que resibe como generico representa la clase que va a decorar
//    es decir la clase que yo decore sera el argumento de este constructor
// 2. <T extends { new (...args: any[]): {} }> este freagmento espesifica que la clase a la que va a decorar 
//    tenga un constructor
// 3. El new indica que se espera que el objeto creado tenga un constructor
// 4. (...args: any[]) especifica que el constructor puede aceptar cualquier número de argumentos de cualquier tipo
// 5. El {} indica que se espera que el constructor devuelva un objeto de cualquier tipo
 
@reportableClassDecorator
class MisuperClase{
    public miPropiedad: string = '123'

    imprimir(){
        console.log('Hola mundo');
    }
}
console.log(MisuperClase);
const miClase = new MisuperClase();
console.log(miClase.imprimir);